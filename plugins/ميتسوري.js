import fetch from 'node-fetch';

const apiKey = 'a0e2c6022f1aeb28b5020b1dd0faf6ee';

const translateGoogle = async (text, sourceLang, targetLang) => {
  try {
    const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
    const data = await response.json();
    return data[0][0][0];
  } catch (error) {
    throw new Error("حصلت مشكلة في الترجمة: " + error);
  }
};

const commandMapping = {
  'emilia': "ميتسوري"
};

const getVoices = async () => {
  const url = 'https://api.elevenlabs.io/v1/voices';
  const options = { method: 'GET', headers: { 'Content-Type': 'application/json', 'xi-api-key': apiKey }};
  try {
    const response = await fetch(url, options);
    const voices = await response.json();
    return voices;
  } catch (error) {
    console.error('مشكلة في جلب الأصوات:', error);
    return { voices: [] };
  }
};

const convertTextToSpeech = async (text, voiceId) => {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
  const options = { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json', 'xi-api-key': apiKey }, 
    body: JSON.stringify({ 
      text: text, 
      model_id: 'eleven_multilingual_v1',
      voice_settings: { stability: 0.5, similarity_boost: 0.5 },
      language: 'ar' // اللغة العربية
    })
  };
  try {
    const response = await fetch(url, options);
    const audioBuffer = await response.buffer();
    return { audio: audioBuffer };
  } catch (error) {
    console.error('مشكلة في تحويل النص لصوت:', error);
    return null;  
  }
};

let handler = async (message, { conn, text }) => {
  if (!text) {
    throw "*🌸مثال*\n *ميتسوري اهلا بيكي*";
  }
  
  let command;
  try {
    command = await translateGoogle("emilia", 'es', 'en');
  } catch (error) {
    throw new Error("مشكلة في ترجمة الأمر: " + error);
  }
  
  let mappedCommand = commandMapping[command.toLowerCase()];
  if (!mappedCommand) {
    throw "الأمر '" + command + "' غير مدعوم.";
  }

  try {
    const apiResponse = await fetch("https://api.apigratis.site/cai/send_message", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        'external_id': "uayvM9psOOgug10thtXgBnM8OeSdbcJt7gE3aVWSeBk",
        'message': text.trim()
      })
    });

    if (!apiResponse.ok) {
      throw new Error("مشكلة في HTTP! الحالة: " + apiResponse.status);
    }

    const responseData = await apiResponse.json();
    if (responseData.status && responseData.result && responseData.result.state === "STATE_OK") {
      const { replies, character_info } = responseData.result;
      const { name } = character_info;
      
      for (const reply of replies) {
        let translatedText = await translateGoogle(reply.text, 'en', 'ar');
        
        // تحويل الرد اللي هيجي للهجة المصرية
        let egyptianResponse = await translateGoogle(translatedText, 'ar', 'ar-eg');

        // استخدام الصوت رقم 7
        const voices = await getVoices();
        const voice7 = voices.voices[6]; // الصوت رقم 7
        const audio = await convertTextToSpeech(egyptianResponse, voice7.voice_id);
        
        if (audio) {
          // إرسال الرسالة مع الصوت
          await conn.sendMessage(message.chat, {
            text: '*' + mappedCommand + ":* " + egyptianResponse,
            contextInfo: {
              externalAdReply: {
                title: "AI",
                body: "ميتسوري AI",
                thumbnailUrl: "https://files.catbox.moe/97h83a.jpg",
                sourceUrl: "canal"
              }
            }
          }, {
            quoted: message
          });

          // إرسال الصوت
          await conn.sendMessage(message.chat, { 
            audio: audio.audio, 
            fileName: `speech.mp3`, 
            mimetype: 'audio/mpeg', 
            ptt: true 
          }, { quoted: message });
        }
      }
    } else {
      throw "مشكلة في معالجة الطلب";
    }
  } catch (error) {
    throw new Error("مشكلة في إرسال الرسالة: " + error);
  }
};

handler.help = ["rem <txt>"];
handler.tags = ['IA'];
handler.command = /^(ميتسوري|متسوري)$/i;

export default handler;

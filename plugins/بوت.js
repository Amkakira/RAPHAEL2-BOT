import fetch from 'node-fetch'; // Importing fetch for both translation and voice handling.

const apiKey = 'a0e2c6022f1aeb28b5020b1dd0faf6ee'; // Your ElevenLabs API Key

// Function to get available voices from ElevenLabs
const getVoices = async () => {
  const url = 'https://api.elevenlabs.io/v1/voices';
  const options = { method: 'GET', headers: { 'Content-Type': 'application/json', 'xi-api-key': apiKey }};
  try {
    const response = await fetch(url, options);
    const voices = await response.json();
    return voices;
  } catch (error) {
    console.error('حدث خطأ أثناء الحصول على الأصوات:', error);
    return { voices: [] };
  }
};

// Function to convert text to speech using ElevenLabs
const convertTextToSpeech = async (text, voiceId) => {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
  const options = { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json', 'xi-api-key': apiKey }, 
    body: JSON.stringify({ 
      text: text, 
      model_id: 'eleven_multilingual_v1',
      voice_settings: { stability: 0.5, similarity_boost: 0.5 },
      language: 'ar' // Arabic language
    })
  };
  try {
    const response = await fetch(url, options);
    const audioBuffer = await response.buffer();
    return { audio: audioBuffer };
  } catch (error) {
    console.error('حدث خطأ أثناء توليد الصوت:', error);
    return null;  
  }
};

// Google Translate function to handle text translation
const translateGoogle = async (text, sourceLang, targetLang) => {
  try {
    const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
    const json = await response.json();
    return json[0][0][0];
  } catch (error) {
    throw new Error("خطأ في الترجمة: " + error);
  }
};

// Function to clean up translated text
const cleanTranslation = (translatedText) => {
  return translatedText.replace(/\s+/g, ' ').trim(); // Clean extra spaces
};

// Command mapping for Kurumi
const commandMapping = {
  'kurumi': "ميتسوري"
};

// Main handler function for the command
const handler = async (message, { conn, text }) => {
  if (!text) {
    throw "يرجى إدخال نص للتحدث مع البوت : ميتسوري";
  }

  let translatedCommand;
  try {
    translatedCommand = await translateGoogle("kurumi", 'es', 'en');
  } catch (error) {
    throw new Error("حدث خطأ في ترجمة الأمر: " + error);
  }

  let mappedCommand = commandMapping[translatedCommand.toLowerCase()];
  if (!mappedCommand) {
    throw `الأمر '${translatedCommand}' غير مدعوم.`;
  }

  try {
    const response = await fetch("https://api.apigratis.site/cai/send_message", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        'external_id': "jNFgkSl-JTLsDM4d_twATPlFqLkQU-Odmr6h23_d1Jg",
        'message': text.trim()
      })
    });

    if (!response.ok) {
      throw new Error("حدث خطأ في HTTP! الحالة: " + response.status);
    }

    const result = await response.json();
    if (result.status && result.result && result.result.state === "STATE_OK") {
      const { replies, character_info } = result.result;
      const { name: characterName } = character_info;

      // Get available voices and choose voice #2
      const voices = await getVoices();
      const voice = voices.voices[1]; // Voice number 2

      for (const reply of replies) {
        let translatedReply = await translateGoogle(reply.text, 'en', 'ar'); // Translate reply to Arabic
        translatedReply = cleanTranslation(translatedReply); // Clean and improve translation

        // Convert the translated reply into speech
        const audio = await convertTextToSpeech(translatedReply, voice.voice_id); // Use voice number 2
        if (audio) {
          // Send the translated text + voice note
          await conn.sendMessage(message.chat, {
            text: `*${mappedCommand}:* ${translatedReply}`, // Send the translated text
            contextInfo: {
              externalAdReply: {
                title: `${characterName} - C.ai by ɢᴀʙʀɪᴇʟ-ᴊᴛxꜱ`,
                body: "𝑀𝐼𝑇𝑺𝑈𝑅-𝙰𝙸",
                thumbnailUrl: "https://i.pinimg.com/564x/07/bd/59/07bd5983131fd16de41b8d8c43661512.jpg",
                sourceUrl: "channel"
              }
            }
          }, { quoted: message });

          // Send the voice note as well
          await conn.sendMessage(message.chat, { audio: audio.audio, fileName: `speech.mp3`, mimetype: 'audio/mpeg', ptt: true }, { quoted: message });
        }
      }
    } else {
      throw "حدث خطأ في معالجة الطلب.";
    }
  } catch (error) {
    throw new Error("حدث خطأ في إرسال الرسالة: " + error);
  }
};

// Help and command tags in Arabic
handler.help = ["كورومي <النص>"];
handler.tags = ['ذكاء_اصطناعي'];
handler.command = /^(بوت)$/i; // Command is now "كورومي"
handler.register = true;

export default handler;

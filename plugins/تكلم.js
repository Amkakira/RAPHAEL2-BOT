import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, command, text }) => {
  const match = text.match(/^(\d+)\s*\|\s*(.+)/i);
  if (!match) {
    const voices = await getVoices();
    const voiceNames = voices.voices.map((voice, index) => `${index + 1}`).join('\n');
    return m.reply(`*[❗] صيغة استخدام غير صحيحة، ينقص الصوت أو النص.*\n\n*—◉ مثال:*\n◉ ${usedPrefix + command} رقم_الصوت | النص\n\n*—◉ مثال للاستخدام:*\n◉ ${usedPrefix + command} 1 | هذا نص تجريبي\n\n*—◉ قائمة الأصوات المتاحة:*\n${voiceNames}`
    );
  }
  const [, voiceIndex, inputText] = match;
  const voices = await getVoices();
  const voice = voices.voices[parseInt(voiceIndex) - 1];
  if (!voice) {
    const voiceNames = voices.voices.map((voice, index) => `${index + 1}`).join('\n');
    return m.reply(`[❗] لم يتم العثور على أي صوت بالرقم "${voiceIndex}".\n\n—◉ قائمة الأصوات المتاحة:\n${voiceNames}`);
  }
  const audio = await convertTextToSpeech(inputText, voice.voice_id);
  if (audio) {
    conn.sendMessage(m.chat, { audio: audio.audio, fileName: `speech.mp3`, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
  }
};

handler.command = /^(تكلم)$/i;
export default handler;

const apiKey = 'a0e2c6022f1aeb28b5020b1dd0faf6ee';
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

const convertTextToSpeech = async (text, voiceId) => {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
  const options = { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json', 'xi-api-key': apiKey }, 
    body: JSON.stringify({ 
      text: text, 
      model_id: 'eleven_multilingual_v1', // استخدام النموذج متعدد اللغات
      voice_settings: { stability: 0.5, similarity_boost: 0.5 },
      language: 'ar' // تحديد اللغة العربية
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

import{ prepareWAMessageMedia } from '@whiskeysockets/baileys';
import pkg from '@whiskeysockets/baileys';
import axios from 'axios';
const { generateWAMessageFromContent, proto } = pkg
const handler = async (m, { conn, usedPrefix, command }) => {
    // جلب بيانات كريستيانو رونالدو من الملف JSON
    const messi = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json')).data;
    const goat = messi[Math.floor(messi.length * Math.random())];

    // إرسال رد فعل الرموز التعبيرية
    await conn.sendMessage(m.chat, { react: { text: '7️⃣', key: m.key } });

    // إعداد رسالة الوسائط
    const mediaMessage = await prepareWAMessageMedia({ image: { url: goat } }, { upload: conn.waUploadToServer });

    let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "*رونالدو عمك🤙🏻♥*"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "Maiky 𝑩𝒐𝒕"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*〘 عمك رونالدو〙*",
            subtitle: "",
            hasMediaAttachment: true, 
            imageMessage: mediaMessage.imageMessage,  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
                {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"〘 الــتـــــالـي 〙\",\"id\":\".cr7\"}"
             }, 
                {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"〘 الـــــــدعــــم 〙\",\"id\":\".الدعم\"}"
              }
           ],
          }) 
        }) 
       } 
     } 
   },{}) 
    // إرسال الرسالة
    await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
    } 
handler.help = ['كريستيانو', 'cr7', 'رونالدو'];
handler.tags = ['internet'];
handler.command = /^(رونالدو|كريستيانو|الدون|العالمي|cr7)$/i;

export default handler;

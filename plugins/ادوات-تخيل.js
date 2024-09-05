import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';

const handler = async (m, { command, usedPrefix, conn, args, text }) => {

await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

let txt = text;
let lang = 'en';
if (!text && m.quoted && m.quoted.text) txt = m.quoted.text;

try{

const result = await translate(`${txt}`, {to: lang, autoCorrect: true});

let img = `https://api-xovvip.vercel.app/text2img?text=${encodeURIComponent(result.text)}`;

await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

await conn.sendMessage(m.chat, {image: {url: img}}, {quoted: m});
 

 await conn.sendMessage(m.chat, { react: { text: '👌🏻', key: m.key } });
 
 } catch {
 await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
 }
 };
 
 handler.command = /^(تخيل)$/i;
export default handler;

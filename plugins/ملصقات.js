//////حقوق شنكوسة🙋🏻‍♂️
/////////https://whatsapp.com/channel/0029VaoIlUJ1NCrMSnP8hB1K

import { sticker } from '../src/libraries/sticker.js';
import fetch from 'node-fetch';
import MessageType from "baileys";

// أنواع الملصقات المتاحة وأوامرها المقابلة
const stickerTypes = {
  'قبلة': 'kiss',
  'عناق': 'hug',
  'تربيت': 'pat',
  'لكمة': 'slap',
  'صفعة': 'spank',
  'احتضان': 'cuddle'
};

const handler = async (m, { conn, command }) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje;
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`));
  const tradutor = _translate.plugins.sticker_pat;

  const type = stickerTypes[command];
  if (!type) return;  // في حال كان الأمر غير معروف

  try {
    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
    if (!m.mentionedJid.length) m.mentionedJid.push(m.sender);
    
    const res = await fetch(`https://api.waifu.pics/sfw/${type}`);
    const json = await res.json();
    const { url } = json;
    const stiker = await sticker(null, url, `+${m.sender.split('@')[0]} ${tradutor.texto1[0]} ${m.mentionedJid.map((user) => (user === m.sender) ? tradutor.texto1[1] : `+${user.split('@')[0]}`).join(', ')}`);
    
    conn.sendFile(m.chat, stiker, null, { asSticker: true });
  } catch (e) {
    // معالجة الأخطاء
    console.error(e);
  }
};

handler.tags = ['الملصقات'];
handler.command = Object.keys(stickerTypes); // تشمل جميع الأوامر المتاحة
export default handler;

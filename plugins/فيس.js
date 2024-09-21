import fetch from 'node-fetch';
import axios from 'axios';
import fs from 'fs';


const handler = async (m, {conn, text, command, usedPrefix}) => {
  

  if (!text) {
    throw `*ادخل الرابط اولا !!*\n\n*مثال:* ${usedPrefix + command} https://fb.watch/fOTpgn6UFQ/`;
  }


  try {
    
    const response = await fetch(`https://api.neastooid.xyz/api/downloader/fbdl?url=${text}`);
    const data = await response.json();

      let chname = '⛊  𝚂𝙰𝚈𝙴𝙳-𝚂𝙷𝙰𝚆𝙰𝚉𝙰';
      let chid = '120363316635505389@newsletter';
      const videoBuffer = await getBuffer(data.hd);
      const imgthem = data.thumbnail;
      const urlsource = data.url;
      const urlsd = data.sd;
      
      await conn.sendMessage(m.chat, { video: videoBuffer, filename: 'video.mp4', caption: `*تفضل طلبك ي صديقي 🍿❤️*`, contextInfo: { isForwarded: true, forwardingScore: 1, forwardedNewsletterMessageInfo: {newsletterJid: chid, newsletterName: chname, serverMessageId: 100}, externalAdReply: { title: wm, body: 'Download Facebook🍿❤️', sourceUrl: 'https://www.atom.bio/shawaza-2000/', thumbnailUrl: imgthem, mediaType: 2, containsAutoReply: true, showAdAttribution: true, renderLargerThumbnail: true}} }, {quoted: m});

  } catch (error) {
    console.error('Error occurred:', error);
    
    throw `*خطا*`;
  }
};

handler.command = /^(فيس)$/i;
export default handler;

const getBuffer = async (url, options = {}) => {
  const res = await axios({
    method: 'get', 
    url, 
    headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1},
    ...options, 
    responseType: 'arraybuffer'
  });
  return res.data;
};

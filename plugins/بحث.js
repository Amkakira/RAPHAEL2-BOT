import { googleIt } from '@bochilteam/scraper';
import google from 'google-it';
import axios from 'axios';
let handler = async (m, { conn, command, args, usedPrefix }) => {
    const fetch = (await import('node-fetch')).default;
    const text = args.join` `;
    if (!text) throw `⚠️ برجاء كتابة النص اللي عايز تبحث عنه! 😅 *${usedPrefix + command} البحث*`;

    try {
        const url = 'https://google.com/search?q=' + encodeURIComponent(text);
        google({ 'query': text }).then(res => {
            let teks = `🔍 بحث عن: *${text}*\n\n🔗 *رابط البحث:*\n${url}\n\n`;
            for (let g of res) {
                teks += `📌 *${g.title}*\n🔗 ${g.link}\n📝 ${g.snippet}\n\n━━━━━━━━━━\n\n`;
            }
            const ss = `https://image.thum.io/get/fullpage/${url}`;
            conn.sendFile(m.chat, ss, 'screenshot.png', teks, fkontak, false, {
                contextInfo: {
                    externalAdReply: {
                        mediaUrl: null,
                        mediaType: 1,
                        description: null,
                        title: '😻 سوبر ميتسوري بوت - بحث جوجل ',
                        body: '🔍 نتائج البحث من جوجل',
                        previewType: 0,
                        thumbnail: imagen4,
                        sourceUrl: accountsgb
                    }
                }
            });
        });
    } catch {
        handler.limit = 0;
    }
}

handler.help = ['جوجل', 'بحث'].map(v => v + ' <كلمة البحث>');
handler.tags = ['انترنت'];
handler.command = /^جوجل|بحث$/i;
handler.register = true;
handler.limit = 1;

export default handler

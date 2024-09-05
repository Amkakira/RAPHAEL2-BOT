import axios from 'axios';

let handler = async (m, { conn, command, usedPrefix }) => {

    const fakecontact = { 
        'key': { 
            'participants': '0@s.whatsapp.net', 
            'remoteJid': 'status@broadcast', 
            'fromMe': false, 
            'id': '𝑀𝐼𝑇𝑺𝑈𝑅-𝐁𝐎𝐓' 
        }, 
        'message': { 
            'contactMessage': { 
                'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
            } 
        }, 
        'participant': '0@s.whatsapp.net' 
    };

    try {
        // الحصول على رابط صورة عشوائية من picsum.photos
        let imageUrl = 'https://picsum.photos/1920/1080';
        
        // إرسال الرسالة مع رابط الصورة
        await conn.sendButton(m.chat, 'تفضل الخلفية 🧸❤️', '𝑀𝐼𝑇𝑺𝑈𝑅-𝔹𝕆𝕋', imageUrl, [
            ['التالـي', `${usedPrefix + command}`]
        ], null, null, fakecontact);
        
    } catch (error) {
        console.error('Error fetching image:', error);
        await conn.sendMessage(m.chat, 'عذراً، حدث خطأ أثناء محاولة جلب الصورة. الرجاء المحاولة مرة أخرى لاحقاً.', { quoted: fakecontact });
    }
};

handler.help = ['hdimage'];
handler.tags = ['images'];
handler.command = ['خلفية','خلفيه'];

export default handler;

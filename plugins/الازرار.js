import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
import moment from 'moment-timezone';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    const time = moment.tz('Africa/Egypt').format('HH');
    let wib = moment.tz('Africa/Cairo').format('HH:mm:ss');
    let date = new Date().toLocaleDateString('en-EG', { day: 'numeric', month: 'long', year: 'numeric' });

    await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } });

    // قائمة عناوين URL للصور
    const images = [
        'https://telegra.ph/file/a79388f9fa9385f59d6a3.png',
        'https://telegra.ph/file/9c5f3db7081f5fc0f8ad2.jpg',
        'https://telegra.ph/file/187d2833c018e15d866c4.jpg',
        'https://telegra.ph/file/f4f9d2420ac2b1072eb2e.jpg'// أضف عنوان URL ثالث هنا
    ];

    // اختيار عشوائي لعنوان URL من القائمة
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // إعداد رسالة الوسائط
    var messa = await prepareWAMessageMedia({ image: { url: randomImage } }, { upload: conn.waUploadToServer });

    conn.relayMessage(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: {
                        text: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ⌊ ${m.pushName} ⌉*
── • ◈ • ──

┏━━🤖 *『』ī معلومات البوت ī《* 🤖━━┓
┃ ✨  *اسـم البـوت: 𝑀𝐼𝑇𝑺𝑈𝑅–𝐵𝛩𝑇*
┃ 💻  *المـنصـة:* 𝑯𝑬𝑹𝑶𝑲𝑼💀 
┃ 📍  *رقم المطور: 201020639057*
┃ 📚  *اسم المطور: 『➳ᴹᴿ᭄𝐴𝐾𝐼𝑅𝐴➳ᴹᴿ᭄』* 
┗━━━━━━━━━━━━━┛

┏━━⏰ *『』التاريخ والوقت《* ⏰━┓
┃ 📆  *تـاريـخ اليـوم:* 『』${date}《 
┃ ⏲️  *الـوقـت الـحالـي:* 『』${wib}《 
┗━━━━━━━━━━━━━┛
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢`
                    },
                    footer: {
                        text: 'ᴹᴿ᭄𝐴𝐾𝐼𝑅𝐴ᴹᴿ᭄'
                    },
                    header: {
                        title: '',
                        hasMediaAttachment: true,
                        imageMessage: messa.imageMessage,
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '『』CLICK《',
                                    sections: [
                                        {
                                            title: '『』MENUS《',
                                            highlight_label: 'OWNER',
                                            rows: [
                                                {
                                                    header: 'info',
                                                    title: '⌬ ❛╏المطور',
                                                    description: '',
                                                    id: '.المطور'
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏التنزيلات',
                                                    description: '',
                                                    id: '.4',
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏قائمه الجروب',
                                                    description: '',
                                                    id: '.5',
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏الالعاب',
                                                    description: '',
                                                    id: '.6',
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏الترفيه',
                                                    description: '',
                                                    id: '.6',
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏الصور',
                                                    description: '',
                                                    id: '.2',
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏الــادوات',
                                                    description: '',
                                                    id: '.7',
                                                },
{
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏شـرح الـالـقـاب',
                                                    description: '',
                                                    id: '.3',
                                                },

                                                {
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏شروط',
                                                    description: '',
                                                    id: '.20',
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏الدعم',
                                                    description: '',
                                                    id: '.الدعم',
                                                },
                                                {
                                                    header: '『』All MENU《',
                                                    title: '⌬ ❛╏قائمة الاوامر',
                                                    description: '',
                                                    id: '.10',
                                                },
                                            ]
                                        }
                                    ]
                                }),
                                messageParamsJson: 'ZEZO bot'
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: "{\"display_text\":\"『』OWNER《\",\"id\":\".المطور\"}"
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: "{\"display_text\":\"『』GROUP《\",\"url\":\"https://chat.whatsapp.com/Gvj15Uocf6KDc2OUzgx06g\",\"merchant_url\":\"https://chat.whatsapp.com/Gvj15Uocf6KDc2OUzgx06g\"}"
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: "{\"display_text\":\"『』WEBSITE《\",\"url\":\"https://atom.bio/zyad_yasser\",\"merchant_url\":\"https://atom.bio/zyad_yasser\"}"
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "『』CHANNEL《",
                                    url: "https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a",
                                    merchant_url: "https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a"
                                })
                            }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['اوامر','الاوامر','menu','المهام'];

export default handler;

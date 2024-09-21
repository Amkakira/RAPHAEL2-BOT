//Copyright ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B

import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/2784677013ba9efe6cc03.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `test`.trim() },
            footer: { text: `©JoAnimi for test`.trim() },  
            header: {
                title: `test`,
                subtitle: `test`,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
                       {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"title\",\"sections\":[{\"title\":\"title\",\"highlight_label\":\"label\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"}]}]}"
                       },
                       {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"quick_reply\",\"id\":\"massage\"}"
                        },
                        {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"\"}"
                        },
                        {
                 "name": "cta_call",
                 "buttonParamsJson": "{\"display_text\":\"call\",\"id\":\"message\"}"
                        },
                        {
                 "name": "cta_copy",
                 "buttonParamsJson": "{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}"
                        },
                        {
                 "name": "cta_reminder",
                 "buttonParamsJson": "{\"display_text\":\"cta_reminder\",\"id\":\"message\"}"
                        },
                        {
                 "name": "cta_cancel_reminder",
                 "buttonParamsJson": "{\"display_text\":\"cta_cancel_reminder\",\"id\":\"message\"}"
                        },
                        {
                 "name": "address_message",
                 "buttonParamsJson": "{\"display_text\":\"address_message\",\"id\":\"message\"}"
                        },
                        {
                 "name": "send_location",
                 "buttonParamsJson": ""
                        }
  			  		],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(ازرار)$/i;
export default handler;

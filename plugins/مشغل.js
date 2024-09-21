import fetch from 'node-fetch';
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from 'baileys';

let enviando = false;

const handler = async (m, { command, usedPrefix, conn, text }) => {
  const device = await getDevice(m.key.id);

  if (device === 'desktop' || device === 'web') {
    throw `*[❗] الرسائل ذات الأزرار غير متاحة على WhatsApp web، يرجى استخدام الهاتف المحمول لعرض واستخدام الرسائل ذات الأزرار.*`;
  }

  if (enviando) return;
  enviando = true;

  if (command === 'مشغل') {
    if (!text) {
      conn.sendMessage(m.chat, {
        text: `*❲ ❗ ❳ يرجى إدخال نص للبحث في يوتيوب.*\nمثال :\n> ➤ ${usedPrefix + command} القرآن الكريم\n> ➤ ${usedPrefix + command} https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvS_OkDk7p`
      }, { quoted: m });
      await conn.sendMessage(m.chat, { react: { text: '❗', key: m.key } });
      enviando = false;
      return;
    }

    const isYouTubeLink = await isValidYouTubeLink(text);
    await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

    try {
      const apiUrls = isYouTubeLink
        ? [
            `https://api.cafirexos.com/api/ytinfo?url=${text}`,
            `https://api-brunosobrino-koiy.onrender.com/api/ytinfo?url=${text}&apikey=BrunoSobrino`,
            `https://api-brunosobrino-dcaf9040.koyeb.app/api/ytinfo?url=${text}`
          ]
        : [
            `https://api.cafirexos.com/api/ytplay?text=${text}`,
            `https://api-brunosobrino.onrender.com/api/ytplay?text=${text}&apikey=BrunoSobrino`,
            `https://api-brunosobrino-dcaf9040.koyeb.app/api/ytplay?text=${text}`
          ];

      

      const results = await Promise.all(
        apiUrls.map(url => fetch(url).then(res => res.json()).catch(err => null))
      );

      const data = results.find(result => result && result.resultado && result.resultado.url);
      
      if (!data) {
        await handleError(m, usedPrefix, command);
        return;
      }

await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

      const dataMessage = `*❲ نتيجة البحث عن: ${text} ❳*\n\n➤ العنوان: ${data.resultado.title}\n➤ النشر: ${data.resultado.publicDate}\n➤ الرابط: ${data.resultado.url}\n➤ القناة: ${data.resultado.channel}`.trim();

      const mediaMessage = await prepareWAMessageMedia({ image: { url: data.resultado.image } }, { upload: conn.waUploadToServer });
      const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: { text: dataMessage },
              footer: { text: `${global.wm}`.trim() },
              header: {
                hasMediaAttachment: true,
                imageMessage: mediaMessage.imageMessage,
              },
              nativeFlowMessage: {
                buttons: [
                  {
                    name: 'quick_reply',
                    buttonParamsJson: JSON.stringify({
                      display_text: 'AUDIO',
                      id: `${usedPrefix}play.1 ${data.resultado.url}`
                    })
                  },
                  {
                    name: 'quick_reply',
                    buttonParamsJson: JSON.stringify({
                      display_text: 'VIDEO',
                      id: `${usedPrefix}play.2 ${data.resultado.url}`
                    })
                  }
                ],
                messageParamsJson: '',
              }
            }
          }
        }
      }, { userJid: conn.user.jid, quoted: m });

      await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
      await conn.sendMessage(m.chat, { react: { text: '✔️', key: m.key } });
    } catch (error) {
      console.error(error);
      await handleError(m, usedPrefix, command);
    } finally {
      enviando = false;
    }
  } else if (command === 'play.1') {
    await handlePlayCommand(m, text, 'audio', 'error.mp3');
    
  } else if (command === 'play.2') {
    await handlePlayCommand(m, text, 'video', 'error.mp4');
    
  } else {
    throw `*❲ ❗ ❳ أمر غير معروف. يرجى إدخال أمر صحيح.*\nمثال :\n> ➤ ${usedPrefix}مشغل القرآن الكريم\n> ➤ ${usedPrefix}مشغل https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvS_OkDk7p`;
  }
};

async function isValidYouTubeLink(link) {
  const urlPattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
  return urlPattern.test(link);
}

async function handlePlayCommand(m, text, mimeType, fileName) {

  await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
  
  try {
    const apiUrls = [
      `https://api.cafirexos.com/api/v1/yt${mimeType === 'audio' ? 'mp3' : 'mp4'}?url=${text}`,
      `https://api.cafirexos.com/api/v2/yt${mimeType === 'audio' ? 'mp3' : 'mp4'}?url=${text}`,
      `https://api-brunosobrino.onrender.com/api/v1/yt${mimeType === 'audio' ? 'mp3' : 'mp4'}?url=${text}&apikey=BrunoSobrino`,
      `https://api-brunosobrino.onrender.com/api/v2/yt${mimeType === 'audio' ? 'mp3' : 'mp4'}?url=${text}&apikey=BrunoSobrino`,
      `https://api-brunosobrino-dcaf9040.koyeb.app/api/v1/yt${mimeType === 'audio' ? 'mp3' : 'mp4'}?url=${text}`,
      `https://api-brunosobrino-dcaf9040.koyeb.app/api/v2/yt${mimeType === 'audio' ? 'mp3' : 'mp4'}?url=${text}`
    ];

    
    const results = await Promise.all(
      apiUrls.map(url => fetch(url).then(res => res.buffer()).catch(err => null))
    );

    const buff = results.find(result => result);

    if (!buff) {
      await handleError(m, usedPrefix, 'مشغل');
      return;
    }

    await conn.sendMessage(m.chat, {
      [mimeType]: buff,
      mimetype: mimeType === 'audio' ? 'audio/mpeg' : 'video/mp4',
      fileName
    }, { quoted: m });
    await conn.sendMessage(m.chat, { react: { text: '✔️', key: m.key } });
  } catch (error) {
    console.error(error);
    await handleError(m, usedPrefix, 'مشغل');
  } finally {
    enviando = false;
  }
}

async function handleError(m, usedPrefix, command) {
  await conn.sendMessage(m.chat, {
    text: `*❲ ❗ ❳ حدث خطأ عند البحث في يوتيوب.*\nيرجى إدخال نص صحيح أو رابط مثال :\n> ➤ ${usedPrefix}${command} القرآن الكريم\n> ➤ ${usedPrefix}${command} https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvS_OkDk7p`
  }, { quoted: m });
  await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
}

handler.command = /^(play.1|play.2|مشغل)$/i;
export default handler;

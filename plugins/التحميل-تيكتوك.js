const handler = async (m, {conn, text, args, usedPrefix, command}) => {

  if (!text) {
  
  await conn.sendMessage(m.chat, { text: `*❲ ❗ ❳ لم يتم إدخال رابط.*\nيرجي ادخال رابط مثال :\n> ➤  ${usedPrefix + command} https://vm.tiktok.com/ZM686Q4ER/` }, { quoted: m });
  
  await conn.sendMessage(m.chat, { react: { text: '❗', key: m.key } });
  
  return;
  }
  
    if (!/tiktok/.test(text)) {
  
  await conn.sendMessage(m.chat, { text: `*❲ ❗ ❳ حدث خطأ عند البحث عن الرابط .*\nيرجي ادخال رابط صحيح مثال :\n> ➤  ${usedPrefix + command} https://vm.tiktok.com/ZM686Q4ER/` }, { quoted: m });
  
  await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
  
  return;
  }
  
await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

try {
const dataFn = await conn.getFile(`${global.MyApiRestBaseUrl}/api/tiktokv2?url=${args[0]}&apikey=${global.MyApiRestApikey}`);
const cap2 = `تفضل طلبك يا صديقي 🧞`;

await conn.sendMessage(m.chat, {video: dataFn.data, caption: cap2}, {quoted: m});

await conn.sendMessage(m.chat, { react: { text: '👌🏻', key: m.key } });

} catch {
 await conn.sendMessage(m.chat, { text: `*❲ ❗ ❳ حدث خطأ عند البحث عن الرابط .*\nيرجي ادخال رابط صحيح مثال :\n> ➤  ${usedPrefix + command} https://vm.tiktok.com/ZM686Q4ER/` }, { quoted: m });
 
 await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    }
};

handler.command = /^(تيك)$/i;
export default handler;

import fetch from "node-fetch"
let handler = async (m, { conn, text }) => {
 if (!text) {
return m.reply(`فين الرابط`)
}
  let apires = await fetch(`https://jo-animi-apis-for-devs.vercel.app/api/dl?url=${text}&from=fb`);
let res = await apires.json(); 
let title = res.title;
let url = res.result;
  await conn.sendFile(m.chat, url, '', title, m);
};
handler.command = ['tst'];


export default handler;

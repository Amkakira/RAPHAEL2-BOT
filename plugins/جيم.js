//كود جيمي وكمان يقرأ صور
import fs from 'fs';
import fetch from 'node-fetch';
import FormData from 'form-data';

let handler = async (message, { text, conn, usedPrefix, command }) => {
 if (!text && (!message.quoted || !message.quoted.text)) {
 throw "هلا انا جيم\n\n*مثال:\n" + (usedPrefix + command) + " قول قص لي قصه عن الشجاعه*\n*ملاحظة يمكنني ان اقرأة الصور أيضا*\n";
 }
 
 try {
 const encodedText = encodeURIComponent(text);
 let imag = '';  
 let targetMessage = message.quoted ? message.quoted : message;


 if ((targetMessage.msg || targetMessage).mimetype || targetMessage.mediaType || "") {
 let mimeType = (targetMessage.msg || targetMessage).mimetype || targetMessage.mediaType || "";
 if (mimeType.startsWith("video/")) {
 return message.reply("❌ يرجى الرد على صورة، لا فيديو!");
 }
    let q = message.quoted ? message.quoted : message;
    let mime = q.mediaType || '';
 if (/image|audio|sticker|document/.test(mimeType)) {
 
 let media = await targetMessage.download(true); 
 let data = await uploadFile(media);
 imag = data.files[0].url || '';  
 }
 }

 const apiUrl = `https://joanimi-apis-for-devs.vercel.app/api/gemini?text=${encodedText}&img=${imag}`;
 
 conn.sendPresenceUpdate("composing", message.chat);
 const response = await fetch(apiUrl);
 const jsonResponse = await response.json();
 const result = jsonResponse.result;
 message.reply(result);
 } catch (error) {
 console.error("Error:", error);
 throw "حدث خطأ";
 }
};

handler.help = ["جيم"];
handler.tags = ["AI"];
handler.command = ["جيم"];

export default handler;

async function uploadFile(path) {
 let form = new FormData();
 form.append('files[]', fs.createReadStream(path));
 let res = await (await fetch('https://uguu.se/upload.php', {
 method: 'post',
 headers: {
 ...form.getHeaders()
 },
 body: form
 })).json();
 await fs.promises.unlink(path); 
 return res;
}

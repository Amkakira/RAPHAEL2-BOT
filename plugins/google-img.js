import { googleImage } from  '@bochilteam/scraper' 
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `للإستخدام*مثال*: ${usedPrefix}${command} ايتاشي`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link,  'google.jpg' , `*𝑈𝐶𝐻𝐼𝐻𝐴 𝐼𝑇𝐴𝐶𝐻𝐼 𝐵𝛩𝑇*
🔎 النتيجة: *${text}*
🌎 الصورة مأخوذة من جوجل
`,m)
}
handler.help = [ 'gimage' ]
handler.tags = [ 'internet' ]
handler.command = ['صوره','صورة']
handler.rowner = true
export default handler

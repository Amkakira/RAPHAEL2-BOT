let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
 let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}//غير ڤينوم و حط اسم بوتك
let pesan = args.join` `
let oi = `*❖┃الرساله,* ${pesan}`
let teks = `  \n\n ${oi}\n\n *⏎ المـــنشـــن«✅»الجـــمـــاعـــي➥*  :⇣\n`
for (let mem of participants) {
teks += `*⏎┇ تفاعل  ⏎* @${mem.id.split('@')[0]}\n`}
  
teks += `*❂ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*\n\n*⧠━──━⧈⇓《 مــــنـــــشــــــن 》⇓⧈━──━⧠*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fkontak } )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(منشن|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler


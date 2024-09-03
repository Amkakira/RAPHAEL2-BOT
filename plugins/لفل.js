import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
	let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
if (!canLevelUp(user.level, user.exp, global.multiplier)) {
let { min, xp, max } = xpRange(user.level, global.multiplier)
throw `
*❐═━━━═╊⊰🐉⊱╉═━━━═❐*
 *┇👤┇  لــفــلــك  ┇👤┇*

*❐↞┇الاســـ🪪ـم ↞${name}┇*
*❐↞┇لــفــلــ🏆ـك ↞${user.level}┇*
*❐↞┇الاكــسـ🌟ـبــي ↞${user.exp - min}/${xp} ┇*

*⏎┇اهـلا ${name} انـت غـيـر مـسـتـعـد لـلـتـرقـي تـحـتـاج الـي ${max - user.exp} اكسبي┇〄*

*❐═━━━═╊⊰🐉⊱╉═━━━═❐*
`.trim()
}
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (before !== user.level) {
let teks = `🎊 عاش يحب ${conn.getName(m.sender)} المستوي:`
	let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
	
let str = `
*❐═━━━═╊⊰🔝⊱╉═━━━═❐*

*❐↞┇الـلـفـل الـســ☁️ـابـق ↞${before} ➪*
*❐↞┇الـلـفـل الـحــ⛈️ـالـي ↞${user.level} ➥*
 
*❐═━━━═╊⊰🔝⊱╉═━━━═❐*
`.trim()
try {
const img = await levelup(teks, user.level)
conn.sendFile(m.chat, img, 'levelup.jpg', str,fkontak )
} catch (e) {
m.reply(str)
}
}
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['لفل', 'lvl', 'Lvl', 'مستواي'] 

export default handler



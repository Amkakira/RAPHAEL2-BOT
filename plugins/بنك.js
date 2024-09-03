let handler = async (m, {conn, usedPrefix}) => {
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `*❖┃الــمــســـتـــخــدم لــيــس ف قــاعــدة الــبــيــانــات┃⁉️ ❯*`
    conn.reply(m.chat, `
*❐═━━━═╊⊰🐉⊱╉═━━━═❐*
*⌘┇مـحـفـظـة👛⇠ _@${who.split('@')[0]}_ ┇*

*⌘┇ذهـبـك🪙⇠ _${user.gold}_ ┇*

*⌘┇الـمـاسـك💎⇠ _${user.limit}_ ┇*

*⌘┇زمـرد💠⇠  _${user.emerald}_ ┇*

*⌘┇الــنــقـــود💰⇠ _${user.money}_ ┇*

*⌘┇مـــثـــك🎃⇠ _${user.mythic}_ ┇*

*⌘┇الــجــرعــات💊⇠ _${user.potion}_ ┇*
*❐═━━━═╊⊰🐉⊱╉═━━━═❐*
`, fkontak , m , { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['بنك', 'البنك', 'diamond', 'balance'] 

export default handler





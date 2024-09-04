let handler = async (m, { conn, command, text }) => {
let intelligence = `*┃❐━═━═✦◈❨💗❩◈✦═━═━❐┃*

*⏎┇نسبة جــمــالــك ${text} هي ${Math.floor(Math.random() * 100)}%┇☞*
*⏎┇اعععع امـــــوت انـــا فــيــــك🫦♥┇➥*
`.trim()
m.reply(intelligence, null, { mentions: conn.parseMention(intelligence) })}
handler.help = ['intelligence']
handler.tags = ['fun']
handler.command = /^(جمال)$/i
export default handler

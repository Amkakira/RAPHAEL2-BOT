let handler = async (m, { conn, command, text }) => {
let love = `

*⧠━──━⧈⇓《🍁》⇓⧈━──━⧠*
*✧║هلا بك في قسم البنـ🍁ـك*
*❖☾•═━═━═⊳•⊰🍁⊱•⊲═━═━═•☽❖*
 *✧║🍁⃝•║《.يومي》*
 *✧║🍁⃝•║《.رانك》*
 *✧║🍁⃝•║《.راتب》*
 *✧║🍁⃝•║《.لفل》*
 *✧║🍁⃝•║《.هجوم》*
 *✧║🍁⃝•║《.شراء》*
*⧠━──━⧈⇓《🍁》⇓⧈━──━⧠*
*✧║⌬ حقـوق السيد اكيرا✍︎* 
*✧║ا⌬ wa.me/201020639057*
*✧║ا⌬┋𝑇𝐸𝑁𝐷𝛩𝑈, 𝐴𝐾𝐼𝑅𝐴⁵〖🍁〗*
*⧠━──━⧈⇓《🍁》⇓⧈━──━⧠*

 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م6)$/i
export default handler

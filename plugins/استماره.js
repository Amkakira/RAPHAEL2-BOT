let handler = async (m, { conn, command, text }) => {
let love = `
━━━━▣━━◤🐦‍🔥◢━━▣━━━━━

█║🗒️استمارة دخول🗒️║█

█║اللقب👤〔〕

━━━━▣━━◤🐦‍🔥◢━━▣━━━━━

█║من اي انمي📓〔〕

━━━━▣━━◤🐦‍🔥◢━━▣━━━━━

█║من طرف من❓〔〕

━━━━▣━━◤🐦‍🔥◢━━▣━━━━━

█║صوره ل لقبك🌅〔〕

━━━━▣━━◤🐦‍🔥◢━━▣━━━━━
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(استماره)$/i
export default handler

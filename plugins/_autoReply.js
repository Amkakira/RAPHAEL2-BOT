export async function all(m) {
// عندما يرسل شخص ما رابط مجموعة إلى رسائل الخاصة للبوت
if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {

m.reply(`*دعوة البوت للانضمام إلى مجموعة*

مرحبًا @${m.sender.split('@')[0]}
يمكنك استئجار البوت للانضمام إلى مجموعة أو التواصل مع المالك
`)
m.react('💎')
}

return !0
}
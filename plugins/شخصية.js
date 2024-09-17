//مقدم من طرق سينكو
//رابط القناة عندي مشكل فالهاتف ومااقد اخده مهم حلالكم تقدرون تغيرون الحقوق

let handler = async (m, { conn, command, text, usedPrefix, participants }) => {
    if (!text) throw "منشن الشخص الذي تريد معرفة شخصيته"
    const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
 const userChar = [
      "مز/ة",
      "حقير/ة",
      "لطيف/ة",
      "مهذب/ة",
      "عصبي/ة",
      "كاذب/ة",
      "ذكي/ة",
      "غبي/ة",
      "جميل/ة",
      "قبيح/ة",
      "جينتلمان/بنوتةمطبخ",
      "رقيق/ة",
      "مثير/ة",
      "مستفز/ة",
      "غيور/ة",
      "حباب/ة",
      "منحرف/ة",
    ]
    const userCharacterSeletion =
      userChar[Math.floor(Math.random() * userChar.length)]

    let message = `شخصية هذا الشخص @${mentionedUser.split("@")[0]}  مخصصة لتكون *${userCharacterSeletion}* 🔥⚡`
    
    conn.sendMessage(m.chat, { text: message, mentions: [mentionedUser] }, { quoted: m })
    
}
handler.help = ["character @tag"]
handler.tags = ['fun']
handler.command = /^(شخصية)/i

export default handler

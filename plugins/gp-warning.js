let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
  else who = m.chat
  if (!who) throw `✳️ قم بعمل تاغ للشخص المراد تحذيره\n\n📌 مثال: ${usedPrefix + command} @user`
  if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة بياناتي`
  let name = conn.getName(m.sender)
  let warn = global.db.data.users[who].warn
  if (warn < war) {
    global.db.data.users[who].warn += 1
    m.reply(`
⚠️ *تحذير للمستخدم* ⚠️

▢ *المشرف:* ${name}
▢ *المستخدم:* @${who.split`@`[0]}
▢ *التحذيرات:* ${warn + 1}/${war}
▢ *السبب:* ${text}`, null, { mentions: [who] }) 
    m.reply(`
⚠️ *تحذير* ⚠️
لقد تلقيت تحذيرًا من أحد المشرفين

▢ *التحذيرات:* ${warn + 1}/${war} 
إذا تلقيت *${war}* تحذيرات سيتم طردك تلقائيًا من المجموعة`, who)
  } else if (warn == war) {
    global.db.data.users[who].warn = 0
    m.reply(`⛔ تجاوز المستخدم عدد التحذيرات المسموح بها *${war}*، سيتم طرده`)
    await time(3000)
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
    m.reply(`♻️ لقد تمت إزالتك من المجموعة *${groupMetadata.subject}* بسبب تلقيك *${war}* تحذيرات`, who)
  }
}

handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['warn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

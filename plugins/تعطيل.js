// استيراد قاعدة البيانات من الملف
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /تفعيل|true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  
  let isChat = false
  let isBot = false
  
  switch (type) {
    case 'الترحيب':
    isChat = true
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
      case 'الترحيب2':
      isChat = true
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome2 = isEnable
      break
      case 'الكشف':
      isChat = true
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.detect = isEnable
      break
    case 'الكشف2':
    isChat = true
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.detect2 = isEnable
      break
      case 'وضع-جادبوت':
      isBot = true
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.jadibotmd = isEnable
      break
      case 'منع-رؤية-مرة-واحدة':
      isChat = true
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.antiviewonce = isEnable
      break
    case 'المحادثات-التلقائية':
    isChat = true
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.jarvis = isEnable
      break
    case 'حظر-الرسائل-الخاصة':
      isBot = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      bot.pmblocker = isEnable
      break
    case 'سيرة-ذاتية-تلقائية':
      isBot = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      bot.autoBio = isEnable
      break
    case 'منع-خاص':
      isBot = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.antiPrivate = isEnable
      break
    case 'ملصقات-تلقائية':
    isChat = true
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.autosticker = isEnable
      break
    // باقي الحالات بنفس الطريقة مع تعديل المصطلحات للتعريب
    default:
      if (!/[01]/.test(command))
        return m.reply(`
≡ قائمة الخيارات

◈──『 *للمشرفين*』───⳹
⛊ الترحيب
⛊ الترحيب2
⛊ منع-الروابط
⛊ منع-الروابط2
⛊ منع-الإزعاج
⛊ منع-الألفاظ-النابية
⛊ ملصقات-تلقائية
⛊ منع-رؤية-مرة-واحدة
⛊ مستوى-تلقائي
⛊ محادثات-تلقائية
⛊ أصوات
⛊ الكشف
⛊ الكشف2
⛊ محتوى-للكبار
╰──────────⳹ 

◈──『 *للمالك*』───⳹
⛊ الرسائل-الخاصة
⛊ وضع-جادبوت
⛊ مجموعات-فقط
⛊ كتابة-تلقائية
⛊ قراءة-تلقائية
⛊ حالة-تلقائية
⛊ منع-خاص
⛊ سيرة-ذاتية-تلقائية
⛊ تنزيلات-تلقائية
╰──────────⳹
*📌 مثال :*
*${usedPrefix}تفعيل* الترحيب
*${usedPrefix}تعطيل* الترحيب
`)
      throw false
  }

  m.reply(
    `
✅ *${type}* دلوقتي *${isEnable ? 'مفعل' : 'متوقف'}* ${isChat ? 'للدردشة دي' : isBot ? 'للبوت ده' : 'لكل'}
`.trim()
  )
}
handler.help = ['تفعيل', 'تعطيل'].map(v => v + ' <اختيار>')
handler.tags = ['الاعدادات']
handler.command = /^(تفعيل|تعطيل|(en|dis)able|(turn)?o(n|ff)|[01])$/i

export default handler

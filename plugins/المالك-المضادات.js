
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
    case 'welcome':
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
      case 'welcome2':
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
      case 'detect': 
      isChat = true
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2': 
    isChat = true
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
      case 'modejadibot':       
      isBot = true
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.jadibotmd = isEnable
      break
      case 'antiviewonce': 
      isChat = true
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
      chat.antiviewonce = isEnable;
      break;
    case 'jarvis':
    case 'autotalk':
    isChat = true
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
    case 'pmblocker':
      isBot = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      bot.pmblocker = isEnable
      break
    case 'autobio':
      isBot = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      bot.autoBio = isEnable
      break 

case 'antiprivate':
  isBot = true
  if (!isOwner) {
    global.dfail('owner', m, conn)
    throw false
  }
  bot.antiPrivate = isEnable
  break
    case 'autosticker':
    isChat = true
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
    case 'antispam':
    isChat = true
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
      chat.antiSpam = isEnable
      break
    case 'antidelete':
    case 'delete':
    isChat = true
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
      chat.delete = isEnable
      break
    case 'antitoxic':
    case 'antibadword':
    isChat = true
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
      chat.antiToxic = isEnable
      break

    case 'document':
    case 'documento':
    isChat = true
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
      chat.useDocument = isEnable
      break
    case 'autostatus':
      isBot = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      chat.viewStory = isEnable
      break

    case 'antilink':
    case 'antilinkwa':
    case 'antilinkwha':
    isChat = true
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
      chat.antiLink = isEnable
      break

      
    case 'antilink2':
    case 'antilinkwa2':
    case 'antilinkwha2':
    isChat = true
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
      chat.antiLink2 = isEnable
      break

    case 'nsfw':
    case '+18':
    case 'modohorny':
    isChat = true
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
      chat.nsfw = isEnable
      chat.modohorny = isEnable
      break

    case 'autolevelup':
      isChat = true
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
    
      chat.autolevelup = isEnable
      break
      
      case 'audios': 
      isChat = true
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
      chat.audios = isEnable;
      break;
      
      case 'audios_bot': 
      isBot = true
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;
      break;

    case 'chatbot':
    isChat = true
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
      chat.chatbot = isEnable
      break
      
      case 'autoread': 
      isBot = true
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      break;

    case 'restrict':
    case 'restringir':
      isBot = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'autotype':
    case 'alwaysonline':
      isBot = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.autotype = isEnable
      break

      case 'antiPrivate':
      isBot = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.antiPrivate = isEnable
      break
      
      case 'autodownload':
      isBot = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.autodownload = isEnable
      break
      
    case 'anticall':
    case 'nocall':
      isBot = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.antiCall = isEnable
      break
    case 'onlypv':
    case 'onlydm':
    case 'onlymd':
    case 'solopv':
      isBot = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break

    case 'gponly':
    case 'onlygp':
    case 'grouponly':
    case 'sologp':
    case 'sologrupo':
      isBot = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break

    default:
      if (!/[01]/.test(command))
        return m.reply(`
≡ List of options

◈──『 *ADMIN*』───⳹
⛊ welcome
⛊ welcome2
⛊ antilink
⛊ antilink2
⛊ antispam
⛊ antitoxic
⛊ autosticker
⛊ antiviewonce
⛊ autolevelup
⛊ chatbot
⛊ audios
⛊ jarvis
⛊ detect
⛊ detect2
⛊ nsfw
╰──────────⳹ 

◈──『 *OWNER*』───⳹
⛊ onlydm
⛊ modejadibot
⛊ grouponly
⛊ autotype
⛊ autoread
⛊ autostatus
⛊ antiPrivate
⛊ autobio
⛊ audios_bot
⛊ autodownload
╰──────────⳹
*📌 Example :*
*${usedPrefix}on* welcome
*${usedPrefix}off* welcome
`)
      throw false
  }

  m.reply(
    `
✅ *${type}* Now *${isEnable ? 'Active' : 'Deactive'}* ${isChat ? 'for this chat' : isBot ? 'for this bot' : 'for all'}
`.trim()
  )
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['config']
handler.command = /^(تفعيل|تعطيل|(en|dis)able|(turn)?o(n|ff)|[01])$/i

export default handler


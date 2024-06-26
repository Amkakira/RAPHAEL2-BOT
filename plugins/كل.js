import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    await conn.sendMessage(m.chat, { react: { text: '⚠️', key: m.key } })
let videoUrl = 'https://telegra.ph/file/12e429597047000c0eb77.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = ` 
*⧠━──━⧈⇓《🎉》⇓⧈━──━⧠*
*⏎┇اهلا بك في قسم الترفيــ🌸هه*
*⧠━──━⧈⇓《🎉》⇓⧈━──━⧠*
*⏎┇🌸⃝•┇【.الـمــطـور 】➥*
*⏎┇🌸⃝•┇【.تــــــــوب 】➥*
*⏎┇🌸⃝•┇【.الشخصيه】➥*
*⏎┇🌸⃝•┇【.لــــــــــــو 】➥*
*⏎┇🌸⃝•┇【.ذكـــــــــاء】➥*
*⏎┇🌸⃝•┇【.غــــبــــاء 】➥*
*⏎┇🌸⃝•┇【.حــكــمــه 】➥*
*⏎┇🌸⃝•┇【.جــمــيــل 】➥*
*⏎┇🌸⃝•┇【.طــــــلاق 】➥*
*⏎┇🌸⃝•┇【.تــطقـيـم 】➥*
*⏎┇🌸⃝•┇【.طــقــــم2】➥*
*⏎┇🌸⃝•┇【.طــقــمـي 】➥*
*⏎┇🌸⃝•┇【.خــــروف 】➥*
*⏎┇🌸⃝•┇【.تـــــــــاج 】➥*
*⏎┇🌸⃝•┇【.هـــــــــــل】➥*
*⏎┇🌸⃝•┇【.صـراحــه 】➥*
*⏎┇🌸⃝•┇【.تـــكــــرار 】➥*
*⏎┇🌸⃝•┇【.حــــروف 】➥*
*⏎┇🌸⃝•┇【.تـصـمـيـم 】➥*
*⏎┇🌸⃝•┇【.ايــديـــت 】➥*
*⏎┇🌸⃝•┇【.خــــــــط 】➥*
*⏎┇🌸⃝•┇【.مـــيــمـــز 】➥*
*⏎┇🌸⃝•┇【.زخــــرفـه 】➥*
*⏎┇🌸⃝•┇【.قــــلـــــب 】➥*
*⏎┇🌸⃝•┇【.انــحـراف 】➥*
*⏎┇🌸⃝•┇【.كــــــذاب 】➥*
*⏎┇🌸⃝•┇【.مـــراتـــي 】➥*
*⏎┇🌸⃝•┇【.اخــتــفـاء 】➥*
*⏎┇🌸⃝•┇【.رفــــيــــق 】➥*
*⏎┇🌸⃝•┇【.زوجـــنــي 】➥*
*⏎┇🌸⃝•┇【.صــــفـــــع 】➥*
*⏎┇🌸⃝•┇【.رومـنـــسـي】➥*
*⏎┇🌸⃝•┇【.خـــيـــانـــه】➥*
*⏎┇🌸⃝•┇【.زواج 】➥*
*⏎┇🌸⃝•┇【.ورع 】➥*
*⧠━──━⧈⇓《🕹️》⇓⧈━──━⧠*
*⧉┇اهلا بك في قسم الالعـ👾ـاب*
*⧠━──━⧈⇓《🕹️》⇓⧈━──━⧠*
*⏎┇🌸⃝•┇【.ســــؤال 】➥*
*⏎┇🌸⃝•┇【.كـــــــت 】➥*
*⏎┇🌸⃝•┇【.ديـــــــن 】➥*
*⏎┇🌸⃝•┇【.عــــيـــن 】➥*
*⏎┇🌸⃝•┇【.اكـس او 】➥*
*⏎┇🌸⃝•┇【.كــــــوره 】➥*
*⏎┇🌸⃝•┇【.رياضيات】➥*
*⏎┇🌸⃝•┇【.تــحــدي 】➥*
*⏎┇🌸⃝•┇【.فـــكـــك 】➥*
*⏎┇🌸⃝•┇【.رتـــــــب 】➥*
*⏎┇🌸⃝•┇【.الــمـــارد 】➥*
*⏎┇🌸⃝•┇【.ايـمـوجي】➥*
*⏎┇🌸⃝•┇【.فــــزوره 】➥*
*⏎┇🌸⃝•┇【.مــوجـي 】➥*
*⏎┇🌸⃝•┇【.شــبــيـه 】➥*
*⏎┇🌸⃝•┇【.اعـــــرف】➥*
*⏎┇🌸⃝•┇【.عــــلـــم 】➥*
*⏎┇🌸⃝•┇【.جـــمــــع】➥*
*⏎┇🌸⃝•┇【.عــكـــس】➥*
*⏎┇🌸⃝•┇【.حــــــرب】➥*
*⏎┇🌸⃝•┇【.عكسعكس】➥*
*⧠━──━⧈⇓《💫》⇓⧈━──━⧠*
*⧉┇اهلا بك في  اوامر الجــروبـ🌟ـات*
*⧠━──━⧈⇓《💫》⇓⧈━──━⧠*
*⏎┇🌸⃝•┇【.مــنــشـن】➥*
*⏎┇🌸⃝•┇【.خــفــض】➥*
*⏎┇🌸⃝•┇【.رفـــــــــع】➥*
*⏎┇🌸⃝•┇【.جــــروب】➥*
*⏎┇🌸⃝•┇【.حـــــذف】➥*
*⏎┇🌸⃝•┇【.انــــــذار】➥* 
*⏎┇🌸⃝•┇【.طـــــــرد】➥*
*⏎┇🌸⃝•┇【.الجـروب】➥*
*⏎┇🌸⃝•┇【.لـمـنـشـن】➥*
*⏎┇🌸⃝•┇【.الادمــــن】➥*
*⏎┇🌸⃝•┇【.مــخـفــي】➥*
*⧠━──━⧈⇓《🕋》⇓⧈━──━⧠*
*⧉┇اهلا بك في قسم القـ🕋ـران*
*⧠━──━⧈⇓《🕋》⇓⧈━──━⧠*
*⏎┇🌸⃝•┇【.نصيحه】➥*
*⏎┇🌸⃝•┇【.قران】➥*
*⏎┇🌸⃝•┇【.اذكار-الصباح】➥*
*⏎┇🌸⃝•┇【.اذكار-المساء】➥*
*⏎┇🌸⃝•┇【.الله】➥*
*⏎┇🌸⃝•┇【.ايه_الكرسي】➥*
*⧠━──━⧈⇓《♻️》⇓⧈━──━⧠*
*⧉┇اهلا بك في قسم التحـ🧚‍♂️ـويل*
*⧠━──━⧈⇓《♻️》⇓⧈━──━⧠*
*⏎┇🌸⃝•┇【.لصـــوره】➥*
*⏎┇🌸⃝•┇【.لفـيـديـو】➥*
*⏎┇🌸⃝•┇【.خـــــــط】➥*
*⏎┇🌸⃝•┇【.تليجراف】➥*
*⏎┇🌸⃝•┇【.مــلـصـق】➥*
*⏎┇🌸⃝•┇【.ســـرقــه】➥*
*⏎┇🌸⃝•┇【.بـاركــود】➥*
*⏎┇🌸⃝•┇【.انــطــق 】➥*
*⧠━──━⧈⇓《🪙》⇓⧈━──━⧠*
*⧉┇اهلا بك في قسم البنـ💸ـك*
*⧠━──━⧈⇓《🪙》⇓⧈━──━⧠*
*⏎┇🌸⃝•┇【.اسبوعي】➥*
*⏎┇🌸⃝•┇【.شـهـري】➥*
*⏎┇🌸⃝•┇【.يومي】➥*
*⏎┇🌸⃝•┇【.رانــك】➥*
*⏎┇🌸⃝•┇【.راتـب】➥*
*⏎┇🌸⃝•┇【.لــفــل】➥*
*⏎┇🌸⃝•┇【.هجوم】➥*
*⏎┇🌸⃝•┇【.شــراء】➥*
*⧠━──━⧈⇓《🐉》⇓⧈━──━⧠*
*⧉┇اهلا بك في قسم المطـــ🐉ور*
*⧠━──━⧈⇓《🐉》⇓⧈━──━⧠*
*⏎┇🐉⃝•┇【.ضيف_اكس_بي】➥*
*⏎┇🐉⃝•┇【.بـــــان_شـــــات】➥*
*⏎┇🐉⃝•┇【.حـذف_بريـميـام】➥*
*⏎┇🐉⃝•┇【.الــغــاء_الــبــان】➥*
*⏎┇🐉⃝•┇【.المبندين】➥*
*⏎┇🐉⃝•┇【.بريميام】➥*
*⏎┇🐉⃝•┇【.شـــات】➥*
*⏎┇🐉⃝•┇【.مخفـي】➥*
*⏎┇🐉⃝•┇【.إعادة】➥*
*⏎┇🐉⃝•┇【.انضم】➥*
*⏎┇🐉⃝•┇【.بان】➥*
*⧠━──━⧈⇓《🐉》⇓⧈━──━⧠*
*☜┇ حقـوق السيد اكيرا ┇〄* 
*☞┇ wa.me/201559321760*
*☞┇𝑇𝐸𝑁𝐷𝛩𝑈, 𝐴𝐾𝐼𝑅𝐴  〖🐉〗*
*⧠━──━⧈⇓《🐉》⇓⧈━──━⧠*
‬`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['كل'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
  }

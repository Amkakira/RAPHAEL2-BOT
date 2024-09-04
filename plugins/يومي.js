
//import db from '../lib/database.js'

const free = 7000
const prem = 200000

let handler = async (m, {conn, isPrems }) => {
  let time = global.db.data.users[m.sender].lastclaim + 86400000
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw `*⌫┇لـقـد اخـدت ذهـبـك الـيـومـي بـالـفـعـل. تـسـتـطـيـع اخـده ثـانـيـا بـعـد ${msToTime(time - new Date())} ┇〄*`
  global.db.data.users[m.sender].exp += isPrems ? prem : free
  m.reply(`
  *『🎉┃لـقـد اخـذت ${isPrems ? prem : free} ذهـب تـم اضـافـتـهـم الـي مـحـفـظـتـك』*`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['daily']
handler.tags = ['econ']
handler.command = ['daily', 'يومي'] 

export default handler



function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " ساعات " + minutes + " دقائق"
}








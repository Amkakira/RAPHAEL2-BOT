import fetch from 'node-fetch'
import fs from 'fs'
import jimp from 'jimp'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let wm = '◄⏤͟͟͞𝑀𝐼𝑇𝑺𝑈𝑅-𝐴 𝐾 𝐼 𝑅 𝐴'


let fakecontact = { 'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': '𝑀𝐼𝑇𝑺𝑈𝑅-𝐁𝐎𝐓' }, 'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
let fakegif = {key: {participant: `0@s.whatsapp.net`, ...('6289643739077-1613049930@g.us' ? {remoteJid: '6289643739077-1613049930@g.us'} : {})}, message: {'videoMessage': {'title': '𝑀𝐼𝑇𝑺𝑈𝑅-𝔹𝕆𝕋', 'h': `Hmm`, 'seconds': '99999', 'gifPlayback': 'true', 'caption': '𝑀𝐼𝑇𝑺𝑈𝑅-𝐁𝐎𝐓', 'jpegThumbnail': false}}};
let mkey = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': '6289643739077-1613049930@g.us', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
let fakelocation = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    locationMessage: {
      degreesLatitude: 37.7749,
      degreesLongitude: -122.4194,
      name: 'Palestine',
      address: 'San Francisco, CA, USA',
      url: 'https://maps.google.com/?q=37.7749,-122.4194'
    }
  }
};
let faketext = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    conversation: 'فلسطين حرة مهما كان الثمن ❤️🧞'
  }
};

let fake = [fakegif, fakecontact, mkey, fakelocation, faketext]
let vn = fake[Math.floor(Math.random() * fake.length)];

let poster = ['https://telegra.ph/file/ba984d78fa802662438ee.jpg', 'https://telegra.ph/file/0e22282b399e105776618.jpg', 'https://telegra.ph/file/5e6456d22a8264b08a2bc.jpg', 'https://telegra.ph/file/996f53288a1e2f4f35812.jpg']
let vn2 = poster[Math.floor(Math.random() * poster.length)];

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 2023, status: 1, thumbnail: 'https://i.imgur.com/RbaRjrb.jpeg', surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let bjir = 'https://i.imgur.com/RbaRjrb.jpeg'
let name = await conn.getName(who)

let delay = time => new Promise(res => setTimeout(res, time))
await conn.sendContact(m.chat, [[`201145624848` + `@s.whatsapp.net`, wm]], vn, {
 contextInfo: { 
 forwardingScore: 2023,
isForwarded: false, 
 externalAdReply: {  
 title: '𝑇𝛨𝛯 𝐿𝛩𝛻𝛯𝐿𝑌 𝛩𝑊𝛮𝛯𝑅 𝛩𝐹', 
 body: '𝑀𝐼𝑇𝑺𝑈𝑅-𝔹𝕆𝕋', 
 sourceUrl: 'https://chat.whatsapp.com/IjnnpVetedoHDYKYwen77a',
 thumbnail: vn2,
 thumbnailUrl: vn2, 
 mediaType: 1,
 showAdAttribution: true, 
 renderLargerThumbnail: true, 
 mentionedJid: [m.sender]
	}}}, { quoted: vn});

}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|مطور|المطور)$/i

export default handler


async function getBuffer(url) {
	return new Promise(async (resolve, reject) => {
		let buffer;
		await jimp
			.read(url)
			.then((image) => {
				image.getBuffer(image._originalMime, function (err, res) {
					buffer = res;
				});
			})
			.catch(reject);
		if (!Buffer.isBuffer(buffer)) reject(false);
		resolve(buffer);
	});
}

const { useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, MessageRetryMap, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC } = await import('@whiskeysockets/baileys');
import moment from 'moment-timezone';
import NodeCache from 'node-cache';
import readline from 'readline';
import qrcode from "qrcode";
import crypto from 'crypto';
import fs from "fs";
import pino from 'pino';
import * as ws from 'ws';
const { CONNECTING } = ws;
import { Boom } from '@hapi/boom';
import { makeWASocket } from '../simple.js';
if (!(global.conns instanceof Array)) global.conns = [];
let handler = async (m, { conn: _conn, args, usedPrefix, command, isOwner, isROwner }) => {
if (!global.db.data.settings[_conn.user.jid].jadibotmd && !isROwner) {
conn.reply(m.chat, '🚩 تم تعطيل هذا الأمر بواسطة المنشئ الخاص بي.', m)
return
}
let parent = args[0] && args[0] == 'plz' ? _conn : await global.conn;
if (!((args[0] && args[0] == 'plz') || (await global.conn).user.jid == _conn.user.jid)) {
return conn.reply(m.chat, `「💭」يمكنك استخدام هذا الأمر فقط في البوت الرئيسي.\n\n• Wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix + command}`, m)
}
async function serbot() {
let authFolderB = crypto.randomBytes(10).toString('hex').slice(0, 8);
if (!fs.existsSync("./jadibts/" + authFolderB)) {
fs.mkdirSync("./jadibts/" + authFolderB, { recursive: true });
}
if (args[0]) {
fs.writeFileSync(`jadibts/creds.json`, Buffer.from(args[0], 'base64').toString('utf-8'))
}
const { state, saveState, saveCreds } = await useMultiFileAuthState(`./jadibts/${authFolderB}`);
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache();
const { version } = await fetchLatestBaileysVersion();
let phoneNumber = m.sender.split('@')[0];
const methodCodeQR = process.argv.includes("qr");
const methodCode = !!phoneNumber || process.argv.includes("code");
const MethodMobile = process.argv.includes("mobile");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (texto) => new Promise((resolver) => rl.question(texto, resolver));
const connectionOptions = {logger: pino({ level: 'silent' }),printQRInTerminal: false,mobile: MethodMobile,browser: ['Ubuntu', 'Edge', '110.0.1587.56'], 
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
},
markOnlineOnConnect: true,
generateHighQualityLinkPreview: true,
getMessage: async (clave) => {
let jid = jidNormalizedUser(clave.remoteJid);
let msg = await store.loadMessage(jid, clave.id);
return msg?.message || "";
},
msgRetryCounterCache,
msgRetryCounterMap,
defaultQueryTimeoutMs: undefined,
version
};
let conn = makeWASocket(connectionOptions);
if (methodCode && !conn.authState.creds.registered) {
if (!phoneNumber) {
process.exit(0);
}
let cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');
if (!Object.keys(PHONENUMBER_MCC).some(v => cleanedNumber.startsWith(v))) {
process.exit(0);
}
setTimeout(async () => {
let codeBot = await conn.requestPairingCode(cleanedNumber);
codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot;
let txt = '𝑀𝐼𝑇𝑺𝑈𝑅–𝐵𝛩𝑇\n\n*استخدم هذا الرمز لتصبح بوت فرعي*\n\n🍟 خطوات:\n\n`1` : انقر على النقاط الثلاث\n\n`2` : اضغط على الأجهزة المرتبطة\n\n`3` : اختر الربط برقم الهاتف\n\n`4` : اكتب الرمز\n\n> *ملاحظة:* هذا الرمز يعمل فقط على الرقم الذي طلبه.';
await parent.reply(m.chat, txt, m);
await parent.reply(m.chat, codeBot, m);
rl.close();
}, 3000);
}
conn.isInit = false;
let isInit = true;
async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update;
if (isNewLogin) conn.isInit = true;
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
let i = global.conns.indexOf(conn);
if (i < 0) return console.log(await creloadHandler(true).catch(console.error));
delete global.conns[i];
global.conns.splice(i, 1);
if (code !== DisconnectReason.connectionClosed) { parent.sendMessage(m.chat, { text: "🚩 تم فقدان الاتصال بالخادم." }, { quoted: m });
}}
if (global.db.data == null) loadDatabase();
if (connection == 'open') {
conn.isInit = true;
global.conns.push(conn);
await parent.reply(m.chat, args[0] ? '🐢 تم الاتصال بنجاح بـ WhatsApp.' : '🚩 تم ربط بوت فرعي بنجاح.', m);
await sleep(5000);
if (args[0]) return;
await parentw.reply(conn.user.jid, `🚩 *لإعادة ربط بوت فرعي استخدم الرمز الخاص بك`, m)
}}
setInterval(async () => {
if (!conn.user) {
try { conn.ws.close(); } catch { }conn.ev.removeAllListeners();
let i = global.conns.indexOf(conn);
if (i < 0) return;
delete global.conns[i];
global.conns.splice(i, 1);
}
}, 60000);
let handler = await import('../handler.js');
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error);
if (Object.keys(Handler || {}).length) handler = Handler;
} catch (e) {
console.error(e);
}
if (restatConn) {
try { conn.ws.close(); } catch { }
conn.ev.removeAllListeners();
conn = makeWASocket(connectionOptions);
isInit = true;
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler);
conn.ev.off('connection.update', conn.connectionUpdate);
conn.ev.off('creds.update', conn.credsUpdate);
} 
conn.handler = handler.handler.bind(conn);
conn.connectionUpdate = connectionUpdate.bind(conn);
conn.credsUpdate = saveCreds.bind(conn, true);
conn.ev.on('messages.upsert', conn.handler);
conn.ev.on('connection.update', conn.connectionUpdate);
conn.ev.on('creds.update', conn.credsUpdate);
isInit = false;
return true;
};
creloadHandler(false);
}
serbot();
};
handler.help = ['code'];
handler.tags = ['jadibot'];
handler.command = ['ربط2','c-bot'];
// handler.register = true;
export default handler;
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
                                     }

import fs from 'fs';

let timeout = 30000;
let poin = 750;

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {};
    let id = m.chat;
    if (id in conn.tekateki) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tekateki[id][0]);
        throw false;
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/game/عكس.json`));
    let json = tekateki[Math.floor(Math.random() * tekateki.length)];
    let _clue = json.response;
    let clue = _clue.replace(/[A-Za-z]/g, ''); // Fixed this line
    let caption = `
ⷮ ${json.question}
❐↞┇الـوقـت⏳↞ ${(timeout / 1000).toFixed(2)}┇
❐↞┇الـجـائـزة💰↞ ${poin} نقاط┇
*⧠━──━⧈⇓《𝑀𝐼𝑇𝑺𝑈𝑅𝐼》⇓⧈━──━⧠*
`.trim();
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `*❮ ⌛┇ انـتـهـي الوقــــت ┇⌛❯*\n *❐↞┇الاجــابـــة✅↞ ${json.response}┇*`, conn.tekateki[id][0]);
            delete conn.tekateki[id];
        }, timeout)
    ];
};

handler.help = ['miku'];
handler.tags = ['game'];
handler.command = /^(عكس)$/i;

export default handler;

const handler = async (m, { conn, participants }) => {
    const who = m.mentionedJid && m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.fromMe 
        ? conn.user.jid 
        : m.sender;

    const username = conn.getName(who);
    const name = m.pushName;
    const user = who.split('@')[0];
    const sender = m.sender.split('@')[0];
    const userid = user + '@s.whatsapp.net';
    const senderid = sender + '@s.whatsapp.net';
    
    const botid = '201145624848@s.whatsapp.net';

    const contactInfo = {
        key: {
            participants: `${userid}`,
            remoteJid: 'status@broadcast',
            fromMe: false,
            id: 'Halo'
        },
        message: {
            contactMessage: {
                displayName: `${username}`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${username}\nitem1.TEL;waid=${user}:${user}\nEND:VCARD`
            }
        },
        participant: `${userid}`
    };

    let pp;
    try {
        pp = await conn.profilePictureUrl(who, 'image');
    } catch (e) {
        pp = 'https://telegra.ph/file/c0f8bb917592f4684820b.jpg';
    }

    const cap = `
*╭────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╮*
*├───┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───┤*
*│✑ مرحبا 「 @${user} 」*
*│✑ هل هذه صورتك؟*
*├───┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───┤*
*╰────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╯*
`.trim();

    await conn.sendMessage(m.chat, { 
        image: { url: pp }, 
        caption: cap, 
        contextInfo: {
            externalAdReply: {
                title: wm, 
                body: username, 
                thumbnail: imagen1, 
                sourceUrl: 'https://www.atom.bio/shawaza-2000/'
            }, 
            mentionedJid: [who],
            participant: senderid, 
            remoteJid: botid 
        }, 
        isForwarded: true, 
        forwardingScore: 2023
    }, { 
        quoted: contactInfo 
    });
};

handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^صورته|صورتة?$/i;

export default handler;

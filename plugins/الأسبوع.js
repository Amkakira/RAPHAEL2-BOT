const rewards = {
    exp: 50000,
    money: 25000,
    potion: 10,
}

const cooldown = 604800000
let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (Date.now() - user.lastweekly < cooldown) throw `You have already claimed this weekly claim, wait for *${((user.lastweekly + cooldown) - Date.now()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) {
        if (!(reward in user)) continue
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
    }
    //conn.sendButton(m.chat,'*––––––『 WEEKLY 』––––––*', text.trim(), null, [['Profile', ''], ['weekly', '.weekly']],m)
    m.reply(`
    
╭━━🎁━🎁━🎁━━⬣
┃ *الجائزة الأسبوعية*
┃ 
     ${text}
┃
╰━━🎁━🎁━🎁━━⬣

    
    `)
    user.lastweekly = Date.now()
}

handler.help = ['weekly']
handler.tags = ['econ']
handler.command = /^(اسبوعي)$/i

handler.cooldown = cooldown

export default handler

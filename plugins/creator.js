import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Owner Bot `, `Just love poetry and 🎶`, `Dick`, `🇮🇩 Indonesia`, `📍 i don't know`, `👤 ZulBot - MD`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 Bot Whatsapp`, `📵 dont spam/call me😢`, `Nothing`, `🇮🇩 Indonesia`, `📍 i don't know`, `Hanya bot biasa ya g kadang suka errro ☺`]
  ], fkontak)
  await m.reply(`my owner dont spam or you will be blocked`)
  } 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler

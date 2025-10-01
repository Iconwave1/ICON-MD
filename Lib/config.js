const fs = require('fs')

global.owner = "2348075552123" //owner number
global.footer = "ICON" //footer section
global.status = false //"self/public" section of the bot
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['62']
global.xprefix = '.'
global.gambar = "https://files.catbox.moe/zhbsht.jpg"
global.OWNER_NAME = "@Just_me_icon" //
global.DEVELOPER = ["6819461904"] //
global.BOT_NAME = "ICON-MD"
global.bankowner = "ICON"
global.creatorName = "ICON"
global.ownernumber = '2348075552123'  //bot account number, used to link
global.location = "Nigeria, Delta-state, ilese"
global.prefa = ['','!','.','#','&']
//================DO NOT CHANGE OR YOU'LL GET AN ERROR=============\
global.footer = "ICON" //footer section
global.link = "https://whatsapp.com/channel/0029Vav3pek65yD9mqSgd21B"
global.autobio = true//auto update bio
global.botName = "ICON-MD"
global.version = "1.0.1"
global.botname = "ICON-MD"
global.author = "ICON"
global.themeemoji = ''
global.wagc = 'https://chat.whatsapp.com/BW2DeGMj0tVGbdgHFtHvj8'
global.thumbnail = 'https://files.catbox.moe/l9gpzm.jpg'
global.richpp = ' '
global.packname = "Sticker By ICON"
global.author = "\n\n\n\n\nCreate by ICON\ntelegram : @Just_me_icon"
global.creator = "2349153553672@s.whatsapp.net"
global.ownername = 'ICON' 
global.onlyowner = `𝘴𝘰𝘳𝘳𝘺 𝘰𝘯𝘭𝘺 𝘧𝘰𝘳  𝘰𝘸𝘯𝘦𝘳𝘴
𝘤𝘰𝘯𝘵𝘢𝘤𝘵 ICON 𝘵𝘰 𝘣𝘦 𝘢𝘯 𝘰𝘸𝘯𝘦𝘳`
  // reply 
global.database = `𝘛𝘰 𝘣𝘦 𝘪𝘯  𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦 𝘣𝘢𝘴𝘦 𝘤𝘰𝘯𝘵𝘢𝘤𝘵 ICON*`
  global.mess = {
wait: "```WAIT FOR ICON ND```",
   success: "𝑺𝒖𝒄𝒄𝒆𝒔𝒔 𝒂𝒌𝒂𝒏𝒆",
   on: "akane active bro", 
   prem: "FOR PREMIUM USERS ONLY ADD YOUR NUMBER TO DATABASE TO ACCESS PREMIUM", 
   off: "Akane off",
   query: {
       text: "Where's the text, man?",
       link: "Where's the link, bro?",
   },
   error: {
       fitur: "Sorry, bro, the feature has error. Please chat with the Bot Developer so it can be fixed immediately.",
   },
   only: {
       group: "Sorry bro, This Feature Can Only Be Used In Groups only",
private: "Sorry bro, This Feature Can Only Be Used In Private Chats",
       owner: "Sorry bro, This Feature Can Only Be Used by Richie",
       admin: " Sorry, this feature can only be used by Bot Admins",
       badmin: "Sorry, bro, It Looks Like You Can't Use This Feature Because the Bot is Not yet Group Admin",
       premium: "This feature is specifically for Richie beloved Premium users",
   }
}

global.hituet = 0

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})

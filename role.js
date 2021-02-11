const { Message } = require("discord.js")

module.exports = client => {
    const channelId = '809152418163327049' //welcome channel
       
    client.on('guildMemberAdd',(member)=>{
        if(message.content === "!permit"){
             message.guild.members.cache.get(message.author.id).roles.add("809152646467813506")

        }
    })
    }
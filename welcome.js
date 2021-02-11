const { Message } = require("discord.js");

module.exports = client => {
const channelId = '809152418163327049' //welcome channel
   
client.on('guildMemberAdd',(member)=>{
    console.log(member)
    const message = "Welcome " + " " + "<@" + member + ">" + "you are now at the entry gate of one of the most secretive channels on discord. I know you can't see a lot here but hang on till" + " " + "<@&806542235691646976>" + " " + "is here to interrogate you. You will be notified so don't worry. Once you're confirmed to be an Inmate, the officer will grant you full access to this server. In the mean time, head to " + " " + "<#807037206854107217> "+ " " + "and checkout some rules that you need to strictly follow."  ;
    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
    

        

    })
}


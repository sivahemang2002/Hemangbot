const fs = require('fs')
module.exports = client => {
    const channelId = "827572583289323530" //welcome channel
       
    client.on('guildMemberRemove',(member)=>{
        console.log(member)
        const message =  "<@" + member + ">" + " " + "just left the server.";
        const channel = member.guild.channels.cache.get(channelId)
        if(channel){
        channel.send(message)
        }
    })}
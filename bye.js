module.exports = client => {
    const channelId = "712934277939200032" //welcome channel
       
    client.on('guildMemberRemove',(member)=>{
        console.log(member)
        const message =  "<@" + member + ">" + " " + "just left the server.";
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
        
    
            
    
        })
    }
    
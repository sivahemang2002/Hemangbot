const { Message } = require("discord.js");

module.exports = client => {
const channelId = "807635969896874015" //welcome channel
client.on('guildMemberAdd',(member)=>{
    console.log(member)
    
    const message = "Welcome to the server Cyka Blyat" + " " + "<@" + member + ">";
    
    const channel = member.guild.channels.cache.get(channelId)
    if(channel){
        var roleNamex = member.roles.cache.find(r => r.name === "Blyats")
        member.roles.add(roleNamex)
         channel.send(message)}
    

        

    })
}
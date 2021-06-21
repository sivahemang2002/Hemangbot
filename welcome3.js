const { Message } = require("discord.js");

module.exports = client => {
const channelId = "809152418163327049" //welcome channel
const roleNamex = message.member.roles.cache.find(r => r.id === "811822746937065503")
client.on('guildMemberAdd',(member)=>{
    console.log(member)
    const message = "Welcome to the server Cyka Blyat" + " " + "<@" + member + ">" + " " + "\n Read <#852820956396519434> ";
    const channel = member.guild.channels.cache.get(channelId)
    if(channel){
        
    channel.send(message)}
    

        

    })
}
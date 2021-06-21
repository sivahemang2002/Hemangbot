const { Message } = require("discord.js");

module.exports = client => {
const channelId = "809152418163327049" //welcome channel
client.on('guildMemberAdd',(member)=>{
    console.log(member)
    const roleNamex = message.member.roles.cache.find(r => r.id === "811822746937065503")
    const message = "Welcome to the server Cyka Blyat" + " " + "<@" + member + ">";
    member.roles.add(roleNamex)
    const channel = member.guild.channels.cache.get(channelId)
    if(channel){

         channel.send(message)}
    

        

    })
}
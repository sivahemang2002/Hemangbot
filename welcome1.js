const { Message } = require("discord.js");

module.exports = client => {
const channelId = "811147855645376512" //welcome channel
   
client.on('guildMemberAdd',(member)=>{
    console.log(member)
    const message = "Welcome to the server" + " " + "<@" + member + ">";
    const channel = member.guild.channels.cache.get(channelId)
    if(channel){
    channel.send(message)}
    

        

    })
}
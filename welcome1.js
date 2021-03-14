const { Message } = require("discord.js");

module.exports = client => {
const channelId = "811147855645376512" //welcome channel
   
client.on('guildMemberAdd',(member)=>{
    console.log(member)
    const message = "Welcome to the RCB family" + " " + "<@" + member + ">" + "" + "Read <#811156918818963476> and write a introduction about yourself in <#811147918366998540> ";
    const channel = member.guild.channels.cache.get(channelId)
    if(channel){
    channel.send(message)}
    

        
n
    })
}
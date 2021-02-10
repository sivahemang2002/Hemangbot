module.exports = client => {
const channelId = '809152418163327049' //welcome channel
    client.on('guildMemberAdd',(member)=>{
        console.log(member)
        const message = "Welcome to the server Cyka blyat" + " " + "<@" + member + ">"  
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
        if(newmessage.content === "!permit"){
            member.roles.add("809152646467813506")};
        


    });}
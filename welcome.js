module.exports = client => {
const channelId = '809152418163327049' //welcome channel
    client.on('guildMemberAdd',(member)=>{
        console.log(member)
         
        const channel = member.guild.channels.cache.get(channelId)
        message.channel.send("Welcome to the server Cyka blyat" + " " + "<@" + member + ">" )
        if(message.content === "!permit")
        {
            member.roles.add("809152646467813506")};
        


    });}
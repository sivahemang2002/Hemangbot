module.exports = client => {
    const channelId = '807036983603232788' //welcome channel
    client.on('guildMemberAdd',(member)=>{
        console.log(member)
        const message = "Welcome to the sever!" + "<@" + member + ">" +" " + "and follow" + " " + "<#807037206854107217>";
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}
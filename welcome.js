module.exports = client => {
    const channelId = '715340560826630174' //welcome channel
    client.on('guildMemberAdd',(member)=>{
        console.log(member)
        const message = "Welcome to the sever!" + "<@" + member + ">" +" " + "and follow" + " " + "<#712285292366921781>";
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}
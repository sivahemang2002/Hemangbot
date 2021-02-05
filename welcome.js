module.exports = client => {
    const channelId = '807260246271721483' //welcome channel
    client.on('guildMemberAdd',(member)=>{
        console.log(member)
        const message = "Welcome to the sever!" + "<@" + member + ">" +" " + "and follow" + " " + "<#807260272397516800>";
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}
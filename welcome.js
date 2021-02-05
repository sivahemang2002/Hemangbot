module.exports = client => {
    const channelId = '807036983603232788' //welcome channel
    client.on('guildMemberAdd',(member)=>{
        console.log(member)
        const message = 'Please welcome <@${member.id}> to the server!'
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}
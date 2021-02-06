module.exports = client => {
    const channelId = '807036983603232788' //welcome channel
    client.on('guildMemberAdd',(member)=>{
        console.log(member)
        const message = "Welcome to the prison inmate!" + " " + "<@" + member + ">" +" " + "check out rules" ;
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message).then(message => {
            message.delete({ timeout: 60000 })
          })
          .catch(console.error);
    })
}
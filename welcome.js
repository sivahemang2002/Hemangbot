module.exports = client => {
    const channelId = '' //welcome channel
    client.on('guildMemberAdd',(member)=>{
        console.log(member)
        const message = "Welcome to the server cyka blyat!" + " " + "<@" + member + ">"  ;
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message).then(message => {
            message.delete({ timeout: 60000 })
          })
          .catch(console.error);
    })
}
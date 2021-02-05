module.exports = client => {
    const channelId = '807260246271721483' //welcome channel
    client.on('guildMemberAdd',(member)=>{
        console.log(member)
        const message = "Welcome to the prison inmate!" + " " + "<@" + member + ">" +" " + "check out rules" + " " + "<#807260272397516800>"+ " and write a introduction about yourself in" + " " + "<#807263457204240384> ";
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}
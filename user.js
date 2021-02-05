const { MessageEmbed } = require('discord.js');
module.exports = {
    name:"user-info",
    run:async(client,message,args) => {
        let user = message.mentions.members.first() || message.guild.members.get(args[0])||message.member;
        let status;
        switch(user.presence.status){
            case "online":
                status = "online";
                break;
            case "dnd":
                status="dnd";
                break;
            case "idle":
                status="idle";
                break;
            case "offline":
                status="offline";
                break;
                
        }
        const embed = new MessageEmbed()
        .setTitle(`${user.user.username} stats`)
        .setColor('#f3f3f3')
        .setThumbnail(user.user.displayAvatarURL())
        
        await message.channel.send(embed)

    }

}

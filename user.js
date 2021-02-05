const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js')
module.exports = class UserInfoCommand extends Commando.Command{
    constructor(client){
        super(client,{
            name:'userinfo',
            group:'misc',
            memberName: 'userinfo',
            description: 'Displays information about a user'
        })
    }
    run = async(message)=>{
        const{guild,channel} = message
        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)
        const embed = new MessageEmbed().setAuthor(
            'User info for ${user.username}',
            user.displayAvatarURL()

        )
    }
}
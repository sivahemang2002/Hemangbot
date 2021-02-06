const Discord = require('discord.js');
const welcome = require('./welcome');
const command = require('./command');
const client = new Discord.Client();




client.once('ready', () => {
    console.log('PrisonBot is online');
    welcome(client)
    
   
   
    

});
client.on('message', message => {
    let msg = message.content.substr(0);
    let sentence = msg.split(" ");
    if (sentence.includes("F")) {
        message.react('🇫');
    }
        if (message.channel.id === "712412653338886185") {
            let mes = message.content.substr(0);
let sentence = mes.split("\n");
for(var i=1;i<sentence.length;i++)
{
let x = sentence[i].split(" ");
message.react(x[0]);
}
                }
                
                
        if (message.channel.id === "806566443385618504") {
            message.react('🇦')
                .then(() => {
                    message.react('🇧') });
                }
                if (message.channel.id === "712640459473813574") {
                    message.react('👍')
                        .then(() => {
                            message.react('👎') });
                        }
                
                        var response = ['Nope','Not likely','Too hard to hell','Quite Possible','Definitely','Maybe','Fuckoff'];
                        if(message.content.startsWith("Robo,") && message.content.endsWith("?"))
                        {
                        var row = Math.floor(Math.random()*((response.length)-1)+1);
                        message.channel.send("<@" + message.author + ">" + " " + response[row]);
                        }
                        console.log(message.content);
                        let msg1 = message.content.substr(0);
                        let sentence1 = msg1.split(" ")
                        if(sentence1.includes("<@&712286690764652584>"))
                        {
                            message.channel.send("<@" + message.author + ">" + " Wait for a moment, the Wardens will be with you shortly");
                        }
                   
                   if(message.content === "Dead server")
                   {
                       message.channel.send("<@" + message.author + ">" + " We don't talk about it here");
                   }
                   if (message.content.startsWith("!ping")) {
                    var ping = Date.now() - message.createdTimestamp ;
                    message.channel.send("Your ping is `" + `${ping}` + " ms`");
                }
                 if(message.content.startsWith("!profile"))
                 {let user;
                    if (message.mentions.users.first()) {
                        user = message.mentions.users.first();
                    } else {
                        user = message.member;
                    }
                    const member = message.guild.member(user);
                    
                    const embed = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setThumbnail(message.author.avatarURL)
                        .addField(`${user.tag}`, `${user}`, true)
                        .addField("ID:", `${user.id}`, true)
                        .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
                        .addField("Status:", `${user.presence.status}`, true)
                        .addField("In Server", message.guild.name, true)
                        .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
                        .addField("Bot:", `${user.bot}`, true)
                        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
                    message.channel.send({embed});
                 }
                 if(message.content === "VA DA DEIIIIII")
                 {
                     message.channel.send("Hello everyone , I have been created to replace Robowarden(for now) if you have any doubts please dm my creator Hemang and yeah you guys can call me Robo Modren");
                 }
                 command(client, ['ping', 'test'], (message) => {
                    message.channel.send('Pong!')
                  })
                  command(client, 'createtextchannel', (message) => {
                    const name = message.content.replace('!createtextchannel ', '')
                
                    message.guild.channels
                      .create(name, {
                        type: 'text',
                      })
                      .then((channel) => {
                        const categoryId = '807334415121907772'
                        channel.setParent(categoryId)
                      })
                  })
                
                  command(client, 'createvoicechannel', (message) => {
                    const name = message.content.replace('!createvoicechannel ', '')
                
                    message.guild.channels
                      .create(name, {
                        type: 'voice',
                      })
                      .then((channel) => {
                        const categoryId = '807334415121907772'
                        channel.setParent(categoryId)
                        channel.setUserLimit(2)
                      })
                  })
                  command(client, 'serverinfo', (message) => {
                    const { guild } = message
                
                    const { name, region, memberCount, owner, afkTimeout } = guild
                    const icon = guild.iconURL()
                
                    const embed = new Discord.MessageEmbed()
                      .setTitle(`Server info for "${name}"`)
                      .setThumbnail(icon)
                      .addFields(
                        {
                          name: 'Region',
                          value: region,
                        },
                        {
                          name: 'Members',
                          value: memberCount,
                        },
                        {
                          name: 'Owner',
                          value: owner.user.tag,
                        },
                        {
                          name: 'AFK Timeout',
                          value: afkTimeout / 60,
                        }
                      )
                
                    message.channel.send(embed)
                  })
                  command(client, 'ban', (message) => {
                    const { member, mentions } = message
                
                    const tag = `<@${member.id}>`
                
                    if (
                      member.hasPermission('ADMINISTRATOR') ||
                      member.hasPermission('BAN_MEMBERS')
                    ) {
                      const target = mentions.users.first()
                      if (target) {
                        const targetMember = message.guild.members.cache.get(target.id)
                        targetMember.ban()
                        message.channel.send(`${tag} That user has been banned`)
                      } else {
                        message.channel.send(`${tag} Please specify someone to ban.`)
                      }
                    } else {
                      message.channel.send(
                        `${tag} You do not have permission to use this command.`
                      )
                    }
                  })
                  if(message.content.startsWith('!kick'))
                
                  command(client, 'kick', (message) => {
                    const { member, mentions } = message
                
                    const tag = `<@${member.id}>`
                
                    if (
                      member.hasPermission('ADMINISTRATOR') ||
                      member.hasPermission('KICK_MEMBERS')
                    ) {
                      const target = mentions.users.first()
                      if (target) {
                        const targetMember = message.guild.members.cache.get(target.id)
                        targetMember.kick()
                        message.channel.send(`${tag} That user has been kicked out of the server`)
                      } else {
                        message.channel.send(`${tag} Please specify someone to kick.`)
                      }
                    } else {
                      message.channel.send(
                        `${tag} You do not have permission to use this command.`
                      )
                    }
                  })
                  
                
            });
             



                    client.login(process.env.token);
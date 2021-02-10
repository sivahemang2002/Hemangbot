const Discord = require('discord.js');
const welcome = require('./welcome');
const command = require('./command');
const poll = require('./poll');
const client = new Discord.Client();
const config = require('./configda.json')
const path = require('path')
const fs = require('fs')
const fetch = require('node-fetch')
const querystring = require('querystring')

let memberlog = "809152418163327049"
const logID = "808708681259548712"
function logs(message,args){
  const embed = new Discord.MessageEmbed()
                        .setColor("BLUE")
                        .setThumbnail(message.author.avatarURL)
                        .addField("ID:", `${message.author}`, true)
                        .addField("Username:", `${message.author.username !== null ? `${message.author.username}` : 'None'}`, true)
                        .addField("Log:",args)
                        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
  client.channels.cache.get(logID).send(embed)

}

client.on('messageUpdate',(oldmessage, newmessage ) => {

  if(logID != newmessage.channel.id)
  {
  let log = "Old message: " + oldmessage.content + "\nNew Message: " + newmessage.content ;
  logs(newmessage,log)}
  

})
client.on("messageDelete", (messageDelete) => {
  
  if(logID !=messageDelete.channel.id )
  {
  let log = `**This message by ${messageDelete.author.tag} was deleted**.
             ${messageDelete.content}`;
  logs(messageDelete,log)}
 });
client.on("guildMemberAdd",member => {
   if(member.guild.id !== "806542035052920893") return;
   client.channels.cache.get(memberlog).send('Welcome to the **${member.guild.name}**,<@!${member.user.id}>!!!');
   member.roles.add("806542035052920893");
})





client.once('ready', () => {
    console.log('PrisonBot is online');
    welcome(client)
    poll(client)
   
});



client.on('message', async message => {
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
                if(message.content === "It's Marination Monday guys")
{
  message.channel.send("Happy Marination Monday prison")
}


                if (message.channel.id === "807647058869354547") {
                  let mes = message.content.substr(0);
      let sentence = mes.split("\n");
      for(var i=1;i<sentence.length;i++)
      {
      let x = sentence[i].split(" ");
      message.react(x[0]);
      }
                      }
          if(message.channel.id === "715255733666709554")
          {
            message.react('✅')
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
                
                        var response = ['Ghanta','Not likely','Too hard to tell','Quite Possible','Definitely','Maybe','Yes'];
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

                        .addField("Roles:",message.member.roles.cache.map(r => `${r}`).join('|'))
                        
                        .addField("Bot:", `${user.bot}`, true)
                        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
                    message.channel.send({embed});
                 }
                 if(message.content === "VA DA DEIIIIII")
                 {
                     message.channel.send("Hello everyone , I have been created to replace Robowarden(for now) if you have any doubts please dm my creator Hemang and yeah you guys can call me Robo Modren");
                 }
                 if(message.content === "Breakfast_club")
                 {
                      message.channel.send("Breakfast club:<@516993440920240128><@!634380346015875072><@!587383572470562832><@!254072409878036480><@702053598443470918><@!714866717121052713><@724871282877005846><@!349112856400232450><@!427714149607538688><@!392237937246339083><@!729784244204732458><@!722702462527733830><@427427280482992128>"
                      )

                 }
                 if(message.content === "group_Hydrohomies")
                 {
                  message.channel.send("Hydrohomies:<@516993440920240128><@!349112856400232450><@649185443002449926><@!540950441215787010><@!634380346015875072><@!697905350988398695><@!728681649059004579><@!254072409878036480><@!729784244204732458><@427427280482992128><@!427714149607538688><@!728829310558928897><@!335439318141239297><@701364406486827089><@!690910552297308190>")
                 }
                 if(message.content === "group_thisisus")
                 {
                   message.channel.send("ThisisUs:<@427427280482992128><@!427714149607538688><@724871282877005846><@!729784244204732458><@!728829310558928897><@701364406486827089><@516993440920240128><@!728868019438354432>")
                 }
                 
                

                 const args = message.content.substring(0).split(" ")

                 if (message.content.startsWith(`!udict`)) {		
                   const searchString = querystring.stringify({ term: args.slice(1).join(" ") })
               
                       if (!args.slice(1).join(" ")) return message.channel.send(new Discord.MessageEmbed()
                           .setColor("BLUE")
                           .setDescription(`You need to specify something you want to search the urban dictionary`)
                       )
               
                       const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${searchString}`).then(response => response.json())
               
                       try {
                           const [answer] = list
               
                           const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str)
               
                           const embed = new Discord.MessageEmbed()
                               .setColor("BLUE")
                               .setTitle(answer.word)
                               .setURL(answer.permalink)
                               .addFields(
                                   { name: 'Definition', value: trim(answer.definition, 1024) },
                                   { name: 'Example', value: trim(answer.example, 1024) },
                                   { name: 'Rating', value: `${answer.thumbs_up} 👍. ${answer.thumbs_down} 👎.` },
                               )
                           message.channel.send(embed)
                       } catch (error) {
                           console.log(error)
                           return message.channel.send(new Discord.MessageEmbed()
                               .setColor("BLUE")
                               .setDescription(`No results were found for **${args.slice(1).join(" ")}**`)
                           )
                       }
                 }	


                });

                  command(client, 'createtextchannel', (message) => {
                    const name = message.content.replace('!createtextchannel ', '')
                
                    message.guild.channels
                      .create(name, {
                        type: 'text',
                      })
                      .then((channel) => {
                        const categoryId = '712678821035507774'
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
                        const categoryId = '712678821035507774'
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
                    if(message.content.startsWith("!roles"))
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
                           
                           .addField("Roles:",message.guild.roles.cache.map(r => `${r}`).join('|'))
                        
                           .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
                       message.channel.send({embed});
                    }
                   
                  })
                  
                  
                
         
             



                    client.login(process.env.token);
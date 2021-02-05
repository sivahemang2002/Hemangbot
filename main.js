const Discord = require('discord.js');
const welcome = require('./welcome');
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
                        if(message.mentions.has(client.user)&& message.content.endsWith("?"))
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
                     message.channel.send("Hello everyone , I have been created to replace Robowarden(for now) if you have any doubts please dm my creator Hemang and yeah you guys can call me Robo Morden");
                 }
                
            });
             



                    client.login(process.env.token);
const Discord = require('discord.js');
const welcome = require('./welcome');
const moment = require('moment');
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
                        if(sentence1.includes("<@&806585398335635456>"))
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
                 {let user = message.mentions.users.first() || message.author;
                    const joinDiscord = moment(user.createdAt).format('llll');
                    const joinServer = moment(user.joinedAt).format('llll');
                    let embed = new Discord.RichEmbed()
                        .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
                        .setDescription(`${user}`)
                        .setColor(`RANDOM`)
                        .setThumbnail(`${user.displayAvatarURL}`)
                        .addField('Joined at:', `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
                        .addField('Status:', user.presence.status, true)
                        .addField('Roles:', member.roles.map(r => `${r}`).join(' | '), true)
                        .setFooter(`ID: ${user.id}`)
                        .setTimestamp();
                
                    message.channel.send({ embed: embed });
                    return;


                 }
                
            });
             



                    client.login(process.env.token);
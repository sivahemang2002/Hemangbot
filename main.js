const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('PrisonBot is online');

});
client.on('message', message => {
    let msg = message.content.substr(0);
    let sentence = msg.split(" ");
    if (sentence.includes("F")) {
        message.react('🇫');
    }
        if (message.channel.id === "806551728979574794") {
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
                if (message.channel.id === "806583895402348596") {
                    message.react('👍')
                        .then(() => {
                            message.react('👎') });
                        }
                
                        var response = ['Nope','Not likely','Too hard to hell','Quite Possible','Definitely','Maybe','Fuckoff'];
                        if(message.mentions.has(client.user)&& message.content.endsWith("?"))
                        {
                        var row = Math.floor(Math.random()*((response.length)-1)+1);
                        message.channel.send("<@" + message.author + ">" + response[row]);
                        }
                        
                       
                
            });




                    client.login(process.env.token);
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
               {
                name:"user-info";
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
                    
                    await message.channel.send(embed);
                }
            
 }
                
            });
             



                    client.login(process.env.token);
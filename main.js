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
        if (message.channel.id === "806583846253494331") {
            message.react('🇦')
                .then(() => {
                    message.react('🇧') });
                }
                var tabHello = ['Bonjour','Salut','Hello', 'Guten tag', 'Buenos Dias'];
                var tabAnsw = ['Bonjour votre majesté.','Salutations jeune Douzien !','Ouais, ouais. T\'es qui déjà ?', 'Bonjour ' + message.author + ', comment vas-tu aujourd\'hui ?'];
                var content = message.content.split(' ');
                
                for(var x = 0; x < content.length; x++){
                    if(tabHello.includes(content[x]) && message.isMentioned(client.user)){
                        var row = Math.floor(Math.random() * tabAnsw.length);
                        message.channel.send(tabAnsw[row]);
                    }
                }

                
            });




                    client.login(process.env.token);
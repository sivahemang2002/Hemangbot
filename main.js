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
                if (message.channel.id === "806583895402348596") {
                    message.react('👍')
                        .then(() => {
                            message.react('👎') });
                        }
                        if (message.channel.id === "806746337609646100") {
                            message.react('👍')
                                .then(() => {
                                    message.react('👎') });
                                }
                    

                
            });




                    client.login(process.env.token);
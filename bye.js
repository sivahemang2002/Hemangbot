
const fs = require('fs')
module.exports = client => {
    const channelId = "712934277939200032" //welcome channel
       
    client.on('guildMemberRemove',(member)=>{
        console.log(member)
        const message =  "<@" + member + ">" + " " + "just left the server.";
        const channel = member.guild.channels.cache.get(channelId)
        if(channel){
        channel.send(message)
        }
        let user1 = member.user.id;
        let x = {}
        x[user1]=member.roles.cache.map(r => `${r}`)
        let name2 = JSON.stringify(x)
        function writeFile() {
            fs.writeFile("./roles.json", name2, { flag: "wx" }, function(err) {
              if (err) {
                writeFile();
              }
              else {
                console.log("Succesfully written ");
              }
            });
          
          }
          writeFile();
    
        })
    }
    
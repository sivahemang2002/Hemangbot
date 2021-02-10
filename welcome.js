module.exports = client => {
const channelId = '809152418163327049' //welcome channel
    client.on('guildMemberAdd',(member)=>{
        
        console.log("Welcome to the server Cyka blyat" + " " + "<@" + member + ">"  );

        member.roles.add("809152646467813506");




    });}
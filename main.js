const Discord = require('discord.js');
const welcome = require('./welcome');
const command = require('./command');
const { Client } = require('pg')
const client = new Discord.Client();
const config = require('./configda.json')
const welcome1 = require('./welcome1');
const path = require('path')
const fs = require('fs')
const firstmessage = require('./firstmessage')
const pairs = require('./vc.json')
const fetch = require('node-fetch')
const querystring = require('querystring')
const TicTacToe = require('discord-tictactoe');
const scaling = require('./scaling');
const bye = require('./bye');
const roleclaim = require('./roleclaim');
const scaling1 = require('./scaling1')
const bye1 = require('./bye1');
const cron = require("cron");

const PREFIX = "!"
new TicTacToe({
  language: 'en',
  command: '!ttt'
}, client);

let muted = [


]



let memberlog = "809152418163327049"
const logID = "718779866710933615"
function logs(message, args) {
  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setThumbnail(message.author.avatarURL)
    .addField("ID:", `${message.author}`, true)
    .addField("Username:", `${message.author.username !== null ? `${message.author.username}` : 'None'}`, true)
    .addField("Log:", args)
    .addField("Channel ID:", `${message.channel}`)
    .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
  client.channels.cache.get(logID).send(embed)

}

client.on('messageUpdate', (oldmessage, newmessage) => {
  if (oldmessage.channel.guild.id == '711634547770654791') {
    console.log(newmessage.author.bot)
    if (logID != newmessage.channel.id && newmessage.author.bot == false) {
      console.log("messageupdate")
      let log = "Old message: " + oldmessage.content + "\nNew Message: " + newmessage.content;
      logs(newmessage, log)
    }
  }


})
client.on("messageDelete", (messageDelete) => {
  if (messageDelete.channel.guild.id == '711634547770654791') {
    if (logID != messageDelete.channel.id) {
      let log = `**This message by ${messageDelete.author.tag} was deleted**.
             ${messageDelete.content}`;
      logs(messageDelete, log)
    }
  }
});

function logreact() {
  const server = client.guilds.cache.get('806542035052920893')
  const myChannel = server.channels.cache.get('806542035527270443')
  const myChannel1 = server.channels.cache.get('821771709208068098')
  let msg = "React to view the channel"
  let x = ""
  myChannel.messages.fetch({ limit: 1 }).then(messages => {
    x = messages.first()
    console.log("This is x")
  console.log(x)
    if (x.content != msg) {
      myChannel.send(msg).then(function (m) {
        m.react("✅")
        
        
      })
    }

  }).catch(err => {
    console.error(err)
  })


  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.emoji.name === "✅" && reaction.message.channel.id == myChannel) {
      console.log(reaction.users);
      if (user.bot) return;
      myChannel1.updateOverwrite(user.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true

      })
    }
  });
  client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.emoji.name === "✅" && reaction.message.channel.id == myChannel) {
      console.log(reaction.users);
      if (user.bot) return;
      myChannel1.updateOverwrite(user.id, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false

      })
    }
  });
}

client.on('voiceStateUpdate', (oldMember, newMember) => {

  let newUserChannel = newMember.channelID;
       let oldUserChannel = oldMember.channelID;
 

  
     const server = client.guilds.cache.get('711634547770654791')
     const textChannel = server.channels.cache.get('753122371279257621')


    if (newUserChannel === "753114986011951184") {   
      
        console.log("Joined vc with id "+newUserChannel);   // Joined the voice channel.
      textChannel.updateOverwrite(newMember.id, {
        
        SEND_MESSAGES: true
      }).catch(console.error);
    } else if(oldUserChannel === "753114986011951184" ) { 
         console.log("Left vc");
      textChannel.updateOverwrite(newMember.id, {
        
        SEND_MESSAGES: false
      }).catch(console.error);
    }
  


});

client.once('ready', () => {

  console.log('PrisonBot is online');

  welcome(client)
  welcome1(client)
  scaling(client)
  bye(client)
  bye1(client)
  roleclaim(client)
 scaling1(client)
  logreact()
  


});

client.guilds.size;


client.on('message', async message => {
  if (muted[muted.indexOf(message.author.id)]) {
    message.delete()
  }
  if (message.content === "!region") {
    console.log
    if (message.guild.region === 'india') {
      message.guild.setRegion('singapore')

        .then(updated => console.log(`Updated guild region to ${updated.region}`))
        .catch(console.error);
    }
    else {
      message.guild.setRegion('india')

        .then(updated => console.log(`Updated guild region to ${updated.region}`))
        .catch(console.error);
    }
  }
  const roleNamei = message.member.roles.cache.find(r => r.id === "712754991521333319" || r.id === "811822746937065503")
      if (roleNamei) {
  if (message.content.startsWith("!sh")) {

    console.log("Command Acknowleged")
    let mention = message.mentions.members.first()
    muted.push(mention.id)
    setTimeout(function () {

      muted.splice(muted.indexOf(mention.id), 1)
    }, 30000)
  }}
  var day = new Date();
  var hr = day.getHours();
  var min = day.getMinutes();
  var sec = day.getSeconds();

  if (hr == 23) {
    if (min == 40) {
      if (sec == 0) {

        client.channels.fetch("821771709208068098").then((channel) => {
          channel.send("Hello")
        })

      }
    }
  }
  setTimeout(function () {
    sendMessage();
    var dayMillseconds = 1000 * 60 * 60 * 24;
    setInterval(function () {
      sendMessage();
    }, dayMillseconds)
  }, leftToEight())


  function leftToEight() {
    var d = new Date();
    return (-d + d.setHours(23, 45, 0, 0));
  }

  function sendMessage() {
    var guild = client.guilds.get('806542035052920893');
    if (guild && guild.channels.get('821771709208068098')) {
      guild.channels.get('821771709208068098').send("Good Morning");
    }

  }

  
  




  let msg = message.content.substr(0);
  let sentence = msg.split(" ");
  if (sentence.includes("F")) {
    message.react('🇫');
  }
  if (message.content === "f") {
    message.react('🇫');
  }
  if (message.content.startsWith("!permit")) {
    console.log("Command Acknowleged")
    let mention = message.mentions.members.first()
    if (mention) {
      console.log("Trying to add role")
      message.guild.members.cache.get(mention.id).roles.add("712289127948877844")

      message.guild.members.cache.get(mention.id).roles.add("720213022076829728")


    }
  }
   if (message.content.startsWith("!parole")) {
    console.log("Command Acknowleged")
    let mention = message.mentions.members.first()
    if (mention) {
      console.log("Trying to add role")
      message.guild.members.cache.get(mention.id).roles.add("713007999009947648")
    
    }
  }
  if (message.content === "-birthdaylist") {
    message.channel.send("● Jan-01: 335439318141239297 Nazrani#9974 - Nickname: Allen \n● Jan-01: 690594833806393414 Annabie#3105 - Nickname: Anika \n● Jan-14: 245483264502923265 SNM#2408 - Nickname: Shardul👑");
  }
  if (message.content.startsWith("!bad")) {
    console.log("Command Acknowleged")
    let mention = message.mentions.members.first()
    if (mention) {
      console.log("Trying to add role")
      

      message.guild.members.cache.get(mention.id).roles.add("720213022076829728")
    }}
   
  if (message.content === "!archive") {
    message.channel.setParent("728559757513850941")
  }

  if (message.content === "Happy Birthday da dei <@!587383572470562832>") {
    message.channel.send("**OMG! Today is <@!587383572470562832>'s Birthday**")
  }

  if (message.content.startsWith('setNickname')) {
    let nickname = message.content.split(" ").slice(1).join(" ");
    const roleName = message.member.roles.cache.find(r => r.id === "725008517362089998")
    if (roleName) {
      let name = message.guild.member(message.author);
      let x1 = name.nickname ? name.nickname : message.author.username;
      console.log(name)
      let fixedname = x1.split("(")[0]
      message.member.setNickname(fixedname + "(" + nickname + ")")
    }
    ;
  }

  if (message.content.startsWith('setNickname')) {
    let nickname = message.content.split(" ").slice(1).join(" ");
    const roleNamex = message.member.roles.cache.find(r => r.id === "721683615192449076")
    if (roleNamex) {
      let name = message.guild.member(message.author);
      let x1 = name.nickname ? name.nickname : message.author.username;
      console.log(name)
      let fixedname = x1.split("(")[0]
      message.member.setNickname(fixedname + "(" + nickname + ")")
    }
    ;
  }

  if (message.content.startsWith('setNickname')) {
    let nickname = message.content.split(" ").slice(1).join(" ");
    const roleName1 = message.member.roles.cache.find(r => r.id === "811822746937065503")
    if (roleName1) {
      let name = message.guild.member(message.author);
      let x2 = name.nickname ? name.nickname : message.author.username;
      console.log(name)
      let fixedname = x2.split("(")[0]
      message.member.setNickname(fixedname + " " + "(" + nickname + ")")
    }
    ;
  }
  if (message.content === "-help") {
    const Embed1 = new Discord.MessageEmbed()
      .setColor(0XFFC300)
      .setTitle("Commands")
      .setDescription("**BOT COMMANDS**:\n __!server info__ - To view the basic info of the server \n __!profile__ - To view yours/other perons's info and also see your roles \n __!ping__ - To check your ping \n __!udict__ - To check a definition using the popular site Urban Dictionary \n __setNickname__ - This feature is only applicable for **LI** members.It allows you to change the name of the user.(Note : Nickname will only appear in brackets and your original nickname will still appear before the brackets! )\n Breakfast_club - To tag the all the breakfast gang. \n group_Hydrohomies - To remind your inmates to stay hydrated. \n group_thisisus - For the this is us fans. \n group_amongus - Tag people to play a game of among us \n group_gamenight - tag people for gamenight  \n \n **OTHER FEATURES** \n 1. Robo,[content]? - To ask a question to the bot \n 2.Asking a Poll - Please head over to the Polls channels and ask a question and Robo itself will give a reaction \n  ")
    message.channel.send(Embed1);
  }
  if (message.content === "!Leaderboard") {
    const Embed4 = new Discord.MessageEmbed()
      .setColor(0XC27C0E)
      .setTitle("Prediction Leaderboard")
      .setThumbnail("https://imgur.com/6YwVbMB.png")
      .setDescription("**1.Shreekaar -25** \n\n **2.Addu -18** \n\n **3.Aaradhan -17** \n\n **4.Hemang -16** \n\n **4.Shardul -16** \n\n **6.Ajinkya -13** \n\n **6.Mayank -13** \n\n **6.Shreya Tatke -13** \n\n **9.Jahnavi -11** \n\n **10.Sacchin -10** \n\n **11.Akshara -9** \n\n **12.Yaquta -8** \n\n **13.Ankit -4** \n\n **14.Devesh -3** \n\n **15.Shashank -2** \n\n **15.Muskan -2** \n\n **17.Pallavi -1** \n\n **17.Sanjana -1**")
      .setFooter("Last Updated at 2:10 PM 05/05/2021")
    message.channel.send(Embed4)
  }
  if (message.content === "!Hello") {
    const Embed4 = new Discord.MessageEmbed()
      .setColor(0XC27C0E)
      .setTitle("**PRISON ONE YEAR ANNIVERSARY**")
      .setThumbnail("https://imgur.com/zqeOLZC.png")
      .setDescription("**Dear <@&712289127948877844>** \n\n **IT'S BEEN A YEAR!** \n\n\n **The server celebrates its one year birthday on the 20th of May. Like every first birthday, this  too is special. In order to relive all the memories made here, and spend some time together we'll be hosting a GAME NIGHT of the 20th at 10:30pm IST. This server would have never have meant so much had it not been for all of you. So bring along some food and drinks and let's party together!**")
      .setImage("https://imgur.com/LxVsHXv.png")
      .setFooter("Only on Yaquta's Prison")
    message.channel.send(Embed4)
  }
  if (message.content === "!Rulees") {
    const Embed4 = new Discord.MessageEmbed()
      .setColor(0XC27C0E)
      .setTitle("**Rules**")
      .setThumbnail("https://imgur.com/pbU176i.png")
      .setDescription("**Dear <@&811822746937065503>** \n\n\n ** Here are some of the basic rules to be followed in Cyka Blyats** \n\n **-Be kind to one another** \n **-Personal attack by an individual or group against a member of the server is not allowed.** \n **-Bullying a member of the server is not allowed.** \n **-Racism is forbidden on the server.** \n **-Sexism against a person or group is not allowed.** \n **-No Toxic behaviour will be tolerated** \n **-No spamming is allowed** ")
      .setFooter("Cyka Blyats TM")
    message.channel.send(Embed4)
  }
  if (message.content === "!bday January") {
    const Embed4 = new Discord.MessageEmbed()
      .setColor(0XC27C0E)
      .setTitle("**Birthdays on January**")
      .setThumbnail("https://imgur.com/PBIBQvM.png")
      .setDescription("**1.Jan-01: Allen** \n\n **2.Jan-01: Anika** \n\n **3.Jan-14: Shardul👑** \n\n **4.Jan-17:  Shashank(6ix9ine)(fake engineer)** ")
      .setFooter("Yaquta's Prison")
    message.channel.send(Embed4)
  }
  if (message.content === "!bday February") {
    const Embed4 = new Discord.MessageEmbed()
      .setColor(0XC27C0E)
      .setTitle("**Birthdays on February**")
      .setThumbnail("https://imgur.com/PBIBQvM.png")
      .setDescription("**1.Feb-15: Abhinav** \n\n **2.Feb-23: addu 🍗** \n\n **3.Feb-28: Dhvani**")
      .setFooter("Yaquta's Prison")
    message.channel.send(Embed4)
  }
  if (message.content === "!bday March") {
    const Embed4 = new Discord.MessageEmbed()
      .setColor(0XC27C0E)
      .setTitle("**Birthdays on March**")
      .setThumbnail("https://imgur.com/PBIBQvM.png")
      .setDescription("**1.Mar-15: Pallavi (Pallu 🧇)** \n\n **2.Mar-16: Harsh** \n\n **3.Mar-19: Dr. Arjun ⚕** \n\n **4.Mar-21: Sakshi** \n\n **5.Mar-28: Medha** \n\n **6.Mar-31: Janhavi**")
      .setFooter("Yaquta's Prison")
    message.channel.send(Embed4)
  }
  if (message.content === "!bday April") {
    const Embed4 = new Discord.MessageEmbed()
      .setColor(0XC27C0E)
      .setTitle("**Birthdays on April**")
      .setThumbnail("https://imgur.com/PBIBQvM.png")
      .setDescription("**1.Apr-10: Thani MAA (Tandoori Thanima)** \n\n **2.Apr-21: Sana** \n\n **3.Apr-25: Shreekaar** \n\n **4.Apr-26: Divyansh** \n\n **5.Apr-27: fanil** \n\n **6.Apr-27: Janki**")
      .setFooter("Yaquta's Prison")
    message.channel.send(Embed4)
  }
  if (message.content === "!bday May") {
    const Embed4 = new Discord.MessageEmbed()
      .setColor(0XC27C0E)
      .setTitle("**Birthdays on May**")
      .setThumbnail("https://imgur.com/PBIBQvM.png")
      .setDescription("**1.May-12: Savan** \n\n **2.May-21: Sanjana** \n\n **3.May-24: Ansh** \n\n **4.May-26: Vaishnavi** \n\n **5.May-30: yaquta** \n\n **6.May-31: Aaradhan**")
      .setFooter("Yaquta's Prison")
    message.channel.send(Embed4)}
  if (message.content === "!bday June") {
    const Embed4 = new Discord.MessageEmbed()
      .setColor(0XC27C0E)
      .setTitle("**Birthdays on June**")
      .setThumbnail("https://imgur.com/PBIBQvM.png")
      .setDescription("**1.Jun-08: Mayank** \n\n **2.Jun-17: Ansh (Joel Dsouza)**" )
    message.channel.send(Embed4)
  }
  if (message.content === "!bday July") {
    const Embed4 = new Discord.MessageEmbed()
      .setColor(0XC27C0E)
      .setTitle("**Birthdays on July**")
      .setThumbnail("https://imgur.com/PBIBQvM.png")
      .setDescription("**1.Jul-08: Mayank** \n\n **2.Jul-25: Madhu** \n\n **3.Jul-30: Jill ✨**" )
    message.channel.send(Embed4)
  }
  if (message.content === "!bday October") {
    const Embed4 = new Discord.MessageEmbed()
      .setColor(0XC27C0E)
      .setTitle("**Birthdays on October**")
      .setThumbnail("https://imgur.com/PBIBQvM.png")
      .setDescription("**1.Oct-03: Rose Jose** \n\n **2.Oct-04: Kunal** \n\n **3.Oct-13: Samhitha (sam)** \n\n **4.Oct-23: Shreya (Mod nahi Mood)** \n\n **5.Oct-24: nora (🌚)** \n\n **6.Oct-26: Shweta**\n\n **7.Oct-29: Siddhi**")
      .setFooter("Yaquta's Prison")
    message.channel.send(Embed4)}
    if (message.content === "!bday August") {
      const Embed4 = new Discord.MessageEmbed()
        .setColor(0XC27C0E)
        .setTitle("**Birthdays on August**")
        .setThumbnail("https://imgur.com/PBIBQvM.png")
        .setDescription("**1.Aug-02: Muhsina** \n\n **2.Aug-02: Devesh** \n\n **3.Aug-13: Shreya Tatke (ur local nerd)** \n\n **4.Aug-14: Shiva** \n\n **5.Aug-16: cynu** \n\n **6.Aug-21: Atharva**")
        .setFooter("Yaquta's Prison")
      message.channel.send(Embed4)}
      if (message.content === "!bday September") {
        const Embed4 = new Discord.MessageEmbed()
          .setColor(0XC27C0E)
          .setTitle("**Birthdays on September**")
          .setThumbnail("https://imgur.com/PBIBQvM.png")
          .setDescription("**1.Sep-04: Hemang** \n\n **2.Sep-10: Titiksha** \n\n **3.Sep-26: Megha (Megs)** \n\n **4.Sep-30: Akshara** ")
          .setFooter("Yaquta's Prison")
        message.channel.send(Embed4)
      }
      if (message.content === "!bday November") {
        const Embed4 = new Discord.MessageEmbed()
          .setColor(0XC27C0E)
          .setTitle("**Birthdays on November**")
          .setThumbnail("https://imgur.com/PBIBQvM.png")
          .setDescription("**1.Nov-11: Muskan (Rosy)** \n\n **2.Nov-12: Awais** \n\n **3.Nov-13: Neil** \n\n **4.Nov-14: Ajinkya(junkie)** \n\n **5.Nov-17: Anubhav** \n\n **6.Nov-18: prasanth**\n\n **7.Nov-18: Nihari Reddy**\n\n **8.Nov-25: Mansi**")
          .setFooter("Yaquta's Prison")
          message.channel.send(Embed4)}
          if (message.content === "!bday December") {
            const Embed4 = new Discord.MessageEmbed()
              .setColor(0XC27C0E)
              .setTitle("**Birthdays on December**")
              .setThumbnail("https://imgur.com/PBIBQvM.png")
              .setDescription("**1.Dec-03: Anoushka** \n\n **2.Dec-04: Lekhika** \n\n **3.Dec-08: Ankit** \n\n **4.Dec-14:Momo ** \n\n **5.Dec-15: Simran** \n\n **6.Dec-17: Ritika**\n\n **7.Dec-26: kanchan**\n\n **8.Dec-26: Manvi (gillette)**")
              .setFooter("Yaquta's Prison")
              message.channel.send(Embed4)
            }
  if (message.channel.id === "712412653338886185") {
    let mes = message.content.substr(0);
    let sentence = mes.split("\n");
    for (var i = 1; i < sentence.length; i++) {
      let x = sentence[i].split(" ");
      message.react(x[0]);
    }
  }
  if (message.content === "Q1") {
    message.channel.send("Who was the second person to write a message in #chat\n A)Affan \n B)Sacchin \n C)Shardul \n D)Faarish").then(message =>
      {
        message.react('🇦');
        message.react('🇧');
        message.react('🇨');
        message.react('🇩')
      })
      if (message.content === "!info") {
        const Embed4 = new Discord.MessageEmbed()
          .setColor(0XC27C0E)
          .setTitle("**PRISON ONE YEAR ANNIVERSARY**")
          .setThumbnail("https://imgur.com/zqeOLZC.png")
          .setDescription("**INFORMATION** \n\n\n\n **<#715340560826630174> is where we'll be notified of new inmates. This channel will remain empty most of the time, so keep track of it, when you can.#is where we'll be notified of new inmates. This channel will remain empty most of the time, so keep track of it, when you can.** \n **The server celebrates its one year birthday on the 20th of May. Like every first birthday, this  too is special. In order to relive all the memories made here, and spend some time together we'll be hosting a GAME NIGHT of the 20th at 10:30pm IST. This server would have never have meant so much had it not been for all of you. So bring along some food and drinks and let's party together!**")
          
          .setFooter("Yaquta's Prison")
        message.channel.send(Embed4)
      }
  


  }
  if (message.content === "Q2") {
    message.channel.send("What was the intial capacity of B block when the server was first created")
  }
  if (message.content === "Q3") {
    message.channel.send("'Arey just because you are a muslim doesn’t mean they will advertise AK 47 to you' who said this quote?\n A)Shardul \n B)Sacchin \n C)Vishnu\n D)Kunal").then(message =>
      {
        message.react('🇦');
        message.react('🇧');
        message.react('🇨');
        message.react('🇩')
      })
  }
  if (message.content === "Q4") {
    message.channel.send("Name two of the three people who had the first meetup in the server on June 20 2020")
  }
  if (message.content === "Q5") {
    message.channel.send("Who got the @Designer Chess 🎖️ badge?\n A)Neil \n B)Shardul \n C)Saurav\n D)Mansi").then(message =>
      {
        message.react('🇦');
        message.react('🇧');
        message.react('🇨');
        message.react('🇩')
      })
  }
  if (message.content === "Q6") {
    message.channel.send("Whose number is this +91 9739585144?\n A)Faarish \n B)Arjun \n C)Pranay\n D)Yaquta").then(message =>
      {
        message.react('🇦');
        message.react('🇧');
        message.react('🇨');
        message.react('🇩')
      })
  }
  if (message.content === "Q7") {
    message.channel.send("PPL started because Hemang **allegedly** stole Vishnu's girl. Name that girl")
  }
  if (message.content === "Q8") {
    message.channel.send("Out of the below options who was the only person who didn't write a message in #matchtestmonials\n A)Faarish \n B)Ridhi MAA \n C)Ansh\n D)Ajinkya").then(message =>
      {
        message.react('🇦');
        message.react('🇧');
        message.react('🇨');
        message.react('🇩')
      })
  }
  if (message.content === "Q9") {
    message.channel.send("Who was the first person to boost the server\n A)Hemang \n B)Arjun \n C)Yaquta\n D)Sacchin").then(message =>
      {
        message.react('🇦');
        message.react('🇧');
        message.react('🇨');
        message.react('🇩')
      })
  }
  if (message.content === "Q10") {
    message.channel.send("When his addu's birthday \n A)March 19 \n B)Feb 23 \n C)Jan 19 \n D)Feb 27").then(message =>
      {
        message.react('🇦');
        message.react('🇧');
        message.react('🇨');
        message.react('🇩')
      })
  }
  
  if (message.channel.id === "807647058869354547") {
    let mes = message.content.substr(0);
    let sentence = mes.split("\n");
    for (var i = 1; i < sentence.length; i++) {
      let x = sentence[i].split(" ");
      message.react(x[0]);
    }
  }
  if (message.content.startsWith("!bdayboi")) {
    console.log("Command Acknowleged")
    let mention = message.mentions.members.first()
    if (mention) {
      console.log("Trying to add role")
      message.guild.members.cache.get(mention.id).roles.add("737446459967799447")
    }
  }

  if (message.channel.id === "811148120670076959") {
    let mes = message.content.substr(0);
    let sentence = mes.split("\n");
    for (var i = 1; i < sentence.length; i++) {
      let x = sentence[i].split(" ");
      message.react(x[0]);
    }
  }
  if (message.channel.id === "715255733666709554") {
    message.react('✅')
  }
  if (message.content.startsWith("!remove")) {
    console.log("Command Acknowleged")
    let mention = message.mentions.members.first()
    if (mention) {

      console.log("Trying to add role")
      try {
        message.guild.members.cache.get(mention.id).roles.remove("737446459967799447")
      }
      catch (err) { }
    }
  }
  if (message.content.startsWith("!remove1")) {
    console.log("Command Acknowleged")
    let mention = message.mentions.members.first()
    if (mention) {

      console.log("Trying to add role")
      try {
        message.guild.members.cache.get(mention.id).roles.remove("712754991521333319")
      }
      catch (err) { }
    }
  }
const messageid = "842340728134959174"
if(messageid)
{
  messageid.react
}

  if (message.content.startsWith("!addbackwwhiash")) {
    console.log("Command Acknowleged")
    let mention = message.mentions.members.first()
    if (mention) {
      console.log("Trying to add role")
      message.guild.members.cache.get(mention.id).roles.add("712754991521333319")
    }
  }

  if (message.content.startsWith("!LI")) {
    console.log("Command Acknowleged")
    let mention = message.mentions.members.first()
    if (mention) {
      console.log("Trying to add role")
      message.guild.members.cache.get(mention.id).roles.add("725008517362089998")
    }
  }

  if (message.content.startsWith("!convicted")) {
    console.log("Command Acknowleged")
    let mention = message.mentions.members.first()
    if (mention) {
      console.log("Trying to add role")
      message.guild.members.cache.get(mention.id).roles.add("715224603747680357")
    }
  }

  message.client.channels.fetch("806542035527270443").then(channel => {
    channel.messages.fetch("842346852740497448").then(message => {
        message.react('👍');
    })
  } )


  if (message.channel.id === "806566443385618504") {
    message.react('🇦')
      .then(() => {
        message.react('🇧')
      });
  }
  if (message.channel.id === "712640459473813574") {
    message.react('👍')
      .then(() => {
        message.react('👎')
      });
  }

  var response = ['Ghanta', 'Not likely', 'Too hard to tell', 'Quite Possible', 'Definitely', 'Maybe', 'Yes', 'The answer to this question can not be found', 'Probably not', 'No'];
  if (message.content.startsWith("Robo,") && message.content.endsWith("?")) {
    var row = Math.floor(Math.random() * ((response.length) - 1) + 1);
    message.channel.send("<@" + message.author + ">" + " " + response[row]);
  }
  console.log(message.content);
  let msg1 = message.content.substr(0);
  let sentence1 = msg1.split(" ")
  if (sentence1.includes("<@&712286690764652584>")) {
    message.channel.send("<@" + message.author + ">" + " Wait for a moment, the Wardens will be with you shortly");
  }
  var response1 = [',looks like my favorite person is here', 'its a beautiful day right', 'how are you', 'I am a bit busy now will ttyl', 'hope you are doing good', 'looks like my favorite person is here', 'have a nice day']
  if (message.mentions.has(client.user) && message.content.includes("Hello")) {

    var row1 = Math.floor(Math.random() * ((response1.length) - 1) + 1);
    message.channel.send("Hey" + " " + "<@" + message.author + ">" + " " + response1[row1])
  }
  let mention = message.mentions.members.first()
  let mention2 = message.mentions.members.last()
 var response1 = [ mention , mention2  , mention  ]
 console.log(response1)
 if(message.content.startsWith("Robo") && message.content.includes("Pick"))
 {
   if(mention && mention2){
    var row1 = Math.floor(Math.random() * ((response1.length) - 1) + 1);
    message.channel.send(" I pick" + " " + "<@" + response1[row1] + ">")
  }
   
 }

  if (message.content.includes("Dead server")) {
    message.channel.send("<@" + message.author + ">" + " We don't talk about it here");
  }
  if (message.content.startsWith("!ping")) {
    var ping = Date.now() - message.createdTimestamp;
    message.channel.send("Your ping is `" + `${ping}` + " ms`");
  }
  const roleNamex = message.member.roles.cache.find(r => r.id === "712754991521333319" || r.id === "811822746937065503")
      if (roleNamex) {
  if (message.content === "Prediction time") {
    const Embed2 = new Discord.MessageEmbed()
      .setColor(0XFFC300)
      .setTitle("Prediction Time")
      .setDescription(" **ITS TIME FOR TODAY'S PREDICTIONS:** \n\n\ **winning team:** \n **1st innings score:** \n\n\ **(please note predictions to be done within the first 5 overs of the particular innings**")
    message.channel.send(Embed2)
    message.channel.send(" <@516993440920240128> <@!245483264502923265> <@!690910552297308190> <@!697854182060720320> <@724871282877005846> <@!702053598443470918> <@!755027725185450026> <@!634380346015875072> <@427427280482992128> <@!540950441215787010> <@!427714149607538688> <@!591516801423245312> <@!616375815352877187> <@!773875543690707015> <@!780289435019378728> <@!722702462527733830> <@!417312380108931092> <@!392743437683654656> <@!742035662563442730> <@!587383572470562832> <@!362845029498355714> <@!392237937246339083> <@727824625056088104> <@!714866717121052713> <@!701364406486827089>")
  }}
  if (message.content === "!Rules") {
    const Embed3 = new Discord.MessageEmbed()
      .setColor(0XAD1457)
      .setTitle("Rules for Prediction")
      .setDescription(" **1.No Editing or Deleting allowed on the Prediction message. Once prediction is done it is done.**  \n\n **2.Prediction should be done only within the first 5 overs of the 1st Innings** \n\n **3.Prediction later won't count even if the prediction is spot on. Only for the first game it was allowed but from now on it is strictly probhited. **\n\n **4.Please put your team score and Winning team in one message so that it is easier for us to check.** \n\n **5. Winning Team and correct innings score carry 1 point no bonus point is given for accuracy.** \n\n **6.If the innings score isn't the same as the one who predicted, the score which is the closest wins.** \n\n **7. If two or more players get the prediction right each are awarded a point.**")
    message.channel.send(Embed3)
  }

  if (message.content.startsWith("!profile")) {
    let user;
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

      .addField("Roles:", message.member.roles.cache.map(r => `${r}`).join('|'))

      .addField("Bot:", `${user.bot}`, true)
      .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
    message.channel.send({ embed });
  }
  if (message.content === "VA DA DEIIIIII") {
    message.channel.send("Hello everyone , I have been created to replace Robowarden(for now) if you have any doubts please dm my creator Hemang and yeah you guys can call me Robo Modren");
  }
  if (message.content === "Breakfast_club") {
    message.channel.send("Breakfast club:<@516993440920240128><@!634380346015875072><@!587383572470562832><@!254072409878036480><@702053598443470918><@!714866717121052713><@724871282877005846><@!349112856400232450><@!427714149607538688><@!392237937246339083><@!729784244204732458><@!722702462527733830><@427427280482992128>"
    )

  }
  if (message.content === "group_Hydrohomies") {
    message.channel.send("Hydrohomies:<@516993440920240128><@!349112856400232450><@649185443002449926><@!540950441215787010><@!634380346015875072><@!697905350988398695><@!728681649059004579><@!254072409878036480><@!729784244204732458><@427427280482992128><@!427714149607538688><@!728829310558928897><@!335439318141239297><@701364406486827089><@!690910552297308190>")
  }
  if (message.content === "group_thisisus") {
    message.channel.send("ThisisUs:<@427427280482992128><@!427714149607538688><@724871282877005846><@!729784244204732458><@!728829310558928897><@701364406486827089><@516993440920240128><@!728868019438354432>")
  }
  if (message.content === "group_amongus") {
    message.channel.send("Amongus:<@!429921815922475009> <@427427280482992128> <@!729784244204732458> <@714874002585419817> <@!634380346015875072> <@!728829310558928897> <@!427714149607538688> <@!392743437683654656> <@!587383572470562832> <@410098890080256000> <@!587940568210866226> <@!697905350988398695> <@649185443002449926> <@!335439318141239297> <@!504366626787950621> <@697454804364034129> <@731868476360359997> <@!743198622396448769> <@365023409605836813> <@737656845224640524> <@!690689563093368922> <@759126265977765891> <@780289435019378728> <@516993440920240128>")
  }
  if (message.content === "join group_gamenight") {
    message.react('👍')
  }
  if (message.content === "join group_IPL") {
    message.react('👍')
  }
  if (message.content === "group_gamenight") {
    message.channel.send("Gamenight : <@!427714149607538688> <@702053598443470918> <@!729784244204732458> <@724871282877005846> <@516993440920240128> <@!728681649059004579> <@!755027725185450026> <@!714866717121052713> <@!392237937246339083> <")
  }
  if (message.content === "group_Shreya") {
    message.channel.send("Shreya's Assemble :<@!540950441215787010> <@!804323493533581322> <@!728681649059004579>")
  }
  if (message.content === "group_IPL") {
    message.channel.send("IPL : <@516993440920240128> <@!245483264502923265> <@!690910552297308190> <@!697854182060720320> <@724871282877005846> <@!702053598443470918> <@!755027725185450026> <@!634380346015875072> <@427427280482992128> <@!540950441215787010> <@!427714149607538688> <@!591516801423245312> <@!616375815352877187> <@!773875543690707015> <@!780289435019378728> <@!722702462527733830> <@!417312380108931092> <@!392743437683654656> <@!742035662563442730> <@!587383572470562832> <@!362845029498355714> <@!392237937246339083> <@727824625056088104> ")
  }
  const args = message.content.substring(0).split(" ")
  if(message.content === "group_KUNALSTONKS")
  {
   message.channel.send("Get for the event guys : <@!245483264502923265> <@!316968936988082188> <@!392743437683654656> <@!417312380108931092> <@!427714149607538688> <@!429921815922475009> <@!516993440920240128> <@!540950441215787010> <@!591516801423245312> <@!649185443002449926> <@!690910552297308190> <@!697905350988398695> <@!742035662563442730> <@!755027725185450026> <@!830089999789326367> <@!714866717121052713> <@!724871282877005846> <@!728681649059004579> <@!728829310558928897> <@!729784244204732458>")
  }
 
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
 
  let args1 = message.content.substring(PREFIX.length).split(" ");
  switch (args1[0]) {
    case "poll":
      let args1 = message.content.substring(PREFIX.length).split(" ");
      const roleName2 = message.member.roles.cache.find(r => r.id === "712754991521333319" || r.id === "811822746937065503")
      if (roleName2) {
        const Embed = new Discord.MessageEmbed()
          .setColor(0XFFC300)
          .setTitle("Initiate Poll")
          .setDescription("!poll to initiate a simple yes or no poll")
        if (!args1[1]) {
          message.channel.send(Embed);

        }
        let mesArgs = args1.slice(1).join(" ")
        message.channel.send("**" + mesArgs + "**").then(messageReaction => {
          messageReaction.react("👍")
          messageReaction.react("👎")
          message.delete({ timeout: 3000 })
        })
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
      const categoryId = '728559757513850941'
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
      const categoryId = '811148588863586315'
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



})



client.login(process.env.token);
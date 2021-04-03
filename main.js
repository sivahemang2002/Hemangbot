const Discord = require('discord.js');
const welcome = require('./welcome');
const command = require('./command');
const {Client} = require('pg')
const client = new Discord.Client();
const config = require('./configda.json')
const welcome1 = require('./welcome1');
const path = require('path')
const fs = require('fs')
const firstmessage = require('./firstmessage')
const fetch = require('node-fetch')
const querystring = require('querystring')
const TicTacToe = require('discord-tictactoe');
const scaling = require('./scaling');
const bye = require('./bye');
const roleclaim = require('./roleclaim');
const bye1 = require('./bye1');

const PREFIX = "!"
new TicTacToe({
  language: 'en',
  command: '!ttt'
}, client);

let muted = [


]



let memberlog = "809152418163327049"
const logID = "718779866710933615"
function logs(message,args){
  const embed = new Discord.MessageEmbed()
                        .setColor("BLUE")
                        .setThumbnail(message.author.avatarURL)
                        .addField("ID:", `${message.author}`, true)
                        .addField("Username:", `${message.author.username !== null ? `${message.author.username}` : 'None'}`, true)
                        .addField("Log:",args)
                        .addField("Channel ID:",`${message.channel}`)
                        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
  client.channels.cache.get(logID).send(embed)

}

client.on('messageUpdate',(oldmessage, newmessage ) => {
  if(oldmessage.channel.guild.id == '711634547770654791'){
    console.log(newmessage.author.bot)
  if(logID != newmessage.channel.id && newmessage.author.bot == false)
  {
    console.log("messageupdate")
  let log = "Old message: " + oldmessage.content + "\nNew Message: " + newmessage.content ;
  logs(newmessage,log)}}
  

})
client.on("messageDelete", (messageDelete) => {
  if(messageDelete.channel.guild.id == '711634547770654791'){
  if(logID !=messageDelete.channel.id)
  {
  let log = `**This message by ${messageDelete.author.tag} was deleted**.
             ${messageDelete.content}`;
  logs(messageDelete,log)}}
 });




client.once('ready', () => {
    console.log('PrisonBot is online');
    welcome(client)
    welcome1(client)
    scaling(client)
    bye(client)
    bye1(client)
    roleclaim(client)
   
});



client.on('message', async message => {
  if(muted[muted.indexOf(message.author.id)])
  {
    message.delete()
  }
  if(message.content === "!region")
  { 
    console.log
    if(message.guild.region === 'india')
  {
    message.guild.setRegion('singapore')

.then(updated => console.log(`Updated guild region to ${updated.region}`))
.catch(console.error);
  }
  else{
    message.guild.setRegion('india')

.then(updated => console.log(`Updated guild region to ${updated.region}`))
.catch(console.error);
  }
  }
 if(message.content.startsWith("!sh"))
 {

  console.log("Command Acknowleged")
  let mention = message.mentions.members.first()
  muted.push(mention.id)
     setTimeout(function() {
      
      muted.splice(muted.indexOf(mention.id),1)
    }, 30000)
 }


    let msg = message.content.substr(0);
    let sentence = msg.split(" ");
    if (sentence.includes("F")) {
        message.react('🇫');
    }
    if(message.content === "f"){
      message.react('🇫');
    }
    if(message.content.startsWith("!permit")){
      console.log("Command Acknowleged")
      let mention = message.mentions.members.first()
      if(mention){
        console.log("Trying to add role")
      message.guild.members.cache.get(mention.id).roles.add("712289127948877844")
   
        message.guild.members.cache.get(mention.id).roles.add("720213022076829728")

     
      }
 }
 if(message.content === "-birthdaylist")
 {
   message.channel.send("● Jan-01: 335439318141239297 Nazrani#9974 - Nickname: Allen \n ● Jan-01: 690594833806393414 Annabie#3105 - Nickname: Anika \n● Jan-14: 245483264502923265 SNM#2408 - Nickname: Shardul👑"
   ● Jan-17: 392743437683654656 shashank#2021 - Nickname: Shashank(6ix9ine)(fake engineer)
   ● Jan-20: 254072409878036480 ShadowDragon#4636 - Nickname: Vishnu
   ● Feb-15: 106797161403924480 DeltaRager#8271 - Nickname: Abhinav
   ● Feb-23: 587383572470562832 addu#4093 - Nickname: addu 🍗
   ● Feb-27: 587940568210866226 dhvanisutaria#9299 - Nickname: Dhvani
   ● Mar-15: 591516801423245312 waffles#7080 - Nickname: Pallavi
   ● Mar-16: 745239329273544785 harsh002#7845 - Nickname: Harsh
   ● Mar-19: 349112856400232450 arjun#1064 - Nickname: Arjun ⚕
   ● Mar-21: 690689563093368922 Iamafancycandle#9962 - Nickname: Sakshi
   ● Mar-28: 690910552297308190 CARSTAIRS#6008 - Nickname: Medha
   ● Mar-31: 755027725185450026 sputnik#6325 - Nickname: Janhavi
   ● Apr-10: 392237937246339083 tndurinites#0839 - Nickname: Thani MAA (Tandoori Thanima)
   ● Apr-21: 714913977649463347 sana#6617 - Nickname: Sana
   ● Apr-24: 697454804364034129 priyansh#8894
   ● Apr-25: 724871282877005846 Shreekaar#4654
   ● Apr-26: 739107898067517550 Divii#3476 - Nickname: Divyansh
   ● Apr-27: 731868476360359997 fanil#5040
   ● Apr-27: 773875543690707015 janki#7740 - Nickname: Janki
   ● May-15: 504366626787950621 rebreellion#3248 - Nickname: Bree
   ● May-21: 714866717121052713 sanjana#6625 - Nickname: Sanjana
   ● May-24: 260480747582783488 Anshieboi#8940 - Nickname: Ansh
   ● May-26: 691615842001092679 gangsta#6877 - Nickname: Vaishnavi
   ● May-30: 702053598443470918 yaquta#5829
   ● May-31: 362845029498355714 aaradhanb#0629 - Nickname: Aaradhan
   ● Jun-08: 697854182060720320 Mayank#2967 - Nickname: Mayank
   ● Jun-17: 429921815922475009 Ansh Gupta#0939 - Nickname: Ansh (Joel Dsouza)
   ● Jul-25: 687023647281381438 Madhu#8006
   ● Jul-28: 689545994207101065 sinhasaheb#1240 - Nickname: Pratyush (Don Praty)
   ● Jul-30: 728868019438354432 Jill#8164 - Nickname: Jill ✨
   ● Aug-02: 780289435019378728 Devesh#4418
   ● Aug-02: 716270411733794877 muhsinaaa#8104 - Nickname: Muhsina
   ● Aug-04: 721348341203599451 akshitbindal#1263 - Nickname: Akshit
   ● Aug-13: 540950441215787010 shreya#9003 - Nickname: Shreya Tatke
   ● Aug-14: 722702462527733830 shivaaanay#2452 - Nickname: Shiva
   ● Aug-14: 634380346015875072 sacchinbhg#1018 - Nickname: Sacchin
   ● Aug-16: 718454218410819626 cynerra#8750 - Nickname: cynu
   ● Aug-21: 792383816630140948 dopecoffee#7707 - Nickname: Atharva
   ● Sep-04: 516993440920240128 Hemang#2267
   ● Sep-10: 714874002585419817 Titiksha#0534
   ● Sep-26: 724742262554230784 Megha#1776 - Nickname: Megha (Megs)
   ● Sep-30: 417312380108931092 cacisama#6539 - Nickname: Akshara
   ● Oct-03: 759126265977765891 Rose Jose#9595
   ● Oct-04: 608268975264235531 kunal#3720 - Nickname: Kunal
   ● Oct-13: 728829310558928897 Samhitha#4795 - Nickname: Sam
   ● Oct-23: 728681649059004579 Shreya#4638 - Nickname: Shreya (Mod nahi Mood)
   ● Oct-24: 685544149814214786 oblatecordon#9792 - Nickname: nora (🌚)
   ● Oct-26: 694123367694991382 Shweta#3407
   ● Oct-29: 792450977403895829 sid 29_2000#9323 - Nickname: Siddhi
   ● Nov-11: 729784244204732458 Muskan#6974 - Nickname: Muskan (Rosy)
   ● Nov-12: 499212732143239168 _Fireball_Rex_#7048 - Nickname: Awais
   ● Nov-13: 316968936988082188 Neil#4123
   ● Nov-14: 427714149607538688 ajinkya#5270 - Nickname: Ajinkya (Not an impostor)
   ● Nov-17: 689834555489910803 Bunyip#0142 - Nickname: Anubhav
   ● Nov-18: 767164882386157608 Nihari Reddy#4579
   ● Nov-18: 274284574555766786 prasanth#0001
   ● Nov-22: 710780800143982622 TheAhuzaBoi#6242 - Nickname: Mohit Ahuja
   ● Nov-25: 649185443002449926 Mansi#5265
   ● Dec-03: 569188372191641611 ashville#6669 - Nickname: Anoushka
   ● Dec-04: 622837658850295858 Lekhika#5312 - Nickname: Lekhika
   ● Dec-08: 427427280482992128 Ankit#2000
   ● Dec-14: 713300475444985897 Momo🥟#1164
   ● Dec-15: 742035662563442730 Simran#2185
   ● Dec-17: 731818289717575770 Ritika#8145 - Nickname: Ritika
   ● Dec-26: 697905350988398695 pleasebanmayonnaise#1263 - Nickname: Manvi (gillette)
   ● Dec-26: 701364406486827089 kanchan#9204 )
 }
 
    if(message.content === "!archive")
      { 
        message.channel.setParent("712678821035507774")
      }

      if(message.content === "Happy Birthday da dei <@!587383572470562832>")
      {
        message.channel.send("**OMG! Today is <@!587383572470562832>'s Birthday**")
      }

      if (message.content.startsWith ('setNickname')) {
         let nickname = message.content.split (" ").slice (1).join (" ");
         const roleName = message.member.roles.cache.find(r => r.id === "725008517362089998")
         if(roleName){
          let name = message.guild.member(message.author);
          let x1 = name.nickname ? name.nickname : message.author.username;
          console.log(name)
          let fixedname = x1.split("(")[0]
          message.member.setNickname (fixedname + "(" + nickname + ")")
         }
    ;}
    
    if (message.content.startsWith ('setNickname')) {
      let nickname = message.content.split (" ").slice (1).join (" ");
      const roleNamex = message.member.roles.cache.find(r => r.id === "721683615192449076")
      if(roleNamex){
       let name = message.guild.member(message.author);
       let x1 = name.nickname ? name.nickname : message.author.username;
       console.log(name)
       let fixedname = x1.split("(")[0]
       message.member.setNickname (fixedname + "(" + nickname + ")")
      }
 ;}

  if (message.content.startsWith ('setNickname')) {
    let nickname = message.content.split (" ").slice (1).join (" ");
    const roleName1 = message.member.roles.cache.find(r => r.id === "811822746937065503")
    if(roleName1){
      let name = message.guild.member(message.author);
     let x2 = name.nickname ? name.nickname : message.author.username;
     console.log(name)
     let fixedname = x2.split("(")[0]
     message.member.setNickname (fixedname +" " + "(" + nickname + ")")
    }
  ;}
  if(message.content === "-help")
  { 
    const Embed1 = new Discord.MessageEmbed()
    .setColor(0XFFC300)
    .setTitle("Commands")
    .setDescription("**BOT COMMANDS**:\n __!server info__ - To view the basic info of the server \n __!profile__ - To view yours/other perons's info and also see your roles \n __!ping__ - To check your ping \n __!udict__ - To check a definition using the popular site Urban Dictionary \n __setNickname__ - This feature is only applicable for **LI** members.It allows you to change the name of the user.(Note : Nickname will only appear in brackets and your original nickname will still appear before the brackets! )\n Breakfast_club - To tag the all the breakfast gang. \n group_Hydrohomies - To remind your inmates to stay hydrated. \n group_thisisus - For the this is us fans. \n group_amongus - Tag people to play a game of among us \n group_gamenight - tag people for gamenight  \n \n **OTHER FEATURES** \n 1. Robo,[content]? - To ask a question to the bot \n 2.Asking a Poll - Please head over to the Polls channels and ask a question and Robo itself will give a reaction \n  ")
    message.channel.send(Embed1);
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
               if(message.content === "Q1")
               {
                 message.channel.send("Which country has the highest GDP(PPP) \n A)Luxemborg \n B)USA \n C)Singapore \n D)Switzerland ")
                 
                
                }
               if(message.content === "Q2")
               {
                 message.channel.send("What is the 11th largest country _________ \n Hint:Second largest country in Africa ")
               }
               if(message.content === "Q3")
               {
                 message.channel.send("Name the two countries which have 4 FIFA WCS :")
               }
               if(message.content === "Q4")
               {
                 message.channel.send("Uptil 2013 the highest grossing Bollywood film was : \n A)Enthiran \n B)Ghajini \n C)Dhoom 3 \n D)3 Idiots")
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
                      if(message.content.startsWith("!bdayboi")){
                        console.log("Command Acknowleged")
                        let mention = message.mentions.members.first()
                        if(mention){
                          console.log("Trying to add role")
                        message.guild.members.cache.get(mention.id).roles.add("737446459967799447")}}
                      
                if (message.channel.id === "811148120670076959") {
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
          if(message.content.startsWith("!remove")){
            console.log("Command Acknowleged")
            let mention = message.mentions.members.first()
            if(mention){

              console.log("Trying to add role")
              try{
           message.guild.members.cache.get(mention.id).roles.remove("737446459967799447")} 
          catch(err){}}}
          if(message.content.startsWith("!remove1")){
            console.log("Command Acknowleged")
            let mention = message.mentions.members.first()
            if(mention){

              console.log("Trying to add role")
              try{
           message.guild.members.cache.get(mention.id).roles.remove("712754991521333319")} 
          catch(err){}}}
          
          
          if(message.content.startsWith("!addbackwwhiash")){
            console.log("Command Acknowleged")
            let mention = message.mentions.members.first()
            if(mention){
              console.log("Trying to add role")
            message.guild.members.cache.get(mention.id).roles.add("712754991521333319")}}
         
            if(message.content.startsWith("!LI")){
              console.log("Command Acknowleged")
              let mention = message.mentions.members.first()
              if(mention){
                console.log("Trying to add role")
              message.guild.members.cache.get(mention.id).roles.add("725008517362089998")}}

           if(message.content.startsWith("!convicted")){
            console.log("Command Acknowleged")
            let mention = message.mentions.members.first()
            if(mention){
              console.log("Trying to add role")
            message.guild.members.cache.get(mention.id).roles.add("715224603747680357")}}

             
           
         
                
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
                
                        var response = ['Ghanta','Not likely','Too hard to tell','Quite Possible','Definitely','Maybe','Yes','The answer to this question can not be found','Probably not','No'];
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
                        var response1 = [',looks like my favorite person is here','its a beautiful day right','how are you','I am a bit busy now will ttyl','hope you are doing good','looks like my favorite person is here','have a nice day']
                        if(message.mentions.has(client.user)&& message.content.includes("Hello")){
                         
                         var row1 = Math.floor(Math.random()*((response1.length)-1)+1);
                          message.channel.send("Hey" + " " +"<@" + message.author + ">" + " " + response1[row1])}
                        
                   
                   if(message.content.includes ( "Dead server"))
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
                 if(message.content === "group_amongus")
                 {
                   message.channel.send("Amongus:<@!429921815922475009> <@427427280482992128> <@!729784244204732458> <@714874002585419817> <@!634380346015875072> <@!728829310558928897> <@!427714149607538688> <@!392743437683654656> <@!587383572470562832> <@410098890080256000> <@!587940568210866226> <@!697905350988398695> <@649185443002449926> <@!335439318141239297> <@!504366626787950621> <@697454804364034129> <@731868476360359997> <@!743198622396448769> <@365023409605836813> <@737656845224640524> <@!690689563093368922> <@759126265977765891> <@780289435019378728> <@516993440920240128>")
                 }
                 if (message.content === "join group_gamenight") {
                  message.react('👍')
                 }
                 if(message.content === "group_gamenight"){
                   message.channel.send("Gamenight : <@!427714149607538688> <@702053598443470918> <@!729784244204732458> <@724871282877005846> <@516993440920240128> <@!728681649059004579> <@!755027725185450026> <@!714866717121052713>")
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
                 
                 
                 let args1 = message.content.substring(PREFIX.length).split(" ");
                    switch(args1[0])
                    {
                      case "poll":
                        let args1 = message.content.substring(PREFIX.length).split(" ");
                        const roleName2 = message.member.roles.cache.find(r => r.id === "712754991521333319" || r.id === "811822746937065503")
                        if(roleName2){
                          const Embed = new Discord.MessageEmbed()
                        .setColor(0XFFC300)
                        .setTitle("Initiate Poll")
                        .setDescription("!poll to initiate a simple yes or no poll")
                        if(!args1[1])
                        {
                          message.channel.send(Embed);

                        }
                        let mesArgs = args1.slice(1).join(" ")
                        message.channel.send("**" + mesArgs + "**").then(messageReaction => {
                            messageReaction.react("👍")
                            messageReaction.react("👎")
                            message.delete({timeout :3000})
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
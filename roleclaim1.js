const firstmessage1 = require('./firstmessage1.js')
const firstmessage = require('./firstmessage1.js')

module.exports = (client) => {
  const channelId = '821771709208068098'

  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name == emojiName)

  const emojis = {
    '📀':'Yellow',
    '🔴':'Red',
     


  }

  const reactions = []

  let emojiText = 'As a Server Booster, you get a chance to pick a colour for chat.See the above colours in the image below and select the colour here.\n\n'
  for (const key in emojis) {
    
    reactions.push(key)
    

    const role = emojis[key]
    emojiText += `${key}  ${role}\n`
  }

  firstmessage1(client, channelId, emojiText, reactions)

  const handleReaction = (reaction, user, add) => {
    if (user.id === '806539885778829312') {
      return
    }

    const emoji = reaction._emoji.name

    const { guild } = reaction.message

    const roleName = emojis[emoji]
    if (!roleName) {
      return
    }

    const role = guild.roles.cache.find((role) => role.name === roleName)
    const member = guild.members.cache.find((member) => member.id === user.id)

    if (add) {
      member.roles.add(role)
    } else {
      member.roles.remove(role)
    }
  }

  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true)
    }
  })

  client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false)
    }
  })
}
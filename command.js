const { prefix } = require('./configda.json')

module.exports = (client, aliases, callback) => {
  if (typeof aliases === 'string') {
    aliases = [aliases]
  }
  

  client.once('message', (message) => {
    const { content } = message

    aliases.forEach((alias) => {
      const command = `${prefix}${alias}`

      if (content.startsWith(`${command} `) || content === command) {
        console.log(`Running the command ${command}`)
        callback(message)
      }
    })
  })
}
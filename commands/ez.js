const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      if (message.content.startsWith('dm')) {
    setInterval(function() {
        let user = msg.mentions.users.first() || msg.author;
            user.send('raided by UhJimmy oof.')
    }, 3000)
}

module.exports.help = {
  name: "dm"
}

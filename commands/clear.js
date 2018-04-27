module.exports.help = {
  name: "clear"
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  // Command is !clear <Number that's less than 100 and greater than 0.

  if(message.member.hasPermission("MANAGE_MESSAGES")) {
    if(args[0]) {
      message.channel.bulkDelete(args[0]).then(msg => msg.delete(5000));
    } else {
      let embed = new Discord.RichEmbed()
      .setAuthor(`» Wrong Format`)
      .setColor("#d62035")
      .addField("**EXAMPLE:** -clear 2",  `[${message.member}]`);
      message.channel.send(embed);
    }
  } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`» Insufficient permissions`)
    .setColor("#d62035")
    .addField("Please ask staff for the permissions.",  `[${message.member}]`);
    message.channel.send(embed);
  }
}

module.exports.help = {
  name: "clear"
}

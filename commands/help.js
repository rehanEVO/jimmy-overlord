const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let helpembed = new Discord.RichEmbed()
  .setDescription("**Help Commands**")
  .setColor("#930000")
  .addField("Command", "tier2", true)
  .addField("Member | Staff", ":white_check_mark: | :white_check_mark:", true)
  .addField("Description", "Wanting to buy something use -wtb _WHAT YOU WANT TO BUY_", true)
  .addField("test description", "testdedaida")
  .addField("Test decriptiaonda2", "tedsk")
  .setFooter("Made by Jimmy ✦ Cracking Hacking");


  return message.channel.send(helpembed);
}

module.exports.help = {
  name:"help"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let helpembed = new Discord.RichEmbed()
  .setDescription("**Help Commands**")
  .setColor("#930000")
  .addField("tier1", "tier2", true)
  .addField("hier1", "hier2", true)
  .addField("test description", "testdedaida")
  .addField("Test decriptiaonda2", "tedsk")
  .setFooter("Made by Jimmy ✦ Cracking Hacking");


  return message.channel.send(helpembed);
}

module.exports.help = {
  name:"help"
}

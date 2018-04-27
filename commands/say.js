const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  let info = args.join(" ");
  
  let wtbEmbed = new Discord.RichEmbed()
  .setDescription("[WTB]")
  .setColor("#930000")
  .addField("User", `[${message.author}]`)
  .addField("INFO", info true)
  .setFooter("Made by Jimmy ✦ Cracking Hacking");

  let wtbchannel = message.guild.channels.find(`name`, "wtb")
  if(!wtbchannel) return message.channel.send("Couldn't find wtb channel");

  message.delete().catch(O_o=>{});
  wtbchannel.send(wtbEmbed);
}

module.exports.help = {
  name: "say"
}

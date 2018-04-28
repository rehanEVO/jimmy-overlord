const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  let info = args.join(" ");
  
  let wtbEmbed = new Discord.RichEmbed()
  .setDescription("[WTB]")
  .setColor("#930000")
  .addField("User", `[${message.author}]`)
  .addField("INFO", info)
  .setFooter("Made by Jimmy ✦ Cracking Hacking");

  let wtbchannel = message.guild.channels.find(`name`, "wtb") 
  if(!wtbchannel) return message.channel.send({embed: {
  description: ":x: Couldn't find a wtb channel",
  color: 930000
}}).then(msg => {
   msg.delete(10000)
  }) 

  wtbchannel.send(wtbEmbed);
  message.channel.send({embed: {
  description: ":white_check_mark: Request has been added to #wtb",
  color: 9930000
}}).then(msg => {
   msg.delete(10000)
  }) 
}

module.exports.help = {
  name: "wtb"
}

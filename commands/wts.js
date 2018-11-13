const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  let info = args.join(" ");
  
  let wtsEmbed = new Discord.RichEmbed()
  .setDescription("「wts」")
  .setColor("#0x00aaaa")
  .addField("⊳ User", `${message.author}`)
  .addField("⊳ Product Info", info)
  .setFooter("Made by Jimmy ✦ Cracking Hacking");

  let wtschannel = message.guild.channels.find(`name`, "wts") 
  if(!wtschannel) return message.channel.send({embed: {
  description: ":x:  Couldn't find a _wts_ channel.",
  color: 0x76070b
}}).then(msg => {
   msg.delete(10000)
  }) 

  wtschannel.send(wtsEmbed);
  message.channel.send({embed: {
  description: `:white_check_mark:  Your request has been added to **${wtschannel}**.`,
  color: 0x32e01f
}}).then(msg => {
   msg.delete(10000)
  }) 
}

module.exports.help = {
  name: "wts"
}

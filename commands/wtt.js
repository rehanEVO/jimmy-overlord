const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  let info = args.join(" ");
  
  let wttEmbed = new Discord.RichEmbed()
  .setDescription("「wtt」")
  .setColor("#0x00aaaa")
  .addField("⊳ User", `${message.author}`)
  .addField("⊳ Product Info", info)
  .setFooter("Made by Jimmy ✦ Cracking Hacking");

  let wttchannel = message.guild.channels.find(`name`, "wtt") 
  if(!wttchannel) return message.channel.send({embed: {
  description: ":x:  Couldn't find a _wtt_ channel.",
  color: 0x76070b
}}).then(msg => {
   msg.delete(10000)
  }) 

  wttchannel.send(wttEmbed);
  message.channel.send({embed: {
  description: `:white_check_mark:  Your request has been added to **${wttchannel}**.`,
  color: 0x32e01f
}}).then(msg => {
   msg.delete(10000)
  }) 
}

module.exports.help = {
  name: "wtt"
}

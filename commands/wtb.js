const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  message.reply('Request added at #wtb')
  .then(msg => {
    msg.delete(10000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
  let info = args.join(" ");
  
  let wtbEmbed = new Discord.RichEmbed()
  .setDescription("[WTB]")
  .setColor("#930000")
  .addField("User", `[${message.author}]`)
  .addField("INFO", info)
  .setFooter("Made by Jimmy ✦ Cracking Hacking");

  let wtbchannel = message.guild.channels.find(`name`, "wtb")
  if(!wtbchannel) return message.channel.send("Couldn't find wtb channel");

  message.delete().catch(O_o=>{});
  wtbchannel.send(wtbEmbed);
}

module.exports.help = {
  name: "wtb"
}

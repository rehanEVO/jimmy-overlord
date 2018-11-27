const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't find user.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#930000")
  .addField("Reported User", `${rUser}`)
  .addField("Reported By", `${message.author}`)
  .addField("Channel ", message.channel, true) 
  .addField("Time ", message.createdAt, true)
  .addField("Reason", reason)
  .setFooter("Made by SerialKiller#1916 ✦ Worldwide Coupons ");

  let reportschannel = message.guild.channels.find(`name`, "reports")
  if(!reportschannel) return message.channel.send("Couldn't find reports channel");

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);
}

module.exports.help = {
  name: "report"
}

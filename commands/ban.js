const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Can't find user!");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No permissions!");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("⋅ Ban")
  .setColor("#a80101")
  .addField("Banned User", `${bUser}`)
  .addField("Banned By", `<@${message.author.id}>`)
  .addField("Banned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason)
  .setFooter("Made by SerialKiller#1916 ✦ Worldwide Coupons ");

  let punishmentschannel = message.guild.channels.find(`name`, "punishments");
  if(!punishmentschannel) return message.channel.send("Can't find punishments channel.");

  message.guild.member(bUser).ban(bReason);
  punishmentschannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}

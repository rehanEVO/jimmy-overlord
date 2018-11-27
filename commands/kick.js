const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Can't find user!");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No permissions!");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("⋅ Kick")
  .setColor("#e00000")
  .addField("Kicked User", `${kUser}`)
  .addField("Kicked By", `<@${message.author.id}>`)
  .addField("Kicked In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kReason)
  .setFooter("Made by SerialKiller#1916 ✦ Worldwide Coupons ");

  let kickChannel = message.guild.channels.find(`name`, "punishments");
  if(!kickChannel) return message.channel.send("Can't find punishments channel.");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);

  return;
}

module.exports.help = {
  name:"kick"
}

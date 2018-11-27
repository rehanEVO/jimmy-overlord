const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayavatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("#930000")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username)
  .addField("Created On", bot.user.createdAt)
  .setFooter("Made by SerialKiller#1916 ✦ Worldwide Coupons ");

  return message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}

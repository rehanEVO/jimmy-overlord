const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let vouches = JSON.parse(fs.readFileSync("./vouches.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  let vUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!vUser) return message.reply("Couldn't find them yo");
  let reason = args.join(" ").slice(22);

  if(!vouches[vUser.id]) vouches[vUser.id] = {
    warns: 0
  };

  vouches[vUser.id].vouches++;

  fs.writeFile("./vouches.json", JSON.stringify(vouches), (err) => {
    if (err) console.log(err)
  });

  let vouchEmbed = new Discord.RichEmbed()
  .setDescription("Vouch")
  .setAuthor(message.author.username)
  .setColor("#800080")
  .addField("Vouched user", `<@${vUser.id}>`)
  .addField("Vouches", vouches[vUser.id].vouches)
  .addField("Vouch Reason", reason);

  let vouchchannel = message.guild.channels.find(`name`, "vouches");
  if(!vouchchannel) return message.reply("Couldn't find vouches channel");

  vouchchannel.send(vouchEmbed);

}

module.exports.help = {
  name: "vouch"
}
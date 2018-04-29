const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let vouches = JSON.parse(fs.readFileSync("./vouches.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  let vUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!vUser) return message.reply("Can't find user.");

  vouches[vUser.id].vouches = 0;

  let vouchcounter = vouches[vUser.id].vouches;

  message.reply(`<@${vUser.id}> has ${vouchcounter} vouches.`);

}

module.exports.help = {
  name: "vouches"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.channel.send
  ({embed: {
    color: 0xe20a0f,
    description: '**Invalid arguments use:** \n **EXAMPLE**: _-clear 2_'
  }});
  message.channel.bulkDelete(args[0]).then(() => {

    let clearEmbed = new Discord.RichEmbed()
      .
      .setDescription("ClearChat | successfully")
      .setColor("#930000")
      .addField("Chat has cleared", `**successfully**`)
      .addField("Cleared", ` ${args[0]}` + "messages.")
      .setFooter("Made by Jimmy ✦ Cracking Hacking");

      let reportschannel = message.guild.channels.find(`name`, "logs")
      if(!reportschannel) return message.channel.send("Couldn't find logs channel");

      message.delete().catch(O_o=>{});
      reportschannel.send(clearEmbed);
  });

}


module.exports.help = {
  name: "clear"
}

const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) =>{

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);

  });

});


bot.on("ready", async () => {
  console.log(`${bot.user.username} has successfully started`);
  bot.user.setActivity("Your behaviour", {type: "WATCHING"});

  //bot.user.setGame("Security Check!");

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `-clear`) {
      let clearFile = bot.commands.get("clear");
           clearFile.run(bot,message,args);
}
// AND CONTINUE  LIKE, WITH THAT BEING DONE YOU
// CAN GUARANTEE THAT THEY USE YOUR PREFIX.

});

bot.login(process.env.BOT_TOKEN);

const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Happy New Year`,"http://twitch.tv/Dream")
client.user.setStatus("#IT WORKS!!")
});



client.login("NDE5NTk3NjMwOTE0NjkxMDgy.DvZDpg.ZwhXMYPrWQ86JZzah7NfOFN4d14");// لا تغير فيها شيء
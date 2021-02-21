const Discord = require('discord.js');
const DotEnv = require('dotenv').config()
const { userInfo } = require('os');
const client = new Discord.Client();
const userMan = new Discord.UserManager();
const channelMan = new Discord.ChannelManager();
const guildMan = new Discord.GuildManager();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'amogus') {
    msg.reply('ඞ');
  }


  if (msg.content === '!tableflip'){
    chanID = msg.channel.id;
    
    msg.channel.delete();
    msg.guild.channels.create(chanID);
    
  }
});



client.login(process.env.BOT_LOGIN);
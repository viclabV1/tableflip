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
    console.log('ඞ');
    msg.reply('ඞ');
  }


  if (msg.content === '!tableflip'){
    console.log('table flip started')
    chanID = msg.channel.id;
    
    
    
    
  }
  if(msg.content === '!nuclear'){
    console.log('nuclear option started');
    msg.channel.delete();
  }
});



client.login(process.env.BOT_LOGIN);
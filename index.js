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
/*  
  if (msg.content === 'AMOGUS') {
    console.log('ඞඞඞඞඞඞ');
    for(i=0; i<10; i++){
      msg.reply('ඞ');
    }
  }
*/
  if (msg.content === '!tableflip') {
    console.log('Table flip started');
    if (msg.member.hasPermission('ADMINISTRATOR')) {
      msg.channel.clone();
      msg.channel.delete();
      console.log('Table flipped');
    }
    else msg.reply('You are not an admin.');
  }

  if (msg.content === '!nuclear') {
    console.log('Nuclear option initiated');
    if (msg.member.hasPermission('ADMINISTRATOR')) {
      msg.channel.delete();
      console.log('Nuked');
    }
    else msg.reply('You are not an admin.');
  }
});



client.login(process.env.BOT_LOGIN);
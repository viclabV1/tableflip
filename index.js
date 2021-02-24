const Discord = require('discord.js');
const DotEnv = require('dotenv').config()
const { userInfo } = require('os');
const client = new Discord.Client();
//const userMan = new Discord.UserManager();
//const channelMan = new Discord.ChannelManager();
//const guildMan = new Discord.GuildManager();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
//Help command to describe commands to users.
  if(msg.content==='!help'){
    msg.reply(helpMessage);
  }
//idk this just dumb
  if (msg.content === 'amogus') {
    console.log('ඞ');
    msg.reply('ඞ');
  }
//this was too dumb
/*  
  if (msg.content === 'AMOGUS') {
    console.log('ඞඞඞඞඞඞ');
    for(i=0; i<10; i++){
      msg.reply('ඞ');
    }
  }
*/
//tableflip command
  if (msg.content === '!tableflip') {
    console.log('Table flip started');
    if (msg.member.hasPermission('ADMINISTRATOR')) {
      msg.channel.clone();
      msg.channel.delete();
      console.log('Table flipped');
    }
    else msg.reply('You are not an admin.');
  }
//tableclear command
  if (msg.content.includes('!tableclear')&& !(msg.content.includes(helpMessage))){
    console.log('table clear started');
    if(msg.member.hasPermission('ADMINISTRATOR')){
      num = Math.round(msg.content.replace('!tableclear ', ''));
      if((num>=1)&&(num<=100)){
          msg.channel.bulkDelete(num);
        }
      else {
        msg.reply('Invalid Input! Use the "!help" command to review the syntax.');
        msg.reply('Also make sure the number you input is between 1 and 100!');
      }
    }
    else msg.reply('You are not an admin. Bitch. Stupid fucking baby.');
  }
//nuclear command reundant as an admin can just delete a channel with two clicks anyhow
/*
  if (msg.content === '!nuclear') {
    console.log('Nuclear option initiated');
    if (msg.member.hasPermission('ADMINISTRATOR')) {
      msg.channel.delete();
      console.log('Nuked');
    }
    else msg.reply('You are not an admin.');
  }
*/
});
helpMessage = 'This bot allows admins to clear messages from a channel. This can be done in 2 ways. The first is by typing using the "!tableclear" command. '
+'This command will delete a specified number of messages from a channel. It can be called in the following way: "!tableclear [number between 1 and 100]. "'
+'The second way to clear messages is by using the "!tableflip" command. Simply enter "!tableflip" to delete all messages from a channel. There is also another command that I am not even going to tell you because it is just stupid. Have fun!';



client.login(process.env.BOT_LOGIN);
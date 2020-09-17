const Discord = require('discord.js');
const bot = new Discord.Client();
//const embed = require('./embed');


const token = 'Njk2NjM0NjAxMDIzNzMzODAx.Xorlhw.PRvZ2_ZHK14I43uXa1oLLlOYBZg';
const prefix = '/';

bot.on('ready', () => {

   bot.user.setActivity('♻️ Updating bot.... ♻️', {type: 'PLAYING'}).catch(console.error);


 console.log('Smart Bot is Online');
})



bot.login(token)

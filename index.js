const Discord = require('discord.js');
const bot = new Discord.Client();
//const embed = require('./embed');


const token = 'NzEwODU5MzY3OTEzNzUwNjI4.Xr6lYA.LWumn3peEbiGcaYkJtToJ3lmIIk';
const prefix = '/';

bot.on('ready', () => {

   bot.user.setActivity('♻️ Updating bot.... ♻️', {type: 'PLAYING'}).catch(console.error);


 console.log('Smart Bot is Online');
})



bot.login(token)

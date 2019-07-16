const Discord = require('discord.js');
const infofile = require("./json/alice.json");

module.exports.run = async (bot, message, args) => {
  
  const weight = infofile.body.weight;
  const high = infofile.body.high;
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription(`${infofile.name} Information`)
  .setColor("#FFC0CB")
  .setThumbnail(bicon)
  .addField("Bot Name:", bot.user.username, true)
  .addField("Create By:",infofile.author,true)
  .addField("Created On:", bot.user.createdAt,true)
  .addField(`Role []`) // Not complete
  .addField("B - W - H:",infofile.body.BWH)
  .addField("High:",high,true)
  .addField("Weight:",weight,true)
  .setTimestamp()
  .setFooter(`${message.author.username}`, message.author.displayAvatarURL);
  return message.channel.send(botembed);
}

module.exports.help = {
  name:"alice"
}
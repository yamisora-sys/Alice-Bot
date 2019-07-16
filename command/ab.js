const Discord = require ('discord.js');

module.exports.run = async (messgae, bot, args) => {

    let sum = message.guild.members.get(args[0]) || message.guild.members.get(args[1]);
    if(sum === 0) return message.channel.send(`Please input a, b!`);
    var a = args.join(" ").slice(22);
    var b = args.join(`${a} `).slice(22);
    let abembed = new Discord.RichEmbed()
    .setColor("#f45")
    .addBlankField("a+b",a+b)
    .addBlankField("a*b",a*b)
    .addBlankField("a-b",a-b)
    .addBlankField("a/b",a/b)
    .setTimestamp();
    message.channel.send(abembed);
}

module.exports.help = {
    name:"ab"
}
const Discord = require("discord.js");

module.exports.run = async(bot, message,args) => {
    let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()    
        .setDescription("Server Information")
        .setColor("#4f4")
        .setThumbnail(sicon)
        .addField("Server Name: ", message.guild.name,true)
        .addField("Id: ",message.guild.ownerID,true)
        .addField("Owner: ",message.guild.owner,true)
        .addField("Created On: ", message.guild.createdAt,true)
        .addField("You Joined: ", message.member.joinedAt,true)
        .addField(`Role[${message.guild.roles.size}]`, `${message.guild.roles}`) // not complete
        .addField("Total Members: ", message.guild.memberCount,true);

        return message.channel.send(serverembed);
}

module.exports.help = {
    name: "svinfo",
}
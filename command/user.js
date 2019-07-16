const Discord = require ('discord.js')

module.exports.run = async(bot, message, args) =>{
    let infouser = message.guild.member(message.mentions.users.first());
    if(infouser) {
        let avaauthor = message.author.displayAvatarURL;
        let avainfouser = infouser.user.displayAvatarURL;
        let infoEmbed = new Discord.RichEmbed()
        .setDescription(`:diamond_shape_with_a_dot_inside: ${infouser.displayName} Profile`)
        .setColor("#000089")
        .setThumbnail(avainfouser)
        .addField(`Name:`,`${infouser.displayName}`)
        .addField(`Join: `, infouser.joinedAt)
        .addField("Acccount creat: ")
        .addField(`Role: ${message.member.roles.size}`)//not complete
        .setTimestamp()
        .setFooter(`${message.author.username}`, avaauthor);
        message.channel.send(infoEmbed);

        
    }
    else
    {
        let avaauthor = message.author.displayAvatarURL;
        let info_Embed = new Discord.RichEmbed()
        .setDescription(`:diamond_shape_with_a_dot_inside: ${message.author.username} Profile`)
        .setColor("#000089")
        .setThumbnail(avaauthor)
        .addBlankField(`Name:`, `${message.author.username}`)
        .addField(`Join: `)
        .addField("Acccount creat: ")
        .addField(`Role: `)
        .setTimestamp();
        
        message.channel.send(info_Embed);
    
    }
    message.delete().catch(r=>{});
    
}

module.exports.help ={
    name:"user"
}
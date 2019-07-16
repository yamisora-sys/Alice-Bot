const Discord = require ('discord.js')


module.exports.run = async(bot, message, args)=>{
    let admin = message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"]);
    if(!admin) message.reply(`You dont have permisson!`);
    let kuser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!kuser) message.reply(`Not found user!`);
    let kreason = args.join(" ").slice(22);
    message.reply(`:exclamation: ${kuser.user.username} has been kick!`)

    let kembed = new Discord.RichEmbed()
    .addField(`You have been kick from ${message.guild.name}`, kreason)
    .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL);
    message.delete().catch(r=>{});
    try {
        kuser.send(kembed);
    } catch (e) {
        console.log(e.stack);
    }
    message.guild.member(kuser).kick(kreason);

}

module.exports.help = {
    name:"kick"
}
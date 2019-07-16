const Discord = require ('discord.js')

module.exports.run = async (bot, message, args)=> {
  let admin = message.member.hasPermission(["BAN_MEMBERS" || "ADMINISTRATOR"]);
  if(!admin) message.channel.send(`You dont have permission!`);
  let buser = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
  if(!buser) message.channel.send(`Not found user or Dont have reason!`);
  let breason = args.join(" ").slice(22);
  message.channel.send(`:no_entry: ${buser.user.username} has been ban!`)
  //let btime = new Date(message.createdTimestamp);
  let buserEmbed = new Discord.RichEmbed()
  .addField(`:no_entry_sign: You have been ban in ${message.guild.name}`,`${breason}`)
  .setTimestamp()
  .setFooter(`${message.author.username}`, message.author.displayAvatarURL);
  message.delete().catch(r=>{});
  try {
        await buser.send(buserEmbed);
  } catch (e) {
    console.log(e.stack)
  }
message.guild.ban(buser);
}

module.exports.help = {
    name:"ban"
}

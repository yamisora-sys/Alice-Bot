const Discord = require ("discord.js");

module.exports.run = async(bot,message,args) =>{
    /*let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "report");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);*/

    let rpuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rpuser) message.channel.send(`Not Found User!`);
    let reasonrp = args.join(" ").slice(22);
    if (!reasonrp)  message.channel.send("Please say the reason!");
    let avarpuser = rpuser.user.displayAvatarURL;
    let avauserrp = message.author.displayAvatarURL;
    let report = new Discord.RichEmbed()
    .setDescription(`:exclamation: Report User`)
    .setColor("#ff0000")
    .addField(`Name: `,`${rpuser}`)
    .addField(`Reason: `, reasonrp)
    .setTimestamp()
    .setFooter(`${message.author.username}`, avauserrp);
    message.delete().catch(O_o=>{});
    let reportschannel = message.guild.channels.find(`name`, "report");
    if(!reportschannel) return message.channel.send("Not Found The Report Channel! Please creat it!");
    reportschannel.send(report);
}


module.exports.help = {
    name: "report"
}
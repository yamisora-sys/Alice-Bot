const Discord = require('discord.js')



module.exports.run = async (bot,message,args)=>{

  let admin = message.author.id;
  if(!admin === (336496851798851585, 401005092330799124)) message.channel.send("You dont have permisson");
  let act = message.guild.member(message.guild.members.get(args[0]) || message.guild.members.get(args[1]));

  let activity = args.join(" ").slice(22);
  let typeact = args.join("-t ").slice(22);

  if(!act){
     bot.on("ready", async =>{
      bot.user.setActivity(`Maid of Magic Star!`,{type:`${typeact}`});
     });    
  }
  else{
      bot.on("ready",async =>{
        bot.user.setActivity(`${activity}`,{type:`${typeact}`});
      })
  }

  message.delete(r=>{});

}

module.exports.help ={
    name:"setact"
}

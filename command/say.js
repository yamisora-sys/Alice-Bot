const Discord = require ('discord.js')
const format_text = require('./json/format.json')

module.exports.run = async (bot, message, args) =>{
    
    let mesmem = message.guild.members.get(args);
    message.delete(r=>{});
    const b = format_text.bold;
    const i = format_text.italic;
    const bi = format_text.bold_italics;
    const u = format_text.underline;
    const ui = format_text.underline_italics;
    const ub =format_text.underline_bold;
    const ubi = format_text.underline_bold_italics;
    const s= format_text.strikethrough;
    const h = format_text.hide;
    const n = format_text.note;
    const c = format_text.code;
    let mesmem = message.guild.members.get(args);
    message.delete(r=>{});
    let  mess = args.join(" ").slice(22);
    let  format = args.join(`${mess} -f`).slice(22);
}

module.exports.help = {
    name:"say"
}
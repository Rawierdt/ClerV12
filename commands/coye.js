const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args)=>{
    var ids = ['165598561675771904']
    var author = `${message.author}`
        if(!ids.some(ids => message.author.id == ids)) return message.channel.send(author+' **:x: | Te atrapé!**');
        if (message.deletable) message.delete();
    let mentiondm = message.mentions.users.first();
    let mentionMessage = message.content.slice(6);
    mentiondm.send(mentionMessage);
}

module.exports.help = {
    name: "coye",
    description: "only staff",
    aliases: ["coye"]
}
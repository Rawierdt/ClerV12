let color = (process.env.COLOR)
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
        if (message.deletable) message.delete();
    const fea = new Discord.MessageEmbed()
        .setDescription('**HEROINE LETRA**\n\n*My eyes roll back to see and then fate\nI breathe you in\nExalt your flames\nLets lose our minds, come here to me\nWere wasting time\nDarling, can you hear me?\nHeroine, my sweetest sin\nI cant seem to get enough\nPull me under, wake me up\nFeel the rush\nMorphine lover make me numb\nMake it so I cant get up\n\nPaper-thin till you sink in\nCould you be my heroine?...\n[Canción con letra YT](https://www.youtube.com/watch?v=t9KbxPCg7bU)*')
        .setColor(color)
        .setImage('https://i.ytimg.com/vi/t9KbxPCg7bU/maxresdefault.jpg')
        .setFooter("● Comando Secreto 1/20 ● ")
    message.channel.send({ embed : fea }) // Se envia el embed
}

module.exports.help = {
    name: "liz",
    description: "liz song",
    aliases: ["liz"]
}
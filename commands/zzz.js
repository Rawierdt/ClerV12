let color = (process.env.COLOR)
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if (message.deletable) message.delete();
    const embed = new Discord.MessageEmbed()
        .setColor(color)
        .setImage('https://i.redd.it/t2o1od2xfdw71.jpg')
        .setFooter("● Comando Secreto 16/20 ● ")
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "zzz",
    description: "zzz meme",
    aliases: ["zzz"]
}
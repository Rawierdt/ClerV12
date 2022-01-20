const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
        if (message.deletable) message.delete();
    const embed = new Discord.MessageEmbed()
        .setDescription('https://playsnake.org')
        .setColor(color)
        .setFooter("● Comando Secreto 17/20 ● ");
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "snake",
    description: "snake embed",
    aliases: ["snake"]
}
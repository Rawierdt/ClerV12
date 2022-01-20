let color = (process.env.COLOR)
const star = require('star-labs');
const fetch = require('node-fetch');
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setDescription(
        "<" +
        "@" +
        message.author.id +
        ">" +
        "  comenzó a sonrojarse  " +
        " :blush:"
        )
        .setImage(await star.blush())
        .setColor("RANDOM");
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "blush",
    description: "blush anime",
    aliases: ["blush"]
}
const fetch = require('node-fetch');
const star = require('star-labs');
const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setDescription(
        "<" +
        "@" +
        message.author.id +
        ">" +
        "  comenzó a bailar  " +
        " :eyes:"
        )
        .setImage(await star.dance())
        .setColor("RANDOM");
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "dance",
    description: "dance anime gif",
    aliases: ["dance"]
}
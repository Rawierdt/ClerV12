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
        "  esta **feliz**  " +
        " :grin:"
        )
        .setImage(await star.happy())
        .setColor("RANDOM");
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "happy",
    description: "happy anime gif",
    aliases: ["happy"]
}
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
        "  tiene lag **mental**  " +
        " :thinking:"
        )
        .setImage(await star.confused())
        .setColor("RANDOM");
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "confused",
    description: "confused anime gif",
    aliases: ["confused"]
}
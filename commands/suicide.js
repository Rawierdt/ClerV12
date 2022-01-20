let color = (process.env.COLOR)
const fetch = require('node-fetch');
const star = require('star-labs');
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if (message.deletable) message.delete();
    const embed = new Discord.MessageEmbed()
        .setDescription(
        "<" +
        "@" +
        message.author.id +
        ">" +
        " bye, bye...  " +
        " :pleading_face:"
        )
        .setImage(await star.suicide())
        .setColor("RANDOM")
        .setFooter("● Comando Secreto 4/20 ● ");
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "suicide",
    description: "suicide gif",
    aliases: ["suicide"]
}
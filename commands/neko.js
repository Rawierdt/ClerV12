let color = (process.env.COLOR)
const fetch = require('node-fetch');
const akaneko = require("akaneko");
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if (message.deletable) message.delete();
    const embed = new Discord.MessageEmbed()
        .setDescription(
        "<" +
        "@" +
        message.author.id +
        ">" +
        "  owo  " +
        " :miau:"
        )
        .setImage(await akaneko.neko())
        .setFooter("● Comando Secreto 14/20 ● ")
        .setColor("RANDOM");
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "neko",
    description: "neko anime image",
    aliases: ["neko"]
}
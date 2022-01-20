let color = (process.env.COLOR)
const fetch = require('node-fetch');
const star = require('star-labs');
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    let pr = message.mentions.users.first();//utilizamos las menciones
    if (!pr) {
    message.reply("Debes mencionar a alguien OwO");
    }else {
    const embed = new Discord.MessageEmbed()
        .setDescription(
        "<" +
        "@" +
        message.author.id +
        ">" +
        " acaricia a " +
        "<" +
        "@" +
        pr.id +
        ">" +
        " :heart:"
        )
        .setImage(await star.pat())
    message.channel.send({ embed : embed }) // Se envia el embed
    }
}

module.exports.help = {
    name: "pat",
    description: "pat anime gif",
    aliases: ["pat"]
}
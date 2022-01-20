const star = require('star-labs');
const fetch = require('node-fetch');
const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
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
        "  ofendió a " +
        "<" +
        "@" +
        pr.id +
        ">" +
        " :frowning:"
        )
        .setImage(await star.fuckyou()) /*aqui seleccionamos que envie el gif de kiss (beso) de marsnpm */
    message.channel.send({ embed : embed }) // Se envia el embed
    }
}

module.exports.help = {
    name: "fuck",
    description: "fuck anime gif",
    aliases: ["fuck"]
}
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
        "  alientó a " +
        "<" +
        "@" +
        pr.id +
        ">" +
        " :apple:"
        )
        .setImage(await star.feed())
    message.channel.send({ embed : embed }) // Se envia el embed
}
}

module.exports.help = {
    name: "feed",
    description: "feed anime gif",
    aliases: ["feed"]
}
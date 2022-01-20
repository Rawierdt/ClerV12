let color = (process.env.COLOR)
const star = require('star-labs');
const fetch = require('node-fetch');
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    let pr = message.mentions.users.first(); // Utilizamos las menciones
    if (!pr) {
    message.reply("Debes mencionar a alguien OwO");
    }else {
    const embed = new Discord.MessageEmbed()
        .setDescription(
        "<" +
        "@" +
        message.author.id +
        ">" +
        "  lamió a " +
        "<" +
        "@" +
        pr.id +
        ">" +
        " :face_with_hand_over_mouth:"
        )
        .setImage(await star.lick()) /*Seleccionamos que envie el gif de lick de star-labs */
    message.channel.send({ embed : embed }) // Se envia el embed
}
}

module.exports.help = {
    name: "lick",
    description: "lick anime gif",
    aliases: ["lick"]
}
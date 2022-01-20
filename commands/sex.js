let color = (process.env.COLOR)
const star = require('star-labs');
const marsnpm = require("marsnpm");
const fetch = require('node-fetch');
const akaneko = require("akaneko");
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if(!message.channel.nsfw) { return message.channel.send(":x: | Este canal no es NSFW") }//si el canal no es NSFW retorna;
    let pr = message.mentions.users.first();
    if (!pr) {
        message.reply("Debes mencionar a alguien OwO");
    } else {
    // Embed en .setImage y cap que es la encarga de poner los gifs aleatorios
    const embed = new Discord.MessageEmbed()
        .setDescription(
            "<" +
            "@" +
            message.author.id +
            ">" +
            "  7u7 a " +
            "<" +
            "@" +
            pr.id +
            ">" +
            " 7w7"
            )
        .setColor("RANDOM")
        .setImage(await akaneko.nsfw.gifs()); //la funcion en cuestion
    message.channel.send({ embed : embed }) // Se envia el embed
    }
}

module.exports.help = {
    name: "sex",
    description: "sex anime gif",
    aliases: ["sex"]
}
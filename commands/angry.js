const fetch = require('node-fetch');
const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    let gifs = ["https://c.tenor.com/kaRCm9ELxKgAAAAC/menhera-chan-chibi.gif", // Introducimos el link del gif
"https://c.tenor.com/ikKAd57zDEwAAAAM/anime-mad.gif", 
"https://c.tenor.com/X3x3Y2mp2W8AAAAM/anime-angry.gif", 
"https://c.tenor.com/NDmpWRgns9cAAAAC/angry-dog-noises.gif",
"https://c.tenor.com/MFE4gVXHNJMAAAAC/angry-anime.gif",
"https://c.tenor.com/b76QnX1XVAcAAAAM/raiva-anime.gif",
"https://c.tenor.com/h5FyOBwghNgAAAAM/nagataro-ijiranaide-nagatoro.gif"
];
    let cap = gifs[Math.floor(gifs.length * Math.random())];
    const embed = new Discord.MessageEmbed()
        .setDescription(
        "<" +
        "@" +
        message.author.id +
        ">" +
        "  se enfurece  " +
        " :rage:"
        )
        .setImage(cap)
        .setColor("RANDOM");
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "angry",
    description: "angry anime gif",
    aliases: ["angry"]
}
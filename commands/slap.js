let color = (process.env.COLOR)
const fetch = require('node-fetch');
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    let gifs = ["https://i.gifer.com/9Ky7.gif", //Introducimos el link del gif
    "https://i.gifer.com/8Z0s.gif", 
    "https://i.gifer.com/K06.gif", 
    "https://i.gifer.com/DjuN.gif", 
    "https://i.gifer.com/WpWp.gif", 
    "https://i.gifer.com/Et1g.gif", 
    "https://i.gifer.com/cCX.gif", 
    "https://c.tenor.com/t4YJbUwHSgQAAAAM/boob-slap.gif", 
    "https://c.tenor.com/l8xQkGbIuJwAAAAM/anime-slap.gif"
    ];
    let cap = gifs[Math.floor(gifs.length * Math.random())];
    let pr = message.mentions.users.first();
    if (!pr) {
        message.reply("Debes mencionar a alguien OwO");
    } else {
    const embed = new Discord.MessageEmbed()
        .setDescription(
        "<" +
        "@" +
        message.author.id +
        ">" +
        "  abofeteó a " +
        "<" +
        "@" +
        pr.id +
        ">" +
        " :pleading_face:"
        )
        .setImage(cap)
        .setColor("RANDOM");
    message.channel.send({ embed : embed }) // Se envia el embed
    }
}

module.exports.help = {
    name: "slap",
    description: "slap anime gif",
    aliases: ["slap"]
}
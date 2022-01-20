const fetch = require('node-fetch');
const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    let gifs = ["https://i.gifer.com/2mla.gif", //Introducimos el link del gif
    "https://i.gifer.com/Iiuj.gif", 
    "https://i.gifer.com/3xZS.gif", 
    "https://i.gifer.com/4k7R.gif", 
    "https://i.gifer.com/WWEL.gif", 
    "https://i.gifer.com/v1t.gif", 
    "https://data.whicdn.com/images/340641399/original.gif", 
    "https://i.makeagif.com/media/1-13-2020/V3mjr0.gif", 
    "https://i.gifer.com/2IIq.gif", 
    "https://i.gifer.com/4Dhz.gif", 
    "https://i.gifer.com/R9e5.gif" 
    ];
    let cap = gifs[Math.floor(gifs.length * Math.random())];
    const embed = new Discord.MessageEmbed()
        .setDescription(
        "<" +
        "@" +
        message.author.id +
        ">" +
        "  comienzó a llorar  " +
        " :sob:"
        )
        .setImage(cap)
        .setColor("RANDOM");
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "cry",
    description: "cry anime gif",
    aliases: ["cry"]
}
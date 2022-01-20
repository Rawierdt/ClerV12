let color = (process.env.COLOR)
const fetch = require('node-fetch');
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    let gifs = ["https://i.gifer.com/9Ky7.gif", //Introducimos el link del gif
    "https://www.icegif.com/wp-content/uploads/anime-kiss-icegif-1.gif", 
    "https://i.imgur.com/vBc5SwC.gif", 
    "https://c.tenor.com/wqzTLrNoH3kAAAAC/kiss-anime.gif", 
    "https://c.tenor.com/CtpjMGItICQAAAAC/anime-kissing.gif", 
    "https://24.media.tumblr.com/6e5e83a7257e576a704933eff787bfa7/tumblr_mo9rp8x9Ah1stfw6do1_500.gif", 
    "https://acegif.com/wp-content/uploads/anime-kissin-5.gif", 
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-64.gif", 
    "https://cutewallpaper.org/21/anime-kiss-pic/Anime-kiss-Anime-MyNiceProfile.com.gif", 
    "https://i.pinimg.com/originals/f1/5c/77/f15c774e5c58a9f210c7f7647da796f1.gif", 
    "https://c.tenor.com/7wphmB3wc1EAAAAC/cruel-anime.gif", 
    "https://i.pinimg.com/originals/6a/46/8f/6a468f80cb1384d681440115d6e6d1b9.gif", 
    "http://pa1.narvii.com/6248/2d96dcde51edeb7c91f194c71e7a15dddc367e13_00.gif", 
    "https://pa1.narvii.com/6317/924cab8c7ddaff658998878be47b401c716e17a0_hq.gif", 
    "https://c.tenor.com/UyhucXktku0AAAAC/love-kiss.gif",
    "https://c.tenor.com/MtKkjQF4rz4AAAAC/kiss-anime.gif",  
    "https://i.pinimg.com/originals/13/06/73/1306732d3351afe642c9a7f6d46f548e.gif"
    ];
    let cap = gifs[Math.floor(gifs.length * Math.random())]; //Definimos Cap la cual se va a encargar de poner los gifs aleatoriamente utilizando Math
    //Ponemos para que al mencionar a alguien se ejecute el código  de gifs randoms
    let pr = message.mentions.users.first();
    if (!pr) {
        message.reply("Debes mencionar a alguien OwO");
    } else {
    //Hacemos el embed y agregamos .setImage y cap que es la encarga de poner los gifs aleatorios
    const embed = new Discord.MessageEmbed()
        .setDescription(
        "<" +
        "@" +
        message.author.id +
        ">" +
        " besó a " +
        "<" +
        "@" +
        pr.id +
        ">" +
        " :heart:"
        )
        .setImage(cap)
        .setColor("RANDOM");
    message.channel.send({ embed : embed })
    }
}

module.exports.help = {
    name: "kiss",
    description: "kiss anime gif",
    aliases: ["kiss"]
}
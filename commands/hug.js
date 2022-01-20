const fetch = require('node-fetch');
const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    let gifs = ["https://i.imgur.com/stbFTtp.gif", 
    "https://i.kym-cdn.com/photos/images/newsfeed/001/230/145/957.gif", 
    "https://i.imgur.com/TQZ7YJO.gif", 
    "https://i.imgur.com/8V0jYQO.gif", 
    "https://i.imgur.com/nrdYNtL.gif", 
    "https://i.imgur.com/6qYOUQF.gif", 
    "https://i.imgur.com/BKOxZb7.gif", 
    "https://i.imgur.com/ZTjKona.gif", 
    "https://i.imgur.com/eIEKQpx.gif",
    "https://c.tenor.com/G9yuomdknAsAAAAd/anime-couple.gif",
    "https://c.tenor.com/IC8bGfUwtL4AAAAM/elfenlied-kouta.gif", 
    "https://c.tenor.com/Ml4PdOdQGTMAAAAd/hug-angelbeats.gif",   
    "https://thumbs.gfycat.com/FrayedBriskGalapagostortoise-size_restricted.gif"];
    let cab = gifs[Math.floor(gifs.length * Math.random())]; //Definimos Cap la cual se va a encargar de poner los gifs aleatoriamente utilizando Math
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
            "  dio cálido abrazo a " +
            "<" +
            "@" +
            pr.id +
            ">" +
            " :smiling_face_with_3_hearts:"
            )
            .setImage(cab)
            .setColor("RANDOM");
        message.channel.send({ embed : embed }) // Se envia el embed
  //Para las versiones 11 solo se cambia el MessageEmbed() por RichEmbed()
        }
}

module.exports.help = {
    name: "hug",
    description: "hug anime gif",
    aliases: ["hug"]
}
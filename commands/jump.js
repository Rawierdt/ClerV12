let color = (process.env.COLOR)
const fetch = require('node-fetch');
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    let gifs = ["https://c.tenor.com/x1HJnh8484gAAAAC/anime-jump.gif", //Introducimos el link del gif
"https://c.tenor.com/V8gBHFz-5mgAAAAM/kanna-kamui-kanna-dance.gif", 
"https://i.gifer.com/SH34.gif", 
"https://i.gifer.com/SH37.gif"
];
    let cap = gifs[Math.floor(gifs.length * Math.random())];
    if (message.deletable) message.delete();
    const embed = new Discord.MessageEmbed()
        .setDescription(
        "<" +
        "@" +
        message.author.id +
        ">" +
        "  comenzó a saltar  " +
        " :bug:"
        )
        .setImage(cap)
        .setFooter("● Comando Secreto 6/20 ● ")
        .setColor("RANDOM");
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "jump",
    description: "jump anime gif",
    aliases: ["jump"]
}
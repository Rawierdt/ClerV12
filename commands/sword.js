let color = (process.env.COLOR)
const fetch = require('node-fetch');
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    let gifs = ["https://c.tenor.com/01khuWC_I78AAAAd/anime-sword.gif", //Introducimos el link del gif
"https://c.tenor.com/TXcnUjDgZOkAAAAd/baal-genshin.gif", 
"https://i.gifer.com/V6qE.gif", 
"https://i.gifer.com/Kggk.gif", 
"https://i.gifer.com/LqmH.gif"
];
    let cap = gifs[Math.floor(gifs.length * Math.random())];
    if (message.deletable) message.delete();
    const embed = new Discord.MessageEmbed()
        .setDescription(
        "<" +
        "@" +
        message.author.id +
        ">" +
        "  comenzó a blandir su espada  " +
        " :crossed_swords:"
        )
        .setImage(cap)
        .setFooter("● Comando Secreto 7/20 ● ")
        .setColor("RANDOM"); 
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "sword",
    description: "sword anime anime",
    aliases: ["sword"]
}
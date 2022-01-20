let color = (process.env.COLOR)
const fetch = require('node-fetch');
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    let gifs = ["https://c.tenor.com/viSO9tBe6SkAAAAC/bored-school.gif", //Introducimos el link del gif
"https://c.tenor.com/_iJmK8Aic14AAAAd/bored-anime.gif", 
"https://c.tenor.com/viXhLyvelpkAAAAM/tanaka-kun-sleepy.gif", 
"https://c.tenor.com/UPzGJqrb8NEAAAAM/work-tired.gif",
"https://c.tenor.com/KsASo3twwLUAAAAM/tired-loli.gif",
"https://c.tenor.com/xsPCCkmOdzMAAAAC/bored-anime.gif",
"https://c.tenor.com/aWk5RrGSa2AAAAAM/bored-misato.gif",
"https://c.tenor.com/GZ6DChVZgWsAAAAd/kon-bored.gif",
"https://c.tenor.com/FMAb_ivzA9AAAAAd/sad-bored.gif",
"https://c.tenor.com/HwTVxkb7a-4AAAAd/lazy-anime.gif"
];
    let cap = gifs[Math.floor(gifs.length * Math.random())];
    const embed = new Discord.MessageEmbed()
        .setDescription(
        "<" +
        "@" +
        message.author.id +
        ">" +
        "  se aburré  " +
        " :sleepy:"
        )
        .setImage(cap)
        .setColor("RANDOM");
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "bored",
    description: "bored anime gif",
    aliases: ["bored"]
}
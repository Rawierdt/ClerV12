let color = (process.env.COLOR)
const fetch = require('node-fetch');
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if (message.deletable) message.delete();
    let gifs = ["https://i.gifer.com/9aKM.gif", 
    "https://c.tenor.com/CvbQDS6vGicAAAAC/akame-ga-kill-tatsumi.gif",
    "https://i.pinimg.com/originals/16/00/4c/16004ce2f13e4f8f8d75f3284fa5da3c.gif"
    ];
    let cab = gifs[Math.floor(gifs.length * Math.random())];
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
            "  curó a " +
            "<" +
            "@" +
            pr.id +
            ">" +
            " :head_bandage:"
            )
            .setFooter("● Comando Secreto 10/20 ● ")
            .setImage(cab)
            .setColor("RANDOM");
            message.channel.send({ embed : embed })
        }
}

module.exports.help = {
    name: "revive",
    description: "revive anime gif",
    aliases: ["revive"]
}
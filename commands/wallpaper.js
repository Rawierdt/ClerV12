const star = require('star-labs');
const marsnpm = require("marsnpm");
const fetch = require('node-fetch');
const akaneko = require("akaneko");
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    const wallpc = await akaneko.wallpapers() // Se obtiene los wallpaper para pc 
    let wallpaper = await akaneko.mobileWallpapers() // Se obtiene los wallpaper para movil
    const movil = new Discord.MessageEmbed() // Embed para los wallpaper de movil
        .setImage(wallpaper) // los wallpaper para movil 
        .setColor("RANDOM")
        .setTimestamp()
        if (message.content.endsWith("-pc")) { 
            const pc = new Discord.MessageEmbed() // Embed para wallpaper para pc
            .setImage(wallpc) // los wallpaper para pc
            .setColor("RANDOM")
            .setTimestamp()
            return message.channel.send(pc) // Si el mensaje termina con -pc mandara el embed de wallpaper para pc
        }
    message.channel.send(movil)
}

module.exports.help = {
    name: "wallpaper",
    description: "wallpaper",
    aliases: ["wallpaper"]
}
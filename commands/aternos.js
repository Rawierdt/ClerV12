const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    const fea = new Discord.MessageEmbed()
    .setColor(color)
    .setImage('https://i.imgur.com/gCeufPn.png')
    message.channel.send({ embed : fea }) // Se envia el embed
}

module.exports.help = {
    name: "aternos",
    description: "aternos meme",
    aliases: ["aternos"]
}
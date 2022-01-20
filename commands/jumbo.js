let color = (process.env.COLOR)
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if (!args[0]) return message.channel.send(":x: | Ingresa un emoji")
    let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
    if (!emoji) return message.reply(':x: | ¿Emoji?, Recuerda que solo emojis del servidor')
    const embed = new Discord.MessageEmbed()
        .setImage(emoji.url)
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "ayuda",
    description: "fast help",
    aliases: ["ayuda"]
}
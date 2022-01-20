const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    let resp = [`░██████╗░█████╗░██╗░░░░░\n██╔════╝██╔══██╗██║░░░░░\n╚█████╗░██║░░██║██║░░░░░\n░╚══██╗██║░░██║██║░░░░░\n██████╔╝╚█████╔╝███████╗\n╚═════╝░░╚════╝░╚══════╝`,`░█████╗░░█████╗░██████╗░░█████╗░\n██╔══██╗██╔══██╗██╔══██╗██╔══██╗\n██║░░╚═╝███████║██████╔╝███████║\n██║░░██╗██╔══██║██╔══██╗██╔══██║\n╚█████╔╝██║░░██║██║░░██║██║░░██║\n░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝`]
    let msg = resp[Math.floor(Math.random() * resp.length)] 
    const embed = new Discord.MessageEmbed()
        .setTitle("El resultado es: ")
        .setDescription(msg)
        .setColor(color)
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "moneda",
    description: "coin flip",
    aliases: ["moneda"]
}
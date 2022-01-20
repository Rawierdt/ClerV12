const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
        if (message.deletable) message.delete();
    const embed = new Discord.MessageEmbed()
        .setDescription(':tv: Bienvenido a la TV \n https://neave.tv')
        .setColor(color)
        .setFooter("● Comando Secreto 15/20 ● ");
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "tv",
    description: "tv embed",
    aliases: ["tv"]
}
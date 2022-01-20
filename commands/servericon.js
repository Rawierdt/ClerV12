const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args)=>{
    let icono = message.guild.iconURL({size : 2048, dynamic: true})
    const embed = new Discord.MessageEmbed() // Se define el embed
        .setColor("RANDOM")
        .setImage(`${icono}`) // En el setImage ponemos el nombre del let
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "servericon",
    description: "icon server",
    aliases: ["servericon"]
}
let color = (process.env.COLOR)
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if (message.deletable) message.delete();
    if(!args[0]) return message.channel.send(":x: | Ingresa un link de imagen valida") // Tiene que ser un link .png, .jpg o .gif
    const embed = new Discord.MessageEmbed()
        .setImage(args.join(' '))
        .setColor (color);
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "isay",
    description: "image say",
    aliases: ["isay"]
}
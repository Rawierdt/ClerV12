let color = (process.env.COLOR)
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    let userm = message.mentions.users.first()
    const embed = new Discord.MessageEmbed()
        .setThumbnail(userm.avatarURL())
        .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL())
        .addField('Jugando a: ', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
        .addField('ID: ', userm.id, true)
        .addField('Estado: ', userm.presence.status, true)
        .addField('Cuenta Creada: ', userm.createdAt.toDateString(), true)
        .setColor(0x66b3ff)
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "user",
    description: "show the user info",
    aliases: ["user"]
}
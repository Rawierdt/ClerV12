let color = (process.env.COLOR)
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    var perms = message.member.hasPermission('MANNAGE_CHANNELS')
        if(!perms) return message.channel.send(":x: | `No dispones de permisos suficientes`") // Permisos y mensaje
        if(!message.guild.me.hasPermission("MANNAGE_CHANNELS")) return message.channel.send(":x: | `No dispongo de los permisos suficientes`") // Permiso y mensaje del bot
    const everyone = message.guild.roles.cache.find(
        peo => peo.name === '@everyone');
    message.channel.updateOverwrite(everyone, { SEND_MESSAGES: true})
    message.channel.send(":o: | `El canal fue desbloqueado correctamente`") //Mensaje
}

module.exports.help = {
    name: "unlock",
    description: "unlock the discord server channel",
    aliases: ["unlock"]
}
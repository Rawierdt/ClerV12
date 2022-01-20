let color = (process.env.COLOR)
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    var perms = message.member.hasPermission('MANNAGE_CHANNELS') // Permiso necesario para poder ejecutar el comando
        if(!perms) return message.channel.send(":x: | `No tienes suficientes permisos`") //Mensaje que enviará si es que no tiene los permisos necesarios
        if(!message.guild.me.hasPermission("MANNAGE_CHANNELS")) return message.channel.send(":x: | `No dispongo de los permisos suficientes`") // Mensaje que enviará el bot en caso de que no tenga permisos
    const everyone = message.guild.roles.cache.find(
        peo => peo.name === '@everyone'); // Rol que será bloqueado de enviar mensajes  
    message.channel.updateOverwrite(everyone, { SEND_MESSAGES: false})
    message.channel.send(":o: | `El canal fue bloqueado correctamente`")
}

module.exports.help = {
    name: "lock",
    description: "lock the discord server channel",
    aliases: ["lock"]
}
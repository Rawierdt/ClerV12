const Discord = require("discord.js") // Se define Discord para el embed.
const os = require('os');
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()//definimos embed
        .setAuthor("Cler", client.user.avatarURL())
        .setFooter("Botinfo · Cler", client.user.avatarURL())
        .setThumbnail(client.user.avatarURL())//hacemos un setAuhtor para que salga el nombre de tu bot y su foto de perfil
        .addField(":floppy_disk: Developer", dev)//un field para el Developer pones tu nombre
        .addField(":shinto_shrine: Servers", ` ${client.guilds.cache.size}`)//hacemos un field para la cantidad de servers donde esta tu bot
        .addField(":maple_leaf: Usuarios", ` ${client.users.cache.size}`)//field para ver la cantidad de usuarios que pueden ver a tu bot
        .addField(`:desktop: Sistema Operativo`, `${os.platform()}`, true)
        .addField(`:gear: Arquitectura`, `${os.arch()}`, true)
        .addField(`:rocket:  Procesador`, `${os.cpus().map(i => `${i.model}`)[0]}`, true)
        .addField(":pager: Ram", ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)//aqui va la ram osea la memoria que usa tu bot
        .addField(":fish_cake: Lenguaje", " JavaScript")//el lenguaje que en este caso es JavaScript
        .addField(":dividers: Libreria", " Discord.js v12.2.0")//la libreria que es Discord.js v12
        .addField(`:alarm_clock: Uptime`, "" + (Math.round(client.uptime / (1000 * 60 * 60))) + " Hora(s), " + (Math.round(client.uptime / (1000 * 60)) % 60) + " minuto(s) " + (Math.round(client.uptime / 1000) % 60) + " segundo(s)" + "")
        .setColor(color);
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "botinfo",
    description: "show the bot info",
    aliases: ["botinfo"]
}
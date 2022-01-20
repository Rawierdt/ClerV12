let color = (process.env.COLOR)
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Ayuda')
        .setDescription('Si los mensajes de miembro a miembro estan bloqueados en el servidor o usted mismo los tiene cerrados y me quiere invitar a su servidor o ver mis comandos puedes hacerlo con este [**Link**](https://bit.ly/3ncl9bw)')
        .setColor(color)
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "ayuda",
    description: "fast help",
    aliases: ["ayuda"]
}
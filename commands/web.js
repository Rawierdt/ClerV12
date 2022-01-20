const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Pagina Web de Soporte y Comandos")
    .setDescription('⭕ Da Click [aquí](https://lwnadev.gitbook.io/cler/) para dirigirte a la web)')
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "web",
    description: "web js",
    aliases: ["web"]
}
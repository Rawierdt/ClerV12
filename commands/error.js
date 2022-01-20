const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args)=>{
    const embed = new Discord.MessageEmbed()
        .setTitle('Help || Ayuda')
        .setDescription(':flag_us: | c!help | If you need help with the commands, report any issue, bug or problem? Visit the following [link](https://lwnadev.gitbook.io/cler/info/faq) or contact the [developer](https://twitter.com/LwnaDev)\n:flag_es: | c!help | ¿Si necesitas ayuda con los comandos o reportar algun bug o problema? Visita el siguiente [enlace](https://lwnadev.gitbook.io/cler/info/faq) o contacta al [desarollador](https://twitter.com/LwnaDev)\n\n **ERRORES MAS COMUNES/MOST CONMON ERRORS** \n\n 3c420URN = Unknown command/Comando desconocido')
        .setColor(color)
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "error",
    description: "error help",
    aliases: ["error"]
}
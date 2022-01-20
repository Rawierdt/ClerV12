const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args)=>{
    const embed = new Discord.MessageEmbed()
        .setTitle('Lista de Comandos')
        .setDescription('Para ver mi lista de comandos usa `c!help` o en su defecto dirigete al siguiente [enlace](https://bit.ly/31LFpJO) en el apartado cler commands donde conoceras cada uno a detalle')
        .setColor(color)
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "comandos",
    description: "url commands",
    aliases: ["comandos"]
}
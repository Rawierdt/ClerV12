const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    message.channel.send(':white_check_mark:| Te he enviado la información a tus mensajes privados..');
    message.author.send('Este es el enlace de invitación al Servidor de Soporte de **Cler** y de otros bots. Ahí podrás resolver dudas acerca del bot, comandos secretos y mas. También cuenta con un apartado social para entablar amistades y pasar un buen rato, no es un servidor de soporte solamente, te espero uwu.\n```rss\n'+
                        '❀ Enlace:```\n'+
                        'https://discord.com/Uck5Pq7MKY');
}

module.exports.help = {
    name: "support",
    description: "suppport link",
    aliases: ["support"]
}
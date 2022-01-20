const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
    const caracteresPorMensaje = 2000; //Establecemos un límite de carácteres por mensajes
    const emojis = message.guild.emojis.cache
        .map((e) => `${e} **-** \`:${e.name}:\``)
        .join(', '); //Definimos "emojis" para que devuelva todos los emojis del servidor y añadimos un separador
    const numerosDeMensajes = Math.ceil(emojis.length / caracteresPorMensaje); //Definimos "numerosDeMensajes" y dividimos la cantidad de emojis por carácteres por mensajes, en este caso 2000 
    const embed = new MessageEmbed().setTitle(`Lista de emojis`); //Título del embed
        for (i = 0; i < numerosDeMensajes; i++) { //Creamos un blucle con for
    message.channel.send({ embed : embed.setDescription(emojis.slice(i * caracteresPorMensaje, (i + 1) * caracteresPorMensaje))}); // Se envia el embed
        }
}

module.exports.help = {
    name: "emojis",
    description: "emoji list",
    aliases: ["emojis"]
}
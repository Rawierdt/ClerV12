let color = (process.env.COLOR)
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if (message.deletable) message.delete();
    let mensaje = args.join(" ");
    if(!mensaje) return message.channel.send(`Escriba un mensaje para enviarlo por mensajes privados **nwn**.`);
    message.author.send(mensaje);
}

module.exports.help = {
    name: "md",
    description: "direct message",
    aliases: ["md"]
}
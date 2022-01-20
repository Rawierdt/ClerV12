let color = (process.env.COLOR)
const star = require('star-labs');
const marsnpm = require("marsnpm");
const fetch = require('node-fetch');
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    let userm = message.mentions.users.first() || message.author; 
    let avatar = userm.displayAvatarURL({dynamic: false, format: 'png', size: 2048})
    let imagen = await marsnpm.rip(avatar); // Imagen donde utilizamos marsnpm para manipular el perfil del usuario
    let pixel = new Discord.MessageAttachment(imagen, "pixel.png") // MessageAttachment
    message.channel.send(pixel);
}

module.exports.help = {
    name: "rip",
    description: "rip image",
    aliases: ["rip"]
}
let color = (process.env.COLOR)
const star = require('star-labs');
const marsnpm = require("marsnpm");
const fetch = require('node-fetch');
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    let userm = message.mentions.users.first() || message.author;
    let avatar = userm.displayAvatarURL({dynamic: false, format: 'png', size: 2048})
    let imagen = await marsnpm.basura(avatar);
    let pixel = new Discord.MessageAttachment(imagen, "pixel.png")
    message.channel.send(pixel);
}

module.exports.help = {
    name: "basura",
    description: "trash image",
    aliases: ["basura"]
}
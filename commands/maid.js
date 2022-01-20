let color = (process.env.COLOR)
const star = require('star-labs');
const marsnpm = require("marsnpm");
const fetch = require('node-fetch');
const akaneko = require("akaneko");
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if(!message.channel.nsfw) { return message.channel.send("Este canal no es NSFW") } //Si el canal no es NSFW retorna
    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setImage(await akaneko.nsfw.maid()); //la funcion
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "maid",
    description: "maid image",
    aliases: ["maid"]
}
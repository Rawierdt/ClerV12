let color = (process.env.COLOR)
const star = require('star-labs');
const marsnpm = require("marsnpm");
const fetch = require('node-fetch');
const akaneko = require("akaneko");
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if(!message.channel.nsfw) { return message.channel.send(":x: | Este canal no es NSFW")}
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(await akaneko.nsfw.netorare()); // la funcion
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "netorare",
    description: "netorare command",
    aliases: ["netorare"]
}
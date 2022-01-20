//NSFW Commands
const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    if(!message.channel.nsfw) { return message.channel.send("Este canal no es NSFW") }
    const embed = new Discord.MessageEmbed()
        .setTitle("**COMANDOS NSFW**")
        .setDescription("Usando el prefix `c!`\n`sex <@miembro>` `cum <@miembro>` `hentai` `uniform` `netorare` `maid`")
        .setColor(color)
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "hnsfw",
    description: "help for nsfw commands",
    aliases: ["hnsfw"]
}
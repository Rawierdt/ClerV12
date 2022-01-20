const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
        if (message.deletable) message.delete();
    const fea = new Discord.MessageEmbed()
        .setImage('https://cdn.discordapp.com/attachments/692933942088826913/930321996997328946/sddefault.png')
        .setImage(color)
        .setFooter("● Comando Secreto 8/20 ● ");
    message.channel.send({ embed : fea }) // Se envia el embed
}

module.exports.help = {
    name: "hampter",
    description: "hampter",
    aliases: ["hampter"]
}
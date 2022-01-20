const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
        if (message.deletable) message.delete();
    const guapa = new Discord.MessageEmbed()
        .setDescription('Gracias!!! :heart_eyes:')
        .setColor(color)
        .setImage('https://i.gifer.com/4zDj.gif')
        .setFooter("● Comando Secreto 5/20 ● ");
    message.channel.send({ embed : guapa }) // Se envia el embed
}

module.exports.help = {
    name: "guapa",
    description: "guapa message embed",
    aliases: ["guapa"]
}
const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
        if (message.deletable) message.delete();
    const fea = new Discord.MessageEmbed()
        .setDescription('Si, Lo sé :sob:')
        .setColor(color)
        .setImage('https://bit.ly/3pak57t')
        .setFooter("● Comando Secreto 2/20 ● ");
    message.channel.send({ embed : fea }) // Se envia el embed
}

module.exports.help = {
    name: "fea",
    description: "fea message embed",
    aliases: ["fea"]
}
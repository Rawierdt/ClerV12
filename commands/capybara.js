const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
        if (message.deletable) message.delete();
    const embed = new Discord.MessageEmbed()
        .setImage('https://i.redd.it/coz72i73uf881.jpg')
        .setColor(color)
        .setFooter("● Comando Secreto 13/20 ● ");
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "capybara",
    description: "capybara embed",
    aliases: ["capybara"]
}
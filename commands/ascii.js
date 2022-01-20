let color = (process.env.COLOR)
const figlet = require('figlet');
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if (!args[0]) return msg.reply(":x: | Ingresa un texto")
    if (args.join(" ") > 15) msg.reply(":x: | El texto no puede contener más de 15 caracteres")
    figlet(args.join(" "), (err, data) => 
    message.channel.send("```" + data + "```"))
}

module.exports.help = {
    name: "ascii",
    description: "ascii the text input",
    aliases: ["ascii"]
}
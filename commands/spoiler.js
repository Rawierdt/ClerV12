const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if(!args[0]) return message.channel.send(":x: | Escribe un mensaje")
    let decir = args.slice(0).join(" ")
    message.channel.send("||" + decir + "||")
}

module.exports.help = {
    name: "spoiler",
    description: "text to spoiler",
    aliases: ["spoiler"]
}
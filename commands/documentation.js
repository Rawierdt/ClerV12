const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    const embedDatos = new Discord.MessageEmbed() 
        .setTitle("**✿ Doc Cler ✿**")
        .setColor(0xC6EB0E)
        .setDescription("Aqui esta la documentación acerca de Cler.")
        .setThumbnail(client.user.avatarURL())
        .setFooter("Holaa")
        .addField("https://bit.ly/3Jze6DI")
    message.channel.send({ embed : embedDatos }) // Se envia el embed
}

module.exports.help = {
    name: "documentation",
    description: "documentation cler",
    aliases: ["documentation"]
}
const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
        if (message.deletable) message.delete();
    const embedDatos = new Discord.MessageEmbed() 
        .setTitle("**❄ Te presto mi tarjeta de credito ❄**")
        .setColor(color)
        .setDescription("**No gastes mucho**...\n\n*Los numeros de atras son el resultado de* \nLim x→5(100x^2-15x-25/x^2-10)")
        .setImage("https://i.ibb.co/tbZvvxL/student-irr-front.jpg")
        .setThumbnail(client.user.avatarURL())
        .setFooter("● Comando Secreto 18/20 ●")
    message.channel.send({ embed : embedDatos }) // Se envia el embed
}

module.exports.help = {
    name: "tarjeta",
    description: "clers credit card",
    aliases: ["tarjeta"]
}
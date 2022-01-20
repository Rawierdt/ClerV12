const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
        if (message.deletable) message.delete();
    const fea = new Discord.MessageEmbed()
        .setDescription('**PUNTO Y APARTE LETRA**\n\n*Para dejar de arrepentirme por decirte que no\nNo estoy seguro si me alcanza una vida\nSi fue por mí que tú lloraste ese adiós, yo también cargo esa herida\nPor más de un año yo contuve la respiración\nPor trece meses pensé lo que diría\nY hoy que te vi ya no me sale la voz ni el aire que antes tenía\nSé que soy culpable del tiempo perdido\nY que mi promesa se fue con una canción\nAl montarme en ese avión y hoy\n\nVuelvo a encontrarte y haré de todo para no soltarte\nPorque yo nunca me canse de amarte\nY quedan cartas que no he puesto en juego\nPunto y aparte, tú sabes bien que yo no juro en vano...\n[Canción con letra YT](https://www.youtube.com/watch?v=Rs_UDvYhsws)*')
        .setColor(color)
        .setImage('https://i.ytimg.com/vi/Rs_UDvYhsws/maxresdefault.jpg')
        .setFooter("● Comando Secreto 20/20 ● ")
    message.channel.send({ embed : fea }) // Se envia el embed
}

module.exports.help = {
    name: "angie",
    description: "angie song",
    aliases: ["angie"]
}
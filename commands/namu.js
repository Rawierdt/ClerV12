const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    const fea = new Discord.MessageEmbed()
        .setDescription('**ROSAS LETRA**\n\n*En un día de estos en que suelo pensar\nHoy va a ser el día menos pensado\nNos hemos cruzado, has decidido mirar\nA los ojitos azules que ahora van a tu lado\nDesde el momento en el que te conocí\nResumiendo con prisas tiempo de silencio\nTe juro que a nadie le he vuelto a decir\nQue tenemos el récord del mundo en querernos\n\nPor eso esperaba con la carita empapada\na que llegaras con rosas, con mil rosas para mí\nPorque ya sabes que me encantan esas cosas\nQue no importa si es muy tonto, soy así\nY aún me parece mentira que se escape mi vida\nImaginando que vuelves a pasarte por aquí\nDonde los viernes cada tarde, como siempre\nLa esperanza dice quieta, hoy quizás sí...\n[Canción con letra YT](https://www.youtube.com/watch?v=GFESHDudfBE)*')
        .setColor(color)
        .setImage('https://i.ytimg.com/vi/GFESHDudfBE/mqdefault.jpg')
    message.channel.send({ embed : fea }) // Se envia el embed
}

module.exports.help = {
    name: "namu",
    description: "namu song",
    aliases: ["namu"]
}
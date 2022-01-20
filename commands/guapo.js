const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    let user = message.author; // Guardamos el author
    let numero = Math.floor(Math.random() * (1 , 100)) // sacamos un numero aleatoria del 1 al 100
        if(numero <= 40){ // Si el numero que dale es mejor o igual a 40 envia este mensaje
            const embed = new Discord.MessageEmbed() // creamos un embed
            .setTitle("Hoy estas fe@ :face_vomiting:",+ user.avatarURL({dynamic: true})) //el titulo 
            .setThumbnail(user.displayAvatarURL())
            .setDescription(`**Solo eres ${numero}% guap@**`)
            .setColor("RED"); 
        message.channel.send(embed) // Se envia el embed
    return
    }
    if(numero >= 50){ // Si es mejor o igual a 50 pasa lo de abajo
        const embed3 = new Discord.MessageEmbed() // Se crea el embed
            .setTitle("Estas guapisim@ :heart_eyes:",+ user.avatarURL({dynamic: true})) // el titulo
            .setThumbnail(user.displayAvatarURL())
            .setDescription(`**Eres ${numero}% guap@**`)
            .setColor("PINK"); // El color de embed
        message.channel.send(embed3) // Se envia en embed
    return
    }  
}

module.exports.help = {
    name: "guapo",
    description: "shows how handsome are you",
    aliases: ["guapo"]
}
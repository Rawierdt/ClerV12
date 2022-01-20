const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
            if (message.deletable) message.delete();
    let mensaje = args.join('%20'); // Esto hara que cada espacio de la oracion se cambie a %20
    let api = `https://ctk-api.herokuapp.com/clyde/${mensaje}`
    const embed = new Discord.MessageEmbed() 
        .setImage(api)
        .setColor('RANDOM')
        .setFooter("● Comando Secreto 3/20 ● ")
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "clyde",
    description: "send a clyde text image",
    aliases: ["clyde"]
}
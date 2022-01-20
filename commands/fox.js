const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    fetch(`https://randomfox.ca/floof/`) // Enlace donde sacaremos las imagenes
        .then(res => res.json()) // Establecemos JSON
        .then(json => message.channel.send(json.image)) // Se envia la imagen
        .catch(err => {}) // Por si hay error
}

module.exports.help = {
    name: "fox",
    description: "fox image",
    aliases: ["fox"]
}
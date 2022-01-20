const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    let usuario = message.mentions.users.first()
    let autor = message.author 
    let decimal = Math.random() * 20 + 1; // Obtenemos un número random del 1 al 20
    let numero = Math.floor(decimal); // Quitamos los decimales al número anterior
        if(!usuario){ // Si no hay mención
        const embed = new Discord.MessageEmbed()
            .setTitle(`La :eggplant: de ${autor.username} mide ${numero} centímetros :scream:`)
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            .setColor('RANDOM')
        message.channel.send({ embed : embed }) // Se envia el embed
        }else{
        if(usuario == client.user) return message.channel.send('> Si lo supieras :face_with_hand_over_mouth:')
        if(usuario.bot) return message.channel.send(':x: | No puedes realizar esta acción!')
        const embed = new Discord.MessageEmbed()
            .setTitle(`La :eggplant: de ${usuario.username} mide ${numero} :scream:`)
            .setFooter(usuario.tag, usuario.displayAvatarURL())
            .setColor('RANDOM')
        message.channel.send({ embed : embed }) // Se envia el embed 
        }
}

module.exports.help = {
    name: "memide",
    description: "show how big is your...",
    aliases: ["memide"]
}
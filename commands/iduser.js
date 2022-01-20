const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    let id = args.join(" ") //definimos args.join() con id
    if (!id) return message.channel.send(":x: | Necesitas colocar la id")//si no ah puesto la ID retorna 
    let member = await client.users.fetch(id) 
    const embed = new Discord.MessageEmbed()
        .setImage(`${member.displayAvatarURL({dynamic: true, size : 1024 })}`)
        .setColor("RANDOM")
        .setThumbnail(member.avatarURL())
        .setAuthor(member.username+'#'+member.discriminator, member.avatarURL())
        .addField('Jugando a: ', member.presence.game != null ? member.presence.game.name : "Nada", true)
        .addField('ID: ', member.id, true)
        .addField('Estado: ', member.presence.status, true)
        .addField('Cuenta Creada: ', member.createdAt.toDateString(), true)
        .setColor(0x66b3ff)
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "iduser",
    description: "show the user id info",
    aliases: ["iduser"]
}
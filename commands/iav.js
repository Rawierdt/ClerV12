const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    let id = args.join(" ") // definimos args.join() con id
    if (!id) return message.channel.send("Necesitas colocar la ID valida.") // si no ah puesto la ID retorna 
    let member = await client.users.fetch(id) 
    const embed = new Discord.MessageEmbed()
        .setImage(`${member.displayAvatarURL({dynamic: true, size : 1024 })}`)
        .setColor("RANDOM")
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "iav",
    description: "id avatar",
    aliases: ["iav"]
}
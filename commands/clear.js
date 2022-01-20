const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    let permiso = message.member.hasPermission("MANAGE_MESSAGES");
    if(!permiso){
        message.channel.send(':x: | No dispones de permisos suficientes');
    } else{
    const amount = args.join(" ");
    if(!amount) return message.reply(':x: | Defina la cantidad de mensajes a borrar')
    if(amount > 100) return message.reply(`:x: | No puede borrar más de 100 mensajes a la vez`)
    if(amount < 1) return message.reply(`:x: | Necesitas borrar al menos un mensaje`)
    await message.channel.messages.fetch({limit: amount}).then(messages => {
        message.channel.bulkDelete(messages
    )});
    message.channel.send(':o: | Completado!')
    }
}

module.exports.help = {
    name: "clear",
    description: "clear a message",
    aliases: ["clear"]
}
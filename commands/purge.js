const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args)=>{
    let member;
    // Se escribe el nombre de usuario, ID o mencionar usuario
    if(args[0]) member = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(p => p.user.username.startsWith(args[0]))//aquí obtenemos el usuario   
    let cantidad = member && !isNaN(args[1]) ? args[1] : !isNaN(args[0]) ? args[0] : 50
    const messages = await message.channel.messages.fetch({limit: 200}) // Obtenemos los últimos 200 mensajes enviados al canal
    let filtro = member ? m => m.author.id == member.id && !m.pinned && !m.system : m => !m.pinned && !m.system
    let msg = messages.filter(filtro) // Filtro messages que es la variable donde están todos los mensajes
    if((msg).array().length < 1)return message.channel.send('No hay mensajes para eliminar')
    message.channel.bulkDelete((msg).array().slice(0,cantidad), true).then(m => {
    message.channel.send(`? se borraron ${msg.array().slice(0, cantidad).length}`)})
}

module.exports.help = {
    name: "purge",
    description: "purge the message",
    aliases: ["purge"]
}
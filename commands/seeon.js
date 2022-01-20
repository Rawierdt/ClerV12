const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    let usuario = client.users.cache.get(args[0]) || message.mentions.users.first() || message.author; // Definimos el usuario a buscar.
    let filtro = client.guilds.cache.filter(g => g.members.cache.has(usuario.id));
    let servers = filtro.map(g => '`'+g.name+'`').join(', ') 
    let tamaño = filtro.size  // Verificamos el número de servidores filtrados.
        if (filtro <= 1) return message.channel.send('`?>` Sin resultados.');
    const embed = new MessageEmbed()
        .setTitle('Servidores en común con '+usuario.tag)
        .setDescription(servers)
        .setColor("RANDOM")
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "seeon",
    description: "search an user in another discord servers",
    aliases: ["seeon"]
}
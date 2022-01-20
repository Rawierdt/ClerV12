const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    if (message.deletable) message.delete();
    const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter(message.guild.name, message.guild.iconURL())
    if (!args[0]) {
        embed.setDescription(':x: | No has mencionado a un usuario.') // Al no ejecutar la acciÃÂ³n salta ÃÂ©ste mensaje.
        embed.setColor('RED')
        return message.channel.send(embed).then(m => m.delete({ timeout: 3000 }))}
    //Creamos la variable para poder obtener y buscar miembros.
    let member = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0]) || await client.users.fetch(args[0])
    if (!member || member.id == message.author.id) {
        embed.setDescription(':x: | No has mencionado a un usuario.') // Al no ejecutar la acciÃÂ³n salta ÃÂ©ste mensaje.
        embed.setColor('RED')
        return message.channel.send(embed)}
    if (!message.member.permissions.has('BAN_MEMBERS')) {
        embed.setDescription(':x: | No tienes los permisos suficientes.') // Al no ejecutar la acciÃÂ³n salta ÃÂ©ste mensaje.
        embed.setColor('RED')
        return message.channel.send(embed)}
    if (message.guild.members.resolve(member.id)) { // retorna un miembro o undefined si no fue encontrado en el servidor
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
            embed.setDescription(':x: | No puedes banear a un usuario con mayor o igual nivel que tu.') // Al no ejecutar la acciÃÂ³n salta ÃÂ©ste mensaje.
            embed.setColor('RED')
            return message.channel.send(embed)}
        if (!member.bannable) {
            embed.setDescription(':x: | No puedo banear a este usuario') // Al no ejecutar la acciÃÂ³n salta ÃÂ©ste mensaje.
            embed.setColor('RED')
            return message.channel.send(embed)}}
    let razon = args.slice(1).join(" ") ? args.slice(1).join(" ") : "Razon sin especificar" //Al no llenar el campo de razÃÂ³n salta "RazÃÂ³n no especificada"
    message.guild.members.ban(member.id, { reason: razon })
    embed
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setThumbnail(!!member.user ? member.user.displayAvatarURL() : member.displayAvatarURL())
        .setTitle(':o: | ¡Baneo exitoso!')
        .addField(`> Usuario Baneado`, !!member.user ? member.user.tag : member.tag)
        .addField('> Razon:', razon)
        .setFooter("Ban · Cler", client.user.avatarURL())
        .setColor('AQUA')
        .setTimestamp()
    if (!!member.user) member.user.send(embed).catch(e => e);
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "ban",
    description: "ban a member",
    aliases: ["ban"]
}
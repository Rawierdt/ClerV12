const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) { //Si el usuario tiene permisos para banear
    return message.channel.send(`**${message.author.username}**, :x: | No dispones de permisos suficientes`)}
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) { //Si el bot tiene permisos de banear
        return message.channel.send(`**${message.author.username}**, :x: | No tengo los permisos suficientes`)}
    let userID = args[0] //ID del usuario
    message.guild.fetchBans().then(bans=> { //Hacemos fetch a los Bans
        if(bans.size == 0) return message.channel.send(":x: | No existen baneos")  //Si no hay bans retorna
            let bUser = bans.find(b => b.user.id == userID)
            if(!bUser) return message.channel.send(":x: | No existe el usuario") //Si no existe el usuario retorna
        message.guild.members.unban(bUser.user) //Desbaneamos
    });
}

module.exports.help = {
    name: "unban",
    description: "unban a member",
    aliases: ["unban"]
}
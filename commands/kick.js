const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if (message.deletable) message.delete();
    let kicked = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
    if (!kicked) return message.channel.send(":x: | Especifica un usuario");
    if (!reason) return;
    if (message.author === kicked)
    return message.channel.send(":x: | No es posible expulsarte a ti mismo");
    if (!message.member.permissions.has("KICK_MEMBERS"))
    return message.channel.send(":x: | No tienes permisos para ejecutar este comando");
    if (!message.guild.me.permissions.has("KICK_MEMBERS"))
    return message.channel.send(":x: | No tengo permisos suficientes.");
    message.guild.member(kicked).kick(reason);
    message.channel.send(`:o: | ${kicked.tag} Ha sido expulsado correctamente`);
}

module.exports.help = {
    name: "kick",
    description: "kick an user",
    aliases: ["kick"]
}
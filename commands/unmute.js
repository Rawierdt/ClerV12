let color = (process.env.COLOR)
const fetch = require('node-fetch');
const figlet = require('figlet');
const db = require("megadb")
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if (message.deletable) message.delete();
    let db_muterole = new db.crearDB("canal_rolemute"); 
    let permiso = message.member.hasPermission("KICK_MEMBERS");
    let mencionado = message.mentions.members.first();
    let razon = args.slice(1).join(" ") || "Sin definir"
    if(!permiso) return message.reply(":x: | No tienes los permisos necesarios.");
    if(!mencionado) {
    const NoMuteado = new Discord.MessageEmbed()
        .setDescription(":x: | No has mencionado a un usuario a desmutear")
        .setColor("RED");
    message.channel.send(NoMuteado)
    return NoMuteado
    }
    if(!db_muterole.tiene(message.guild.id)) return message.channel.send("En este servidor no esta el rol mute Establecido, Uso: `setmute [@rol]`")
    let rol = await
    db_muterole.obtener(message.guild.id)
    mencionado.roles.remove(rol)
    const embedmute = new Discord.MessageEmbed()
        .setTitle(`:o: Modlogs | UnMute`)
        .setColor("RANDOM")
        .setTimestamp ()
        .addField(`Moderador:`, `${message.author.username}`)
        .addField(`Miembro:`, `${mencionado}`)
        .addField(`Razón:`, `${razon}`)
    message.channel.send(embedmute);
}

module.exports.help = {
    name: "unmute",
    description: "unmute an user",
    aliases: ["unmute"]
}
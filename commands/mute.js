let color = (process.env.COLOR)
const fetch = require('node-fetch');
const figlet = require('figlet');
const db = require("megadb") // Se define megadb
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if (message.deletable) message.delete();
    let db_muterole = new db.crearDB("canal_rolemute"); //Obtenemos la db.    
    let permiso = message.member.hasPermission("KICK_MEMBERS");
    let mencionado = message.mentions.members.first();
    let razon = args.slice(1).join(" ") || "Sin definir"
    if(!permiso) return message.reply(":x: | No dispones de los permisos necesarios.");
    if(!mencionado) {
        const NoMuteado = new Discord.MessageEmbed()
            .setDescription(":x: | No has mencionado a un usuario a mutear\nRecuerda definir el rol de mute con: `setmute [@rol]`")
            .setColor("RED");
        message.channel.send(NoMuteado)
        return NoMuteado
    }
    if(mencionado.roles.highest.comparePositionTo(message.member.roles.highest) >= 0){ /*Si la persona que intenta mutear tiene un rol más alto, o el mismo*/
        const MayorRol = new Discord.MessageEmbed()
            .setDescription(":x: | Esta persona posee el mismo, o más poder que tú")
            .setColor("RED")
        message.channel.send(MayorRol)
        return MayorRol /*Retornamos acá*/
    }
    if(!db_muterole.tiene(message.guild.id)) return message.channel.send("En este servidor no esta el rol mute Establecido, Uso: `setmute [@rol]`")
    let rol = await
    db_muterole.obtener(message.guild.id) // Definimos el rol    
    if(mencionado.roles.cache.has(rol)) return message.channel.send(":o: | Este miembro ya esta silenciado")    
    mencionado.roles.add(rol)
    const embedmute = new Discord.MessageEmbed() //creamos un Embed.
        .setTitle(`:o: Modlogs | Mute`)
        .setColor(0x0EEB2C)
        .setTimestamp ()
        .addField(`Moderador:`, `${message.author.username}`)
        .addField(`Miembro:`, `${mencionado}`)
        .addField(`Razón:`, `${razon}`)
    message.channel.send(embedmute); //enviamos 
}

module.exports.help = {
    name: "mute",
    description: "mute an user",
    aliases: ["mute"]
}
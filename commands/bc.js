const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    let permiso = message.member.hasPermission("ADMINISTRATOR");
        if(!permiso){
            message.channel.send(':x: | No tienes el permiso de Administrador');
        } else{
        // Ponemos el permiso de administrador
            let canal = message.mentions.channels.first();
        // Recogemos el primer canal mencionado
            if(!canal) return message.channel.send(':x: | Debe escribir un canal');
        // Si no ha mencionado ningún canal retorna un mensaje
            let mensaje = args.slice(1).join(" ");
        // Recogemos el mensaje a mandar a partir de args[1]
            if(!mensaje) return message.channel.send(':x: | Debe escribir un mensaje');
        // Si no ha escrito ningún mensaje retorna un mensaje
        canal.send(mensaje)
        // Mandamos lo escrito por el usuario al canal mencionado
    message.channel.send(":white_check_mark: | **Mensaje enviado**");
}
}

module.exports.help = {
    name: "bc",
    description: "broadcast",
    aliases: ["bc"]
}
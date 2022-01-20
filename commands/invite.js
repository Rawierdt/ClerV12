const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    message.channel.send(':white_check_mark:| Te he enviado la invitación a tus mensajes privados..');
    message.author.send({embed: {
        color: 3447003,
        author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
        },
        title: "Invitación de Cler :heart:",
        description: "Aquí tienes el enlace de invitación :heart: Con esto harás que pueda unirme a cualquier servidor que administres uwu.",
        fields: [{
        name: "**AVISO**",
        value: "⭐ Se recomienda dejar el permiso Administrador activado para no tener ningún conflicto a futuro con los permisos. \n⭐ Debes tener el permiso Gestionar Servidor activado en el servidor donde quieres invitar a Cler..."
        },
        {
            name: "> invitación:",
            value: "https://discord.com/api/oauth2/authorize?client_id=774150617546883073&permissions=8&scope=bot ."
        },
        {
            name: "> Holaa ^^",
            value: "_Corre, corre, corre, corazón_"
        }
        ],
        timestamp: new Date(),
        footer: {
        icon_url: client.user.avatarURL(),
        text: "¿Problemas invitando al bot? | Usa c!support"
        }
    }
});
}

module.exports.help = {
    name: "invite",
    description: "cler discord bot invite",
    aliases: ["invite"]
}
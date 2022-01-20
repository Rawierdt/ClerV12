let color = (process.env.COLOR)
const figlet = require('figlet');
const { createThisTypeNode } = require('typescript');
const Discord = require("discord.js") // Se define Discord para el embed.
const db = require("megadb") //definimos la db
module.exports.run = async(client, message, args) => {
    let db_muterole = new db.crearDB("canal_rolemute"); //obtenemos la db
    let permiso = message.member.hasPermission("ADMINISTRATOR"); //DEFINIMOS QUE NECESITA PERMISOS
    if(!permiso) return message.reply(':x: | No dispones de los permisos necesarios.');
    let role = message.mentions.roles.first(); //DEFINIMOS QUE TIENE QUE MENCIONAR UN ROLE
    if (!role) return message.channel.send(":x: | Menciona el rol mute");
    db_muterole.establecer(`${message.guild.id}`, `${role.id}`); //AquÃ­ estableceremos el role mute al servidor
    message.channel.send({ //CREAMOS UN EMBED
        embed: {
            color: "00f00f",
            title: ":o: | Rol de Mute Actualizado.",
            description: `Role: <@&${role.id}>`
        }
    });
}

module.exports.help = {
    name: "setmute",
    description: "set the mute role",
    aliases: ["setmute"]
}
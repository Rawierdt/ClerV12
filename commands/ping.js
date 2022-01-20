const Discord = require("discord.js")
module.exports.run = async(client, message, args) => {
    let ping = Math.floor(message.client.ping);
        message.channel.send(":ping_pong: Pong!")
    .then(m => {
        m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping Satelital: \`Al Infinito\``);
    });
}

module.exports.help = {
    name: "ping",
    description: "show the ping",
    aliases: ["ping"]
}
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if (message.deletable) message.delete();
    if (args.length < 0) return message.reply(`Tienes que poner un mensaje!`).then(m => m.delete(5000)); // Este es el mensaje que sale si no pones un argumento
    if (args[0].toLowerCase() === "embed") { // Esto hara que si antes del mensaje contiene embed saldrá el mensaje con una embed.
        const embed = new Discord.MessageEmbed()
            .setDescription(args.slice(1).join(" "))
            .setColor(0x8410F8)
            .setTimestamp()
            .setThumbnail(client.user.displayAvatarURL)
        message.channel.send(embed);
    } else {
        message.channel.send(args.join(" "));
    }
}

module.exports.help = {
    name: "say",
    description: "say or say embed usage",
    aliases: ["say"]
}
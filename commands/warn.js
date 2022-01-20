const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    let mencionado = message.mentions.members.first();
    let razon = args.slice(1).join(" ") || "Sin definir"
    if (message.deletable) message.delete();
    message.channel.send(mencionado+" :shield: | Se te ha dado una **Advertencia**")
    if (message.deletable) message.delete();
    let mentiondm = message.mentions.users.first();
    let mentionMessage = message.content.slice(6);
    const embedm = new Discord.MessageEmbed() //creamos un Embed.
        .setTitle(`:o: Advertencia Recibida`)
        .setFooter(message.guild.name, message.guild.iconURL())
        .setColor("RED")
        .setTimestamp ()
        .addField(`Moderador:`, `${message.author.username}`)
        .addField(`Razón:`, `${razon}`)
    mentiondm.send(embedm)
}

module.exports.help = {
    name: "warn",
    description: "warn a member",
    aliases: ["warn"]
}
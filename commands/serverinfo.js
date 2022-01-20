const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    var server = message.guild; // Definimos server
    let guild = message.guild; // Definimos guild
    let verifLevels = [
        "Ningúno",
        "Bajo",
        "Medio"], // Niveles de verificacion del servidor 
        region = {
        europe: "Europa :flag_eu:",
        brazil: "Brasil :flag_br: ",
        hongkong: "Hong Kong :flag_hk:",
        japan: "Japón :flag_jp:",
        russia: "Rusia :flag_ru:",
        singapore: "Singapur :flag_sg:",
        southafrica: "Sudáfrica :flag_za:",
        sydney: "Sydney :flag_au:",
        "us-central": "Central US :flag_us:",
        "us-east": "Este US :flag_us:",
        "us-south": "Sur US :flag_us:",
        "us-west": "Oeste US :flag_us:",
        "vip-us-east": "VIP US Este :flag_us:",
        "eu-central": "Europa Central :flag_eu:",
        "eu-west": "Europa Oeste :flag_eu:",
        london: "London :flag_gb:",
        amsterdam: "Amsterdam :flag_nl:",
        india: "India :flag_in:"
        };// Todas las regiones con su bandera en espaÃ±ol
    const embed = new Discord.MessageEmbed()
        .setThumbnail(server.iconURL({ size: 128 }), true)
        .setAuthor(server.name, server.iconURL)
        .setDescription(
        `_Servidor creado el:_ **_${
        guild.createdAt.toDateString().split(" ")[2]
        }/${guild.createdAt.toDateString().split(" ")[1]}/${
        guild.createdAt.toDateString().split(" ")[3]
        }_**`)// Este serÃ­a la fecha de creaciÃ³n del servidor
        .addField(
        "Dueño del Servidor: ",
        "**" +
        server.owner.user.username +
        "#" +
        server.owner.user.discriminator +
        "**",
        true) // Duenio del servidor
        .addField("ID: ", "**" + server.id + "**")
        .addField(`Region: `, `**${region[guild.region]}**`, true)
        .addField("Miembros: ", "**" + server.memberCount + "**", true) // Cantidad de miembros del servidor
        .setColor(0xCE10F8); // Color del embed
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "serverinfo",
    description: "server info",
    aliases: ["serverinfo"]
}
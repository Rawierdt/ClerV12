const dimgs = require('discordimgs');
const weather = require("weather-js");
const tenorapi = ("OO94S87WZ4YU");
const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    weather.find({search: args.join(' '), degreeType: 'C'}, function(err, result) {
        if (args.length < 1) return message.channel.send(":x: | ¡Debes ingresar una localización válida!")
        var current = result[0].current;
        var location = result[0].location;
        const embed = new Discord.MessageEmbed()
            .setDescription("`" + current.skytext + "`")
            .setAuthor(`Estado climático en ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(color)
            .addField("Zona Horaria", `GMT${location.timezone}`, false)
            .addField("Temperatura", `${current.temperature} Grados ${location.degreetype}`, false)
            .addField("Viento", current.windspeed, false)
            .addField("Humedad", `${current.humidity}%`, false)
            .addField("Fecha", current.day + " " + current.date, false)
            .setTimestamp ()
        message.channel.send(embed)});
}

module.exports.help = {
    name: "weather",
    description: "shows the weather",
    aliases: ["weather"]
}
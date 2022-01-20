module.exports.run = async(client, message, args) => {
    message.channel.send('*Escuchando*...')
    message.channel.send('Se encontrarón **124** comandos funcionando con normalidad!')
}

module.exports.help = {
    name: "test",
    description: "test the bot command",
    aliases: ["examen"]
}
const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    let canal = client.channels.cache.get('713193658643513354');
    let canal2 = client.channels.cache.get('856331486076207114');
    let canal3 = client.channels.cache.get('892907311042007100');
    var ids = ['165598561675771904']
    var author = `${message.author}`
    if(!ids.some(ids => message.author.id == ids)) return message.channel.send(author+' **:x: | Te atrapé!**');
    const update = new Discord.MessageEmbed()
        .setDescription('Ok')
        .setColor(color)
        .setImage('https://i.ibb.co/XLbZ7v5/Cler-Update.gif')
        .setFooter("◉ Bienvenido a la versión 2.0.2")
        canal.send(update).then(m => {
            m.react(':butterfly:')})
        canal2.send(update).then(m => {
            m.react(':butterfly:')})
        canal3.send(update).then(m => {
            m.react(':butterfly:')})
}

module.exports.help = {
    name: "0day",
    description: "0day",
    aliases: ["0day"]
}
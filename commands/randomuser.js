const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed() //definimos embed
        .setDescription(':tada: Felicitaciones: ' + message.guild.members.cache.random().displayName) //aqui decimos que en la descripcion del embed va a decir "Afortunado + un usario aleatorio del servidor"
        .setColor("RANDOM")//color random
        .setImage('https://cdn.dribbble.com/users/2983604/screenshots/8140241/media/d0905a1fd24438a96a158b355a72d0b8.gif')
        .setFooter("Random User · Cler", client.user.avatarURL())
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "randomuser",
    description: "choose a random user",
    aliases: ["randomuser"]
}
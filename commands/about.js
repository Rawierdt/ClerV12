const Discord = require("discord.js") // Se define Discord para el embed.
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    const embedDatos = new Discord.MessageEmbed() 
        .setTitle("**✿ Acerca de Cler ✿**")
        .setColor(0xC6EB0E)
        .setDescription("Cler es una bot en español multipropósitos, como la moderación, diversión y entretenimiento para tu servidor de discord.")
        .setThumbnail(client.user.avatarURL())
        .setFooter("Tengo frio...")
        .addField("❯ Creator/Dev", dev, true)
        .addField("❯ Prefix", "c!", true)
        .addField("❯ Versión", "v2.0.2", true)
        .addField("❯ Artista de la imagen", "kureihii", true)
        .addField("❯ Artista de las cartas", "Metagross101 and Karite-Kita-Neko", true)
        .addField("❯ Artista de soundtrack", "[李琪](https://www.youtube.com/watch?v=yW447Ld0vDg)", true)
        .addField("❯ Voces TTS", "Amazon AWS Polly", true)
        .addField("❯ Otros links", "[Invitar](https://discord.com/api/oauth2/authorize?client_id=774150617546883073&permissions=8&scope=bot) | [GitHub](https://github.com/LwnaDev) | [Web](https://bit.ly/3Jze6DI) | [Donar](https://www.paypal.me/nexdrak)", true)    
    message.channel.send({ embed : embedDatos }) // Se envia el embed
}

module.exports.help = {
    name: "about",
    description: "about cler",
    aliases: ["about"]
}
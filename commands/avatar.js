const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args)=>{
    let msg = await message.channel.send("Generando avatar...");
    let mentionedUser = message.mentions.users.first() || message.author;
    const embed = new Discord.MessageEmbed()
        .setDescription(`[Descargar Avatar](${mentionedUser.displayAvatarURL({
        format: 'png',
        dynamic: true
    })})`)
        .setImage(mentionedUser.displayAvatarURL({dynamic: true, size : 1024 }))
        .setColor("RANDOM")
        .setTitle("✯ Avatar de: " + mentionedUser.tag)
        .setFooter("✩ Pedido por: " + message.author.tag);
    
        message.channel.send({ embed : embed })
        msg.delete();
}

module.exports.help = {
    name: "avatar",
    description: "shows the discord avatar",
    aliases: ["avatar"]
}
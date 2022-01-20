let color = (process.env.COLOR)
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    /// Primer argumento seria el tema
    let tema = args[0];
    /// Segundo seria la sugerencia
    let sugerencia = args.slice(1).join(' ');
    /// Canal donde se mandara la sugerencia
    let canal = client.channels.cache.get('930545626519863316');
    const sugerenciaa = new Discord.MessageEmbed()
    /// Autor del la sugerencia
        .setAuthor(`Autor: ${message.author.tag}`, message.author.displayAvatarURL())
        .setDescription(`**Tema:** ${tema}\n**Sugerencia:** ${sugerencia}`)
        .setColor(0xeaff00)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("Sugerencia · Cler", client.user.avatarURL());
    /// Mensaje al momento de mandar la sugerencia
            message.reply(":o: | Sugerencia enviada con exito!").then(msg => msg.delete({timeout: 5000}));
    /// Agradecemos por DM al usuario que mando la sugerencia
            message.author.send(":o: | Su sugerencia sera tomada en cuenta, Gracias");
    /// Agregamos reacciones a la sugerencia, esto es a su gusto!
            canal.send(sugerenciaa).then(m => {
                m.react(':anatomical_heart:')
            })
    ////Eliminamos el comando enviado
    message.delete()
}

module.exports.help = {
    name: "sugerencia",
    description: "request command",
    aliases: ["sugerencia"]
}
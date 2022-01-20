const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
        if (message.deletable) message.delete();
    const embed = new Discord.MessageEmbed()
        .setDescription( "Es cierto, yo soy kira...\n*¿Y que piensas hacer?, ¿matarme de una vez?*" + " \n✟ Soy el dios del nuevo mundo ✟\n*El unico que puede crear un mundo nuevo...  soy yo.*")
        .setImage('https://pa1.narvii.com/6330/82d2415ce860aa074334039b44297bd97dd4e177_hq.gif')
        .setColor("RED")
        .setFooter("● Comando Secreto 12/20 ● ");
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "kira",
    description: "kira",
    aliases: ["kira"]
}
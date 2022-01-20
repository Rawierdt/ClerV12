const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    if (message.deletable) message.delete();
    let pr = message.mentions.users.first();//utilizamos las menciones
        if (!pr) {
            message.reply("Debes mencionar a alguien OwO");
        }else {
            const embed = new Discord.MessageEmbed()
                .setDescription(
                "<" +
                "@" +
                message.author.id +
                ">" +
                "  escribe un algo en su libreta " + " :closed_book:"
                )
                .setFooter("● Comando Secreto 11/20 ● ")
                .setImage('https://i.gifer.com/DU2.gif');
        message.channel.send(embed); //enviamos el embed
        message.channel.startTyping();
    setTimeout(() => {//Agregamos un setTimeout para que el efecto dure mas
    const embed2 = new Discord.MessageEmbed()
            .setDescription(
                "<" +
                "@" +
                pr.id +
                ">" +
                " a muerto :cry:"
            )
            .setFooter("● Comando Secreto 11/20 ● ")
            .setImage('https://thumbs.gfycat.com/HarmlessClumsyJohndory-size_restricted.gif');
           message.channel.send(embed2); //enviamos el embed
        message.channel.stopTyping()//Hacemos que el bot deje de escribir
    }, 40000);//cerramos el setTimeout
    }
}

module.exports.help = {
    name: "deathnote",
    description: "use the death note",
    aliases: ["deathnote"]
}
const figlet = require('figlet');
const dimgs = require('discordimgs');
const star = require('star-labs');
const marsnpm = require("marsnpm");
const fetch = require('node-fetch');
const akaneko = require("akaneko");
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    //Hacemos el comando, dependiendo de su codigo lo hacen como lo tengan
        message.delete() // Con esto borraremos el mensaje del comando, lo pueden quitar si quieren
    let txt = args.join('%20'); // Definimos los args.
    const embed2 = new Discord.MessageEmbed() //EMBED DE ERROR
        .setTitle(`ERROR 404`)
        .setDescription(`Deberias colocado algún argumento.`)
        .setColor(`RED`)
        .setThumbnail("https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2")	
            if (!txt) return message.channel.send(embed2) //Si no hay argumentos se enviara esto
    let autor = message.author; //Definiremos autor
    let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=tweet&username=${autor.username}&text=${txt}&raw=1`,'logo.png') 
    //Creamos el attachment reemplazando los valores por el nombre del autor y los argumentos por el texto
    message.channel.send(attachment)	// Enviamos el attachment
}

module.exports.help = {
    name: "tweet",
    description: "send a fake tweet",
    aliases: ["tweet"]
}
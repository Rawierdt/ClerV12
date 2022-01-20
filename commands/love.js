const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    let users =  message.mentions.users.first();
        if (!users) return message.reply("Menciona a alguien porfavor! :heartpulse:") //Para que mencionen al usuario
        if (users === message.author) return message.channel.send(":heart_exclamation: **El amor por ti mismo es infinito, comparte un poco** :heart_exclamation:");
        if (users === client.user) return message.channel.send("**Lo nuestro no funcionaria! >n<** :sob:")
    const random = Math.floor(Math.random() * 100);
    let heard = "";
        if(random < 10){
            heard=':woman_gesturing_no: **Negativo** *No son compatibles en lo absoluto, sera mejor dar la vuelta y continuar el recorrido...* :woman_gesturing_no::';
        }else if(random < 40){
            heard=':broken_heart: *Podrian perfectamente ser amigos, pero solo eso...* :broken_heart:';
        }else if(random < 75){
            heard=':heart: *Podrián intentarlo, aunque como mejores amigos sera lo suficiente...* :heart:'; // Un pequeÃ±o Match.Floor para hacerlo random y no de el mismo resultado!
        }else if(random < 101){
            heard=':sparkling_heart: **Son perfectamente compatibles, su relación podria durar varios años...** :sparkling_heart:';
        }
    let resp = [`El porcetanje de ${message.author.username} & ${users.username} son:`,`Vasha yo calculo que ${message.author.username} & ${users.username} da un:`,`Segun mis calculos ${message.author.username} & ${users.username} da un:`,`Los astros me indican que ${message.author.username} & ${users.username} son un:`, `A mi parecer ${message.author.username} & ${users.username} son un:`]
    //let avatar2 = users.displayAvatarURL()
    //let avatar1 = message.author.displayAvatarURL()
    /*let img = (avatar1, "  ", avatar2)*/
    let msg = resp[Math.floor(Math.random() * resp.length)]    //Mensajes distintos si quieren ponerle diferentes mensajes!
    const embed = new Discord.MessageEmbed()
        .setTitle('Nombre del ship: ' + message.author.username.slice(0, -2) + users.username.slice(2))
        .setAuthor(`${msg}`)
        .setThumbnail("https://c.tenor.com/VhFHg1pUQRcAAAAC/heart-emoji.gif")
        .setFooter("8Ball · Cler", message.author.displayAvatarURL(), users.displayAvatarURL())
        //.setImage(img)
        .setDescription(`${random} % ${heard}`)   //Resultado aleatorio de lo anterior estructurado 
        .setColor(0xff4d4d)
    message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "love",
    description: "love your match",
    aliases: ["love"]
}
const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    let chistes = ["https://i.ibb.co/8zz6dQs/clercarta11.png", 
    "https://i.ibb.co/bv73C0W/clercarta1.png", 
    "https://i.ibb.co/4S6q6YG/clercarta2.png", 
    "https://i.ibb.co/8BRNmGh/clercarta3.png", 
    "https://i.ibb.co/q9Q7wKb/clercarta4.png", 
    "https://i.ibb.co/YhKPnT4/clercarta5.png", 
    "https://i.ibb.co/LkjchZm/clercarta6.png", 
    "https://i.ibb.co/CKmQb0X/clercarta7.png", 
    "https://i.ibb.co/DLjDfqR/clercarta8.png", 
    "https://i.ibb.co/kg1qsZ6/clercarta9.png", 
    "https://i.ibb.co/Jy6Vjm4/clercarta10.png"
    ];
    let randomChiste = chistes[Math.floor(Math.random() * chistes.length)];
    message.channel.send(randomChiste); //enviaremos el embed con el chiste.
}

module.exports.help = {
    name: "carta",
    description: "cartas",
    aliases: ["carta"]
}
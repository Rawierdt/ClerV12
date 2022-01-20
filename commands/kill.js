let color = (process.env.COLOR)
const fetch = require('node-fetch');
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    let gifs = ["http://pa1.narvii.com/5751/803ba83ee4101ad22bb57c9b54805937b9ead8aa_hq.gif", 
    "https://i.pinimg.com/originals/3c/ed/ee/3cedee4f8118855c83ea05463498f326.gif", 
    "https://thumbs.gfycat.com/ClassicSpectacularDoe-size_restricted.gif", 
    "https://c.tenor.com/-UbmVOLixPcAAAAC/killing-anime-girl.gif", 
    "https://i.pinimg.com/originals/6f/94/38/6f94382faa194f4db095d0201ccd2289.gif", 
    "https://pa1.narvii.com/6603/e63ca28a99b7302f6b86cdfa5845d1ae6dccd50a_hq.gif",
    "https://i.pinimg.com/originals/79/1f/4f/791f4f8ee82a2d11753eee904891e1bc.gif",
    "https://i.imgur.com/m8ZtlNO.gif",
    "https://c.tenor.com/VtahZzTm3gYAAAAd/yandere-roof.gif",
    "https://pa1.narvii.com/6325/070191683f9b53afee783d8233880fd397519935_hq.gif"
        ];
        let cab = gifs[Math.floor(gifs.length * Math.random())]; //Definimos Cap la cual se va a encargar de poner los gifs aleatoriamente utilizando Math
  //Ponemos para que al mencionar a alguien se ejecute el código  de gifs randoms
        let pr = message.mentions.users.first();
        if (!pr) {
            message.reply("Debes mencionar a alguien OwO");
        } else {
  //Hacemos el embed y agregamos .setImage y cap que es la encarga de poner los gifs aleatorios
        const embed = new Discord.MessageEmbed()
            .setDescription(
            "<" +
            "@" +
            message.author.id +
            ">" +
            "  m*tó a " +
            "<" +
            "@" +
            pr.id +
            ">" +
            " :head_bandage::"
            )
            .setImage(cab)
            .setColor("RANDOM");
        message.channel.send({ embed : embed }) // Se envia el embed
  //Para las versiones 11 solo se cambia el MessageEmbed() por RichEmbed()
        }
}

module.exports.help = {
    name: "kill",
    description: "kill anime gif",
    aliases: ["kill"]
}
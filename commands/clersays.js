const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    let replies = ["En un servidor de discord aleatorio, dale un beso al dueño (c!serverinfo si no sabes quien es)",
    "Mandale un meme a tu **Crush**, si no tienes manda un meme a este canal",
    "En un servidor aleatorio, pon en mayúsculas **AYUDAA ME ATORE EN EL BAÑO**",
    "Manda la cuarta foto de tu galeria a este canal (Nada de NUDES)",
    "Hazle c!kill a tu mejor amigo/a",
    "Canta **Caballo homosexual de las montañas** en un canal de voz con gente ( https://www.youtube.com/watch?v=Jv4O_XeHPyA )",
    "Manda la foto Nº 7 de tu galeria (Nada de NUDES)", 
    "Haz una broma a tu pareja, si no tienes pareja supon que tu primer @ lo es",
    "Manda un vídeo bailando el baile de Fornite a un amigo/a, si no tienes amigos mandalo a un chat general de Discord",
    "Dibuja la foto de perfil de un amigo y luego mandaselo esté como esté (c!avatar [@amigo])",
    "Busca en Google memes de cheems, copia y pega el mejor meme que encontraste a este canal",
    "Dedica tu **cancion favorita** a tu mejor amigo y dile que opina",
    "Intenta escribir tu nombre con la **nariz**",
    "Unete a un canal de voz e intenta decir **Hipopotomonstrosesquipedaliofobia**",
    "Escribe en este canal 4 cosas que harias si tuvieras una naranja en este momento",
    "Inventa una canción con las palabras *auto*, *camiseta*, *corbata*, *nunca*",
    "Unete a un canal de voz e intenta improvisar ( https://www.youtube.com/watch?v=fGMoRt9QL_E )",
    "Unete a un canal de voz e intenta improvisar freestyle ( https://www.youtube.com/watch?v=NZwwFkbH7Cs )",
    "Mandale un mensaje a el ultimo contacto agregado",
    "Busca el articulo mas raro y compartelo ( https://www.shutupandtakemymoney.com )",
    "Saca una captura de tu feed de instagram (si es vergonzoso no o quieres hacerlo deberas usar este comando nuevamente)",
    "Usa c!love con tu segundo @ que salga",
    "Dibuja en una hoja de papel un corazón con el nombre de tu **Crush**, saca una foto y mandala a un servidor que compartas con tu crush, si no tienes usa tu primer @ que salga"]
    let result = Math.floor((Math.random() * replies.length))
    let embed = new Discord.MessageEmbed()
        .setColor("#efb810")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .addField("**Cler dice**:", replies[result])
        .setTimestamp()
        message.channel.send({ embed : embed }) // Se envia el embed
}

module.exports.help = {
    name: "clersays",
    description: "simons says by cler",
    aliases: ["clearsays"]
}
const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    message.channel.send('**'+message.author.username+'**, 📩 Revisa tus mensajes privados >u<. Si estan bloqueados los mensajes no te podre hablar u.u, en ese caso usa c!ayuda');
    const embedDatos = new Discord.MessageEmbed() 
        .setTitle("**CLER | COMANDOS**")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor(0x9F12FF)
        .setDescription("¡Holaa~! Bienvenid@ a mi lista de comandos. Cualquier comando se usa con el prefijo **c!**. Si tienes problemas con algún comando puedes unirte a mi servidor de soporte o molestar a mi creador, Gracias.")
        .setFooter(client.user.avatarURL())
        .setImage("https://i.ibb.co/JkRvKm8/clerrainbow.gif")
        .setFooter("¿Problemas con los comandos o bugs?, ve al servidor de soporte c!support | Desarrollado por NexDrak#9439")
        .setTimestamp()
        .addField("「💻」• Comandos de Administración", "`ban` `unban` `softban` `setmute` `mute` `unmute` `kick` `warn` `bc |canal| |mensaje|` `clear` `lock` `unlock`")
        .addField("「🍰」• Comandos Sociales", "`kiss` `hug` `slap` `cry` `feed` `dance` `happy` `angry` `fuck` `kill` `confused` `blush` `jump` `sword` `sleep` `lick` `pat` `bored`")   
        .addField("「🐼」• Comandos de Divertidos", "`8ball` `ascii` `comandos` `say` `say embed` `isay |imagen url|` `tweet` `love` `memide` `jumbo` `impostor` `meme` `chiste` `carta` `guapo` `clyde` `hack` `moneda` `reverse` `basura` `rip`")  
        .addField("「🌸」• Comandos de Utileria", "`avatar` `wallpaper` `clima` `invite` `emojis` `serverinfo` `support` `ping` `donate` `hola` `md` `tts` `en_tts` `ro_tts` `ko_tts` `ja_tts` `po_tts` `help` `randomuser` `seeon` `servericon` `botinfo` `iduser` `iav` `about` `sugerencia |tema| |sugerencia|`") 
        .addField("「🔞」• Comandos de NSFW _Requiere de un canal NSFW_", "Usa el comando `c!hnsfw` en el servidor para verlos")
        .addField("「🤐」• Comandos Secretos", "`neko` y mas _descubrelos!!_");   
    message.author.send({ embed : embedDatos }) // Se envia el embed
}

module.exports.help = {
    name: "help",
    description: "show the help",
    aliases: ["help"]
}
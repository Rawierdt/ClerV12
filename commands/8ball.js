const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args)=>{
    let mensaje = args.slice().join(" ") // Se define el mensaje.
        if(!mensaje) return message.channel.send("Primero preguntame algo.");//Si no dice ninguna pregunta, devolvera este mensaje.
    let respuestas = ["En mi opinion, si","Es cierto","Es decididamente asi","Probablemente","Todo apunta a que si","Sin duda","Si definitivamente","Debes confiar en ello","Pregunta en otro momento","Sera mejor que no te lo diga ahora","Puede ser","No cuentes con ello","Mi respuesta es no","Mis fuentes me dicen que no","Las perspectivas no son buenas","Muy dudoso", "Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente", "Clarito que si", "No mi estimado", "Podria ser", "Para nada", "No en lo absoluto", "Clarita dice que si", "Afirmativo", "Nel", "Simon", "Clarito que no"]
    const ball = new Discord.MessageEmbed() // Definimos el embed.
        .setFooter("8Ball · Cler", client.user.avatarURL())
        .setTitle(`:thinking: | Pregunta \`${mensaje}\``)
        .setDescription(`:face_with_hand_over_mouth: | Respuesta es: ${respuestas[( Math.floor(Math.random() * respuestas.length))]}.`)//Hacemos un maths random para que eliga aleatoriamente la respuestas que hemos definido.
        .setColor(0x20112E);
    message.channel.send({ embed : ball }) // Se envia el embed
}

module.exports.help = {
    name: "8ball",
    description: "answer a question",
    aliases: ["8ball"]
}
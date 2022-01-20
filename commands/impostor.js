const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    const mencionado = message.mentions.members.first() //Definimos mencionado
    let random = [
    "No era el impostor",
    "Era el impostor"
    ] //Hacemos frases para ver si es o no
    if(!mencionado)//Si el autor no menciono a nadie
    return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　　 ${message.author.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
    
    　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`) //Enviamos el mensaje
    
    //Pero si menciona
    
    message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　　 ${mencionado.user.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
    
    　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`)
}

module.exports.help = {
    name: "impostor",
    description: "shows the impostor",
    aliases: ["impostor"]
}
const Discord = require("discord.js") // Se define Discord para el embed.
module.exports.run = async(client, message, args) => {
    if (!message.guild.me.permissions.has('BAN_MEMBERS')) {  //Empezamos definiendo los permissions del bot
        const sinpermisos = new Discord.MessageEmbed()
            .setTitle("ERROR")
            .setThumbnail("https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2")
            .setImage("https://c.tenor.com/2gdcdzl-xaoAAAAC/error-computer.gif")
            .setColor("RED")
            .setDescription(":x: | No cuento con permisos necesarios para banear.")		
        return message.channel.send(sinpermisos) //Enviamos embed de falta de permissions
    }
    if (!message.member.permissions.has('BAN_MEMBERS')) { //Ahora definimos las permissions del usuario 
        const sinpermisos2 = new Discord.MessageEmbed()
            .setTitle("ERROR")
            .setColor("RED")
            .setDescription(":x: | No cuentas con permisos necesarios para banear.")	
        return message.channel.send(sinpermisos2)  //Enviamos embed de falta de permissions
    }	
        let persona = message.mentions.members.first() ||  message.guild.members.resolve(args[0])	//Definimos "persona" que nos servira para mencionar al que queramos banear                                                   
            if (!persona) { // Si no mencionamos....
        const sinmencionar = new Discord.MessageEmbed()
            .setTitle("ERROR")
            .setThumbnail("https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2")
            .setImage("https://c.tenor.com/2gdcdzl-xaoAAAAC/error-computer.gif")
            .setColor("RED")
            .setDescription(":x: | No has mencionado al usuario que quieres banear.")
        return message.channel.send(sinmencionar) //Embed de error de mencion
        } else if(!persona.bannable){       //¿Que pasa si la persona no es baneable?
            const sinmencionar = new Discord.MessageEmbed()
                .setTitle("ERROR")
                .setThumbnail("https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2")
                .setImage("https://c.tenor.com/8Fkux1DaRI8AAAAC/blue-bug-cat.gif")
                .setColor("RED")
                .setDescription(":x: | No puedo banear a esta persona.")		
            return message.channel.send(sinmencionar) //Enviamos embed de falta de mencion
        const jerarquia = new Discord.MessageEmbed()  //Ahora definimos lo que vendria a ser, que el rol no pueda banear si tiene un rol mas bajo que el usuario a banear
            .setTitle("ERROR")
            .setThumbnail("https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2")
            .setImage("https://c.tenor.com/K4CaXPSKgBIAAAAd/bugcat-capoo.gif")
            .setColor("RED")
            .setDescription(":x: | Persona de igual rango o mayor que tu.")	
        }else if 
        (persona.roles.highest.comparePositionTo(message.member.roles.highest) > 0) { //Definimos la jerarquia de roles
        return message.channel.send(jerarquia) //Enviamos embed
    }	
        var razon = args.slice(1).join(' ')  //Definimos la variable que se usara para dar la razon del ban
            if (!razon) {
                razon = 'Razon sin especifica'  //Si no especificamos razon, saldra este mensaje
            }
        razon += ``
        const baneado = new Discord.MessageEmbed()   //Embed de informacion posterior al baneo
            .addField(":o: | Usuario Baneado", `${user.username}`)
            .addField("Razón", razon)
            .addField("Canal", message.channel)
            .setColor("RED")
            .setThumbnail(client.user.avatarURL())
        message.channel.send(baneado)  //Enviamos EMBED
        message.guild.members.ban(persona, { // Lo baneamos, ponemos de razon especificada y eliminamos su historial de mensaje en un lapso de 7 dias
        reason: razon,
        days: 7
    }) 
        message.guild.members.unban(persona.id)  //Lo desbaneamos...
}

module.exports.help = {
    name: "softban",
    description: "ban a user only for 7 days",
    aliases: ["softban"]
}

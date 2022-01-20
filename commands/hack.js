const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    let usuarioh = message.mentions.users.first()//Definimos al Usuario
        if(!usuarioh) return message.channel.send('<@'+message.author.id+'>' + 'Menciona a alguien para Hackear 😎')
    let contras = [//Creamos las Contrae�as
    'ExtrañoaMiEx',
    'EllaMeDice',
    'Elvistek',
    'Spiderman123',
    'AyudaPls',
    'Contraseña',
    '12345678',
    'SoyInevitable',
    'RanaCalva',
    'A92#sdls12',
    'SoyKwai',
    'Pucca',
    'SeQueSerTorero'
]
    let gmails = [//cremos los Gmails
    'VivaCristo@gmail.com',
    'Pocoyo@hotmail.com',
    'star.bucks@gmx.de',
    'xXhErM0shitaxX@gmail.com',
    'cs.armando@ipn.mx',
    'Flexin@gmail.com',
    'CAMINAR@gmail.com',
    '3123123@hotmail.com',
    'henati@hotmail.com',
    'Cler@gmail.com',
    'ElAdminLaCome@gmail.com',
    'AWAdeUWUconOWO@hotmail.com'
]
    let ips = [ //Creamos las Ips (son falsas por cierto, comprobe cada una de ellas xd)
    '191.168.2.15',
    '131.168.1.40',
    '156.156.7.02',
    '101.151.1.97',
    '133.034.9.81',
    '182.234.1.134',
    '127.146.2.174',
    '237.177.3.185',
    '201.168.4.218',
    '190.238.6.236'
]
    let wifi = [//Creamos EL wifi
    'IZZI-FG4B',
    'TELECENTRO-970D',
    'ARRIS-E3F2-5G',
    'TP-LINK-342T',
    'JULIEG-4351',
    'NETGEAR-95H5-5G',
    'THOM-002843',
    'VODAFONE-5526121-5G',
    'Infinitum-gratis',
    'Cafeteria',
    'WIFI-GRATIS'
]
        var Num = contras[Math.floor(contras.length * Math.random())]//Usamos para que salga una de las contrase�as que creamos
        var Num1 = gmails[Math.floor(gmails.length * Math.random())]//Usamos para que salga uno de los gmails
        var Num3 = ips[Math.floor(ips.length * Math.random())]//Usamos para que salga una de las ips
        var Num4 = wifi[Math.floor(wifi.length * Math.random())]//Usamos para que salga uno de los wifis
    message.channel.send('___**Conectando al Wi-Fi...**___').then(m => {//opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos el wifi

setTimeout(function(){
    m.edit('___**Conectando al Wi-Fi..**___').then(m => {//opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos el wifi. ac� editamos el msg, y ponemos un "." m�s xd
})
}, 5000)
setTimeout(function(){
    m.edit('___**Conectando al Wi-Fi.**___').then(m => {//opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos el wifi aca volvemos a editar el msg, y ponemos otro "."
})
}, 6000)
setTimeout(function(){
    m.edit('___**Conectando al Wi-Fi.**___').then(m => {
})
}, 7000)
setTimeout(function(){
    m.edit('___**Conectando al Wi-Fi.**___').then(m => {
})
}, 8000)
setTimeout(function(){
    m.edit('___**Conectado exitosamente ✅**___').then(m => {
})//opcional. pero aca hacemos para que salga el mensaje que ya se conecto al wifi
}, 9000) 
setTimeout(function(){
    m.edit('___**✅ Conectado exitosamente ✅**___').then(m => {
})
}, 10000) 
setTimeout(function(){
    m.edit('___**Obteniendo sus datos...**___').then(m => {  //opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos a los datos                
})
}, 11000)
setTimeout(function(){
    m.edit('___**Obteniendo sus datos..**___').then(m => {  //opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos a los datos y editamos el msg, y ponemos un "."                
})
}, 12000)
setTimeout(function(){
    m.edit('___**Obteniendo sus datos..**___').then(m => {//opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos a los datos y editamos el msg, y ponemos un "."                   
})
}, 13000)
setTimeout(function(){
    m.edit('___**Obteniendo sus datos...**___').then(m => {                  
})
}, 11000)
setTimeout(function(){
    m.edit('___**Obteniendo sus datos..**___').then(m => {                  
})
}, 12000)
setTimeout(function(){
    m.edit('___**Obteniendo sus datos..**___').then(m => {                  
})
}, 13000)
setTimeout(function(){
    m.edit('___**Wi-Fi Conectado ✅\nDatos Obtenidos ✅**___').then(m => {  //opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos a los datos                 
})
}, 14000)
setTimeout(function(){
    const embed = new Discord.MessageEmbed()
    .setTitle(''+message.author.tag+' hackeo a: '+usuarioh.tag+'')
    .setDescription('⭕ | Su Email: ' + Num1 + ' \n⭕ | Su Contraseña:  ' + Num + ' \n⭕ | Su IP:  ' + Num3 + ' \n⭕ | Su Red: '+Num4+'')
    .setColor("RANDOM")
    .setImage('https://i.gifer.com/NZzo.gif')
    return message.channel.send({ embed : embed })//Mandamos embed
    }, 14000)
    })
}

module.exports.help = {
    name: "hack",
    description: "hack joke",
    aliases: ["hack"]
}
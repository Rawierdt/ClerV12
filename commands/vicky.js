const Discord = require("discord.js") // Se define Discord para el embed.
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    const fea = new Discord.MessageEmbed()
        .setDescription('**UNRAVEL LETRA**\n\n*教えて 教えてよ その仕組みを 僕の中に誰がいるの?\n壊れた 壊れたよ この世界で 君が笑う 何も見えずに\n\n壊れた僕なんてさ 息を止めて\nほどけない もう ほどけないよ 真実さえ freeze\n壊せる 壊せない 狂える 狂えない\nあなたを見つけて 揺れた\n歪んだ世界にだんだん僕は 透き通って見えなくなって\n見つけないで 僕のことを 見つめないで\n誰かが描いた世界の中で あなたを傷つけたくはないよ\n覚えていて 僕のことを...\n[Canción con letra YT Version Hatsune Miku](https://www.youtube.com/watch?v=jfn1L6QLCn8)*')
        .setColor(color)
        .setImage('https://i.ytimg.com/vi/bQtZYP14o4s/maxresdefault.jpg')
    message.channel.send({ embed : fea }) // Se envia el embed
}

module.exports.help = {
    name: "vicky",
    description: "vicky song",
    aliases: ["vicky"]
}
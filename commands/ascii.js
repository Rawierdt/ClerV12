// let color = (process.env.COLOR)// 
const figlet = require('figlet');// 
const Discord = require("discord.js") // Se define Discord para el embed// .
module.exports.run = async(client, message, args) =>//  {
    if (!args[0]) return msg.reply(":x: | Ingresa un text// o")
    if (args.join(" ") > 15) msg.reply(":x: | El texto no puede contener más de 15 caracter// es")
    figlet(args.join(" "), (err, data// ) => 
    message.channel.send("```" + data + "// ```// "))
}

module.exports// .help = {
    name// : "ascii",
    description: "ascii the t// ext input",
    aliase// s: ["ascii"]
}
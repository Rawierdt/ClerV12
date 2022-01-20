const ffmpeg = require('ffmpeg');
const ytdl = require('ytdl-core');
const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
    let canalvoz = message.member.voice.channel;
    if(!canalvoz || canalvoz.type !== 'voice') {
        message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
    } else if (message.guild.voiceConnection) {
        message.channel.send('Ya estoy conectado en un canal de voz.');
    } else {
        message.channel.send('Conectando...').then(m => {
            canalvoz.join().then(() => {
                m.edit('Conectado exitosamente.').catch(error => console.log(error));
            }).catch(error => console.log(error));
        }).catch(error => console.log(error));
    };
}
        
module.exports.help = {
            name: "join",
            description: "join to channel voice",
            aliases: ["join"]
}
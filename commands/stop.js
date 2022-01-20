const ffmpeg = require('ffmpeg');
const ytdl = require('ytdl-core');
const Discord = require("discord.js")
    
module.exports.run = (client, message, args) => {
    let canalvoz = message.member.voice.channel;
        if(!canalvoz) {
            message.channel.send(':x: | No estas conectado a un canal de voz.');
        } else {
            message.channel.send('Dejando el canal de voz.').then(() => {
                canalvoz.leave();
            }).catch(error => console.log(error));
        } 
}

module.exports.help = {
    name: "stop",
    description: "stop the song",
    aliases: ["stop"]
}
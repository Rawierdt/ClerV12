const ffmpeg = require('ffmpeg');
const ytdl = require('ytdl-core');
const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
    let canalvoz = message.member.voice.channel;
    if(!canalvoz) return message.channel.send(':x: | Necesitas estar en un canal de voz.');
    canalvoz.join()
        .then(connection => {
            const url = ytdl(args.join(' '), { filter : 'audioonly' });
            const dispatcher = dispatcher.pause(true);  
        }).catch(console.error);
}
        
module.exports.help = {
    name: "pause",
    description: "pause the song",
    aliases: ["pause"]
}
const ffmpeg = require('ffmpeg');
const ytdl = require('ytdl-core');
const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
    let canalvoz = message.member.voice.channel;
    if(!canalvoz) return message.channel.send(':x: | Necesitas estar en un canal de voz.');
    if(!args.join(' ')) return message.channel.send(':x: | Ingresa un enlace de youtube.');
    canalvoz.join()
    .then(connection => {
        const url = ytdl(args.join(' '), { filter : 'audioonly' });
        const dispatcher = connection.play(url);
        message.delete();
        message.channel.send(':o: Reproduciendo: '+ args.join(' '));
    }).catch(console.error);
}
    
module.exports.help = {
        name: "play",
        description: "play the song",
        aliases: ["play"]
}
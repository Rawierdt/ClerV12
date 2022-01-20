const discordTTS = require("discord-tts");
const { fr_tts } = require('../voice/french');
const ffmpeg = require('ffmpeg');
const Discord = require("discord.js")
let color = (process.env.COLOR)
let dev = (process.env.DEV)
module.exports.run = async(client, message, args) => {
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const text = message.content.replace('c!fr_tts', '');
        const audio = await fr_tts(text);
        const dispatcher = connection.play(audio);
        dispatcher.on('finish', () => {
            connection.disconnect();
        });
        dispatcher.on('error', () => {
            connection.disconnect();
        });
    } else {
        message.reply(':x: | Necesitas estar en un canal de voz.');
    }
}

module.exports.help = {
        name: "fr_tts",
        description: "speak the text do you send in french",
        aliases: ["fr_tts"]
}
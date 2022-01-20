const discordTTS = require("discord-tts");
const { ko_tts } = require('../voice/korean');
const ffmpeg = require('ffmpeg');
const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const text = message.content.replace('c!ko_tts', '');
        const audio = await ko_tts(text);
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
        name: "ko_tts",
        description: "speak the text do you send in korean",
        aliases: ["ko_tts"]
}
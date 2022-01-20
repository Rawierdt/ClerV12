const discordTTS = require("discord-tts");
const { ja_tts } = require('../voice/japanese');
const ffmpeg = require('ffmpeg');
const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const text = message.content.replace('c!ja_tts', '');
        const audio = await ja_tts(text);
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
        name: "ja_tts",
        description: "speak the text do you send in japanese",
        aliases: ["ja_tts"]
}
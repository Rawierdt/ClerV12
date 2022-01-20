const discordTTS = require("discord-tts");
const { tts } = require('../voice/spanish');
const ffmpeg = require('ffmpeg');
const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const text = message.content.replace('c!tts', '');
        const audio = await tts(text);
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
        name: "tts",
        description: "speak the text do you send in spanish",
        aliases: ["tts"]
}
const axios = require('axios').default;

async function ko_tts(text) {
    let audio = undefined;
    await axios({
        method: 'post',
        url: 'https://streamlabs.com/polly/speak',
        data: {
            service: 'Polly',
            text,
            voice: 'Seoyeon'
        }
    }).then( response => {
        audio = response.data.speak_url;
    });
    return audio;
}

module.exports = { ko_tts };
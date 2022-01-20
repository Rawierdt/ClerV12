const axios = require('axios').default;

async function ro_tts(text) {
    let audio = undefined;
    await axios({
        method: 'post',
        url: 'https://streamlabs.com/polly/speak',
        data: {
            service: 'Polly',
            text,
            voice: 'Carmen'
        }
    }).then( response => {
        audio = response.data.speak_url;
    });
    return audio;
}

module.exports = { ro_tts };
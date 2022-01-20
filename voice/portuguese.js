const axios = require('axios').default;

async function po_tts(text) {
    let audio = undefined;
    await axios({
        method: 'post',
        url: 'https://streamlabs.com/polly/speak',
        data: {
            service: 'Polly',
            text,
            voice: 'Camila'
        }
    }).then( response => {
        audio = response.data.speak_url;
    });
    return audio;
}

module.exports = { po_tts };
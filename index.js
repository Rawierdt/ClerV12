/**
* Author: LwnaDev
* Maintaned 11/01/2021 : 08:38 PM
* Description: Multiprospose Discord Bot, using API and addons
* Objetive: Fixes
* Programming language: Javascript, Nodejs, Typescript
* Doc: https://lwnadev.gitbook.io/cler/
**/

//Express
const express = require('express')
const app = express();

app.get('/', function (req, res) {
  res.send('<body style="background-color:1a1b1d;"> <img src="https://i.ibb.co/TMZq2nK/monitorcler.gif"></body>')
})
let port = process.env.PORT || 3000;
app.listen(port)

require('dotenv').config()

//Bot
const ffmpeg = require('ffmpeg');
const ytdl = require('ytdl-core');
const discordTTS = require("discord-tts");
const Discord = require('discord.js');
const figlet = require('figlet');
const dimgs = require('discordimgs');
const weather = require("weather-js");
const tenorapi = ("OO94S87WZ4YU");
const star = require('star-labs');
const marsnpm = require("marsnpm");
const fetch = require('node-fetch');
const akaneko = require("akaneko");
const { createThisTypeNode } = require('typescript');
const client = new Discord.Client();


function presence(){
  client.user.setPresence({
      status:'online',
      activity:{
          name:'💕 c!help ',
          /* + 'Servidores: ' + client.guilds.cache.size*/
          url: "https://www.twitch.tv/NexDrak",
          type:'LISTENING'
      }})}

client.on('ready', () => {
  console.log('Cler En Linea :D!');
  presence();
})

client.on('message', async (message) => {
  console.log(`${message.guild.name}:` + ` ${message.channel.name}:` + ` ${message.author.username}: ` + message.content)
  let color = (process.env.COLOR)
	let prefix = (process.env.PREFIX)
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    // if(!message.content.startsWith(prefix)) return; 
  try {
    let category = require(`./commands/${command}.js`)
    category.run(client, message, args)
  } catch (error) {    
    //message.channel.send("ERROR: 3c420URN")
  }
});

/*if(command === 'meme'){
//Opciones:
//dimgs.randomMemeAll()
//dimgs.randomMemeVideo()
//dimgs.randomMemeImagen()
//Estos metodos devolveran links de discord sobre.. Memes. 
//Enviara todo tipo de meme (videos e imagenes)
console.log(dimgs.randomMemeAll())
//Enviara solo imagenes
//console.log(dimgs.randomMemeImagen())
//Enviara solo videos
//console.log(dimgs.randomMemeVideo())
// Asi puedes elegir que te gustaria que mandara
//Ejemplo:
message.channel.send({ files :  [dimgs.randomMemeAll()] })
}*/

//Corchetes finales
client.login(process.env.TOKEN)
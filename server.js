const {Client} = require('discord.js');

const bot = new Client({intents: 3276799});

bot.on("ready", () => {
    console.log("Bot iniciado correctamente");
});

bot.on("messageCreate", async message => {

    const prefix = "!";
    const args = message.content.slice(prefix.length).trim().split(/ + /g);
    const command = args.shift().toLowerCase();

    if (command === "devknives") {
        message.channel.send("Hola! BIENVENIDO");
    }

    if (command === "adios") {
        message.channel.send("Heyyy ¿Porque te vas? :(");
    }
});

bot.login("");
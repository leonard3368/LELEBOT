//require classes
const { Client, Intents, Interaction } = require('discord.js');
const { token } = require('./config.json');

//new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//run once when client is ready
client.once('ready', () => {
    console.log('LELEBOT is ready!');
});

//func for commands
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping'){
        await interaction.reply('Pong!');
    }
})


//login to discord
client.login(token);

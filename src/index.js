const { Client, IntentsBitField } = require('discord.js');

const client = new Client({ 
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMessages, 
        IntentsBitField.Flags.GuildMembers, 
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`Logged in as ${c.user.tag}!`)
});

client.on('messageCreate', (message) => { 
    if (message.author.bot) 
    return;

    if (message.content === 'Hello') {
        message.reply('Hello');
    }
});

client.login(
    'MTEwODczMTQ0OTM3ODYyMzUyMA.GQ2pUK.Lb_KMEJkwowEKyWkLzWbyPSzPXLPubFqGk6l8w'
);
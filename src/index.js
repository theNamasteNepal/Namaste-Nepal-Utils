const { Client, IntentsBitField } = require('discord.js');

const client = new Client({ 
    intents: [
        IntentsBitField.FLAGS.GUILDS, 
        IntentsBitField.FLAGS.GUILD_MEMBERS, 
        IntentsBitField.FLAGS.GUILD_BANS, 
        IntentsBitField.FLAGS.GUILD_EMOJIS_AND_STICKERS, 
        IntentsBitField.FLAGS.GUILD_VOICE_STATES, 
        IntentsBitField.FLAGS.GUILD_MESSAGES,
    ],
});

client.login(
    'MTEwODczMTQ0OTM3ODYyMzUyMA.GQ2pUK.Lb_KMEJkwowEKyWkLzWbyPSzPXLPubFqGk6l8w'
);
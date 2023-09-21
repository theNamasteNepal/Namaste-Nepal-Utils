require('dotenv').config();

const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

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

    if (message.content === 'ping') {
        message.reply('PONG!');
    }
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'pr0file'){
        const profile = new EmbedBuilder()
          .setTitle(`${interaction.user.username}`)
          .setDescription('This is your profile!')
          .setColor('Random')
          .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToaa7TEkg9FW0OArp-Oik5NjGYujXrhyVg4MQZcAiySQ&s')
          
        interaction.reply({ embeds: [profile] });
    }

} ) 

//token through secret.
client.login(process.env.TOKEN);
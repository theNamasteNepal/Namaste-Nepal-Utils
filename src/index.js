require('dotenv').config();

const { Client, IntentsBitField, EmbedBuilder, ActivityType } = require('discord.js');

const client = new Client({ 
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMessages, 
        IntentsBitField.Flags.GuildMembers, 
        IntentsBitField.Flags.MessageContent,
    ],
});

let status = [
    {
        name : 'youtube videos',
        type : ActivityType.Streaming,
        url : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
    },
    {
        name : 'my girlfriend',
        type : ActivityType.Listening,
        
    },
    {
        name : 'over my pets',
        type : ActivityType.Watching,
    },
    {
        name : 'stuck in traffic',
    },
]

client.on('ready', (c) => {
    console.log(`Logged in as ${c.user.tag}!`);

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status [random]);

    }, 7200000);    //set to 2 hours.
});

client.on('messageCreate', (message) => { 
    if (message.author.bot) 
    return;

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
          .setImage('https://cdn.discordapp.com/attachments/1115193942724595804/1154474861423505428/Screen_Shot_2023-03-09_at_2.01.22_PM.png')
        interaction.reply({ embeds: [profile] });
    }

} ) 



//token through secret.
client.login(process.env.TOKEN);
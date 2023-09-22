require("dotenv").config();

const { Client, IntentsBitField, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

const roles = [
    {
        id: "781234567890123456",
        name: "Moderator",
        color: "#000000",
    },
    {
        id: "781234567890123457",
        name: "Administrator",
        color: "#000000",
    },
    {
        id: "781234567890123458",
        name: "Member",
        color: "#000000",
    },
]

client.on("ready", async (c) => {
    try {
        const channel = await client.channels.cache.get('1115193942724595804'); 
        if (!channel) return;

        const row = new ActionRowBuilder();

        roles.forEach((role) => {
            row.components.push(
                new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary));
    })
    } catch (error) {
        console.log(error);
        
    }
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN);

require('dotenv').config();

const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Replies with hello',
    },

    {
        name: 'buubs',
        description: 'Sends Buuuubiies Pics!',
    },

    {
        name: 'sum',
        description : "Adds numbers",
        options: [
            {
                name: 'first_number',
                description : 'Enter the first number',
                type: ApplicationCommandOptionType.Number,
                required: true,
                choices : [
                    {
                        name : "one",
                        value: 1,
                    },
                    {
                        name : "two",
                        value: 2,
                    },
                    {
                        name : "three",
                        value: 3,
                    },
                ]
            },
            {
                name: 'second_number',
                description : 'Choose the second number',
                type: ApplicationCommandOptionType.Number,
                required: true,
                choices : [
                    {
                        name : "one",
                        value: 1,
                    },
                    {
                        name : "two",
                        value: 2,
                    },
                    {
                        name: "Three",
                        value: 3,
                    },
                ]
            }
        ]
    },
    {
        name: "embed",
        description : "Creates a embedded message",
    },
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async() => {
    try {
        console.log('Registerin slash commands......');

        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
        { body: commands}
        );

        console.log('Slash commands registered!');
    }

    catch (error) {
        console.log(`There was an error: ${error}`)
    }
})();

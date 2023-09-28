const {CommandInteraction} = require('discord.js');

module.exports = {
    name: "interactionCreate",

    excute(interaction, client) {
        if(!interaction.isChatInputCommand())
        return;
        
        const command = client.commands.get(interaction.commandName);

        if(!command) {
            intearaction.reaply({content: "outdated command"});
        }

        command.excute(interaction, client);
    }
};
const {SlashCommandBuilder, CommandInteraction, PermissionFlagsBits} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong"),
    // .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    excute(interaction) {
        interaction.reply({content: "Pong", ephermal: true})
    }
}
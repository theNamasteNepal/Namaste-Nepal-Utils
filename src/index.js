require("dotenv").config();

const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "hey") {
    interaction.reply(`hello ${interaction.user.username}`);
  }

  if (interaction.commandName === "buubs") {
    interaction.reply(`https://tenor.com/bqOz2.gif`);
  }

  if (interaction.commandName == "sum") {
    const num1 = interaction.options.get("first_number").value;
    const num2 = interaction.options.get("second_number").value;

    interaction.reply(`The answer is ${num1 + num2}.`);
  }

  if (interaction.commandName == "embed") {
    const embed = new EmbedBuilder()
      .setTitle("This is a title")
      .setDescription("This is a description")
      .setColor("Random")
      .addFields({
        name: "Field Title",
        value: "This is some Value",
        inline: true,
      },
      {
        name: "2nd Field Title",
        value: "This is some Value",
        inline: true,
      },
      {
        name: "3rd Field Title",
        value: "This is some Value",
        inline: true,
      },
      {
        name: "4th Field Title",
        value: "This is some Value",
        inline: true,
      });

    interaction.reply({ embeds: [embed] });
  }
});

client.on('messageCreate', (message) => {
  if (message.content == "embeddey" || message.content == "Embeddey") {
    const embed = new EmbedBuilder()
      .setTitle("This is a title")
      .setDescription("This is a description")
      .setColor("Random")
      .addFields({
        name: "Field Title",
        value: "This is some Value",
        inline: true,
      },
      {
        name: "2nd Field Title",
        value: "This is some Value",
        inline: true,
      },
      {
        name: "3rd Field Title",
        value: "This is some Value",
        inline: true,
      },
      {
        name: "4th Field Title",
        value: "This is some Value",
        inline: true,
      });

    message.channel.send({ embeds: [embed] });
  }
})

client.login(process.env.TOKEN);

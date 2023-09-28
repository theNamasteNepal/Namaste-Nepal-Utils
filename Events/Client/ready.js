const { Client, ModalBuilder } = require('discord.js');

module.exports = {
	name: "ready",
	once: true,
	excute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
}
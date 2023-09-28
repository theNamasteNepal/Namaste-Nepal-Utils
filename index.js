const { Client, Events, GatewayIntentBits, Partials } = require("discord.js");
const { token } = require("./config.json");

const {Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const {User, Message, GuildMember, ThreadMember, Channel} = Partials;

const {loadEvents} = require('./Handlers/eventHandler')

const client = new Client(
	{ 
		intents: [Guilds, GuildMembers, GuildMessages],
		partials: [User, Message, GuildMember, ThreadMember, Channel],
	});

client.login(token).then(() => {
	loadEvents(client);
});

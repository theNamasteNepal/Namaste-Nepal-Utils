const { Client, Events, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { token } = require("./config.json");

const {Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const {User, Message, GuildMember, ThreadMember, Channel} = Partials;

const {loadEvents} = require('./Handlers/eventHandler');
const {loadCommands} = require('./Handlers/commandHandler');

const client = new Client(
	{ 
		intents: [Guilds, GuildMembers, GuildMessages],
		partials: [User, Message, GuildMember, ThreadMember, Channel],
	});

	
client.commands = new Collection();

client.login(token).then(() => {
	loadEvents(client);
	loadCommands(client);
});

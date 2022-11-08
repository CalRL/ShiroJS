const {Client, Events, GatewayIntentBits, Collection, Message, Partials } = require("discord.js");
require("dotenv").config()
const fs = require("node:fs");
const path = require("node:path");

const client = new Client({
    intents: ["7796"],
    presence: {
        activities: [{
            name: "with discord.js",
            type: "PLAYING"
        }],
        status: "online"
    }
});

const config = "./config.json";
const TOKEN = process.env.TOKEN;

// when the client is ready, events.clientready will be called
client.once("ready", c => {
    console.log("Ready!");
});

client.on("messageCreate", message => {
    if (message.author.bot === client.user.id) { return };
    if (message.author.id  == "242276511028084738" && message.content == "client.destroy") {
        message.channel.send("Destroying client...");
        console.log("Destroying client...")
        process.exit().catch(console.error())
    };
});

client.on(Events.InteractionCreate, async interaction =>{
    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) {
        console.error(`Command not found: ${interaction.commandName}`);
        return;
    }
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: "There was an error while executing this command!", ephemeral: true });
    }
})

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}


client.login(process.env.TOKEN);
//import everything
const Discord = require('discord.js');
const { EmbedBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder } = require("discord.js");
const chatgpt = require("chatgpt");


module.exports = {
    data: new SlashCommandBuilder()
        .setName("chatgpt")
        .setDescription("Chat GPT prompt.")
        .addStringOption(option =>
            option
                .setName("prompt")
                .setDescription('Chats with ChatGPT')
                .setRequired(true)
        ),
    async execute(interaction) {
        if(!(interaction.user.id in process.env.OWNER_ID)) {
            return interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true })
        } else {

        }
    }
}
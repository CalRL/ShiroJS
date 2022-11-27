const { EmbedBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder, InteractionResponse } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("say")
        .setDescription("Make the bot say something")
        .addStringOption(option =>
            option
                .setName("message")
                .setDescription("The message to say")
                .setRequired(true)
        ),
    async execute(interaction) {
        const message = interaction.options.getString("message");
            if (interaction.member.id !== "242276511028084738"){ return } else {
            interaction.deferReply()
            interaction.deleteReply()
            interaction.channel.send(message)
        }
    }
}

const Discord = require("discord.js");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("purge")
        .setDescription("Purges messages")
        .addIntegerOption(option => 
            option
                .setName("amount") 
                .setDescription("Amount of messages to purge")
                .setRequired(true)
                .setMinValue(1)
            ),  
    async execute(interaction) {
        const amount = interaction.options.getInteger("amount");
        if (interaction.member.permissions.has("MANAGE_MESSAGES")) {
            interaction.channel.bulkDelete(amount);
            interaction.reply({ content: `Purged ${amount} messages`, ephemeral: false })
        } else {
            interaction.reply({ content: `You don't have the permissions to do this!`, ephemeral: false })
        }
    }

}
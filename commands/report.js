const { SlashCommandBuilder, EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, Message } = require('discord.js');
const { model } = require('mongoose');
const { execute } = require('./shop');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("report")
        .setDescription("Report a user or bug")
        .addStringOption(option =>
            option
                .setName("type")
                .setDescription("What type of report is this?")
        ),
    async execute(interaction) {
        if (interaction.options.getString("type") == "bug") {
            const modal = new ModalBuilder()
                .setCustomId("bug-report")
                .setTitle("Bug Report")
                .addComponents([
                    new ActionRowBuilder().addComponents(
                        new TextInputBuilder()
                            .setCustomId("bug-report")
                            .setPlaceholder("Describe the bug here")
                            .setLabel("Bug Description")
                            .setStyle(TextInputStyle.Paragraph)
                            .setMinLength(4)
                            .setMaxLength(1000)
                            .setRequired(true)
                    )
                ])
                await interaction.showModal(modal);
        } if (interaction.options.getString("type") == "user") {
            const modal = new ModalBuilder()
                .setCustomId("user-report")
                .setTitle("User Report")
                .addComponents([
                    new ActionRowBuilder().addComponents(
                        new TextInputBuilder()
                            .setCustomId("user-report")
                            .setPlaceholder("User ID / Username + Discriminator")
                            .setLabel("User Description")
                            .setStyle(TextInputStyle.Short)
                            .setMinLength(4)
                            .setMaxLength(32)
                            .setRequired(true)
                ),
                    new ActionRowBuilder().addComponents(
                        new TextInputBuilder()
                            .setCustomId("user-report-desc")
                            .setPlaceholder("Enter the report reason here (max 1000 char)")
                            .setLabel("Report Reason")
                            .setStyle(TextInputStyle.Paragraph)
                            .setMinLength(4)
                            .setMaxLength(1000)
                            .setRequired(true)
                    )
                ])
                await interaction.showModal(modal);
                if(interaction.isModalSubmit()) {
                    const embed = new EmbedBuilder()
                        .setTitle("User Report")
                        .setDescription(`Reported by: ${interaction.user.tag} (${interaction.user.id})`)
                        .addField("Reported User", interaction.fields.getTextInputValue("user-report"))
                        .addField("Report Reason", interaction.fields.getTextInputValue("user-report-desc"))
                    //send
                    interaction.reply({ embeds: [embed] });
                    
                }
        }
            
            
    }
}

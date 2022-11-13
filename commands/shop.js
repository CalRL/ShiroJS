const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder } = require("discord.js");
const id = require("discord.js");
const economy = require("../economy/economy.js");
const profileSchema = require("../schemas/profile-schema.js");
const mongo = require("../structures/mongo.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("shop")
        .setDescription("View shop information")
        .addStringOption(option =>
            option
                .setName("buy")
                .setDescription("Buys an item from the shop")
                .setRequired(false)
        ),
    async execute(interaction) {
        const shop = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId("shop")
                    .setPlaceholder("Select an item to buy")
                    .addOptions([
                        {
                            label: "Shop 1",
                            description: "This is the first shop",
                            value: "1"
                        }
                    ])
            )
        mongo();
        const user = await interaction.member.user;
        const userData = await profileSchema.findOne({ userId: user.id }) || new profileSchema({ userId: user.id });
        return interaction.reply({ content: "Loading shop...", components: [shop] });
    }
}
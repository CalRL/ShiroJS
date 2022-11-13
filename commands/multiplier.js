const { EmbedBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder } = require("discord.js");
const id = require("discord.js");
const economy = require("../economy/economy.js");
const profileSchema = require("../schemas/profile-schema.js");
const mongo = require("../structures/mongo.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("multiplier")
        .setDescription("View your multiplier"),
    async execute( interaction ) {
        mongo();
        const user = interaction.member.user
        const userData = await profileSchema.findOne({ userId: user.id }) || new profileSchema({ userId: user.id })
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`Multiplier for ${user.tag}`)
            .setDescription(`Your multiplier is ${userData.multipliers.userCoinsMultiplier}x`)
        return interaction.reply({ embeds: [embed] })
    }
}
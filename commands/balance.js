const { EmbedBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder } = require("discord.js");
const id = require("discord.js");
const economy = require("../economy/economy.js");
const profileSchema = require("../schemas/profile-schema.js");
const mongo = require("../structures/mongo.js"); 
module.exports = {
    data: new SlashCommandBuilder()
        .setName("balance")
        .setDescription("returns the user's balance")
        .addUserOption(option => 
            option
                .setName("user") 
                .setDescription("The user to get the balance of")
),
    async execute(interaction) {
        mongo();
        const user = interaction.options.getUser("user") || interaction.member.user;
        const userData = await profileSchema.findOne({ userId: user.id }) || new profileSchema({ userId: user.id });
        const balanceEmbed = new EmbedBuilder()
        .setDescription(`Balance: ${userData.coins}`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        interaction.reply({ embeds: [balanceEmbed], ephemeral: false })
    }
}
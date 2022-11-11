const { EmbedBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder } = require("discord.js");
const id = require("discord.js");
const economy = require("../economy/economy.js");
const profileSchema = require("../schemas/profile-schema.js");
const mongo = require("../structures/mongo.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("addcoins")
        .setDescription("adds 100 coins")
        .addUserOption(option => 
            option
                .setName("user") 
                .setDescription("user to add coins to")
                .setRequired(false)
        
),
    async execute(interaction) {
        mongo();
        if (interaction.member.id !== "242276511028084738"){ return } else {
            const user = interaction.options.getUser("user") || interaction.member.user;
            const userData = await profileSchema.findOne({ userId: user.id }) || new profileSchema({ userId: user.id });
            userData.coins += 100;
            userData.save();
            interaction.reply({ content: `Added 100 coins to ${user.username}`, ephemeral: false })
        }
        
    }
}
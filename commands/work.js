const { EmbedBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder } = require("discord.js");
const id = require("discord.js");
const economy = require("../economy/economy.js");
const profileSchema = require("../schemas/profile-schema.js");
const mongo = require("../structures/mongo.js");
//define  prettyMilliseconds from the dynamic import function
const prettyMs = require("pretty-ms");

module.exports = {
    
}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("work")
        .setDescription("Work to obtain coins"),
    async execute(interaction) {
            mongo();
            const user = interaction.member.user
            const userData = await profileSchema.findOne({ userId: user.id }) || new profileSchema({ userId: user.id })

            if (userData.cooldowns.work > Date.now()) {
            return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor(0x0099FF)
                        .setDescription(`⌛ You can work again in **\`${prettyMs(userData.cooldowns.work - Date.now(), { verbose: true, secondsDecimalDigits: 0 })}\`**`)
                ],
                ephemeral: true
            })} else {

            const amount = Math.floor((Math.random() * (100 - 10 + 1)) + 10) * userData.multipliers.userCoinsMultiplier;

            userData.coins += amount
            userData.cooldowns.work = Date.now() + (1000 * 60 * 60)
            userData.save()
    
            const workEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setDescription(`You worked and earned \` ${amount} \``)

            return interaction.reply({ embeds: [workEmbed] })
            }
    }

}

const { EmbedBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder } = require('discord.js');
const RedditImageFetcher = require("reddit-image-fetcher");
const wait = require('node:timers/promises').setTimeout;
let helpContent;
module.exports = {
	data: new SlashCommandBuilder()
	.setName('reddit')
	.setDescription('Gets a post from a subreddit (IMG only)')	
	.addStringOption(option =>
		option
			.setName('search')
			.setDescription('Searches reddit')
			.setRequired(false),
),
	async execute(interaction) { 
		const args = interaction.options.getString(`search`)
        //uses RedditImageFetcher to get a random image from a subreddit, and then saves it to a variable outside the function
        const fetcher = RedditImageFetcher.fetch({
            subreddit: args,
        }).then((result) => {
            const embed = new EmbedBuilder()
            .setImage(result[0].image)
            .setTitle(`r/${args}`)
            .setFooter({text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
            .setTimestamp()
            interaction.reply({ embeds: [embed], ephemeral: false })
        });
    }
}
/*const body = await RedditImageFetcher.fetch({subreddit:args}).then(result => console.log(result)).then(result => (data = result))
		const embed = new EmbedBuilder()
			.setImage(data)
		console.log(data)*/
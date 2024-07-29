const { SlashCommandBuilder, EmbedBuilder} = require('@discordjs/builders');
const {PermissionFlagsBits} = require('discord.js')
const embed1 = new EmbedBuilder()
    .setTitle(":ping_pong: Pong!")
    .addFields(
		{ name: ':stopwatch:', value: 'Uptime: ${Math.round(interaction.client.uptime / 60000)} minutes'},
		{ name: ':sparkling_heart:', value: 'Websocket heartbeat: ${interaction.client.ws.ping}ms.'},
		{ name: ':round_pushpin:', value: 'Rountrip Latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms'},
	)
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    async execute(interaction) {
        const embed2 = new EmbedBuilder()
            .setTitle('Pinging...')
        const sent = await interaction.reply({ embeds: [embed2], fetchReply: true });
        const embed1 = new EmbedBuilder()
            .setTitle(":ping_pong: Pong!")
            .addFields(
                { name: `:stopwatch: Uptime: ${Math.round(interaction.client.uptime / 60000)} minutes`, value: ' '},
                { name: `:sparkling_heart: Websocket heartbeat: ${interaction.client.ws.ping}ms.`, value: ' '},
                { name: `:round_pushpin: Rountrip Latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`, value: ' '},
            )

        await interaction.editReply({embeds: [embed1]});
    },
};
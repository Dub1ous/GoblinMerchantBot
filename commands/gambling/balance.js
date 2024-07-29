const { SlashCommandBuilder, EmbedBuilder} = require('@discordjs/builders');
const {PermissionFlagsBits} = require('discord.js')
const {userData} = require('../../wallet-structure.js');
const { Database } = require('sqlite3');
const Sequelize = require('sequelize');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Displays your balance or the balance of another player'),
    async execute(interaction) {
        user = interaction.user.id
        const tag = await userData.findByPk(user);
        if (tag === null){
            await userData.create({
                userId: interaction.user.id,
                username: interaction.user.username,
                balance: 0,
            });
        const tag = await userData.findByPk(user);
        }
        const embed1 = new EmbedBuilder()
            .setTitle('Balance')
            .addFields({name: `${tag.balance}`, value: ' '})

        await interaction.reply({embeds: [embed1]});
    }
}
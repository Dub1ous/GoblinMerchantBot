const { SlashCommandBuilder, EmbedBuilder} = require('@discordjs/builders');
const {PermissionFlagsBits} = require('discord.js')
const {userData} = require('../../wallet-structure.js');
const { Database } = require('sqlite3');
const Sequelize = require('sequelize');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('add')
        .setDescription('Adds Balance to a Player')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)

        .addIntegerOption(option =>
            option.setName('amount')
                .setRequired(true)
                .setDescription('Amount of gold'))

        .addUserOption(option =>
            option.setName('user')
                .setRequired(true)
                .setDescription('User to add gold to')),
                
    async execute(interaction) {
        user = interaction.options.getUser('user')
        amount = interaction.options.getInteger('amount')
        balance2 = balance
        const tag = await userData.findByPk(user.id);
        if (tag === null){
            await userData.create({
                userId: user.id,
                username: user.username,
                balance: 0,
            });
            const tag = await userData.findByPk(user.id);
        }
        console.log(amount)
        console.log(tag.balance)
        await userData.update({ balance: balance2 += amount }, { where: { userId: user.Id } });
        const embed1 = new EmbedBuilder()
            .setTitle(`Added ${amount} gold to ${user.username}`)
        await interaction.reply({embeds: [embed1]});
},
}
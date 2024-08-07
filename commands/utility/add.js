const { SlashCommandBuilder, EmbedBuilder} = require('@discordjs/builders');
const {PermissionFlagsBits} = require('discord.js')
const {createTag, createFile, readFile} = require('../../createData.js')
const fs = require('fs')
const path = require('path')
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
        let tag = {}
        const filePath = path.join(__dirname, `../../userData/${user.id}.json`)
        console.log(filePath)
        const fileExists = fs.existsSync(filePath)
        console.log(fileExists)
        if (!fileExists){
            const tag = createTag(user)
            createFile(user, tag)
        }
        tag = readFile(user)
        tag.balance += amount
        createFile(user, tag)
        const embed1 = new EmbedBuilder()
            .setTitle(`Added ${amount} gold to ${user.username}`)
        await interaction.reply({embeds: [embed1]});
},
}
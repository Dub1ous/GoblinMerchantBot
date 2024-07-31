const { SlashCommandBuilder, EmbedBuilder} = require('@discordjs/builders');
const {PermissionFlagsBits} = require('discord.js')
const fs = require('fs')
const {createTag, createFile, readFile} = require('../../createData.js')
const path = require('path')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Displays your balance or the balance of another player'),
    async execute(interaction) {
        const user = interaction.user
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
        const embed1 = new EmbedBuilder()
            .setTitle('Balance')
            .addFields({name: `Gold: ${tag.balance}`, value: ' '})
        await interaction.reply({embeds: [embed1]});
    }
}
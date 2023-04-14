const { MessageEmbed } = require('discord.js');

class HelpCommand {
    constructor() {
        this.name = "help";
        this.description = "Affiche la liste des commandes.";
        this.usage = "/help";
    }

    async execute(bot, interaction) {
        const commandsEmbed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle('Liste des commandes')
            .setDescription('Voici la liste des commandes disponibles :')
            .addFields(
                { name: '/ban', value: 'Bannir un utilisateur.' },
                { name: '/ping', value: 'Afficher le temps de réponse du bot.' },
                { name: '/invite', value: 'Obtenir le lien d\'invitation pour inviter le bot sur votre serveur.' }
            )
            .setFooter(bot.user.username, bot.user.avatarURL());

        await interaction.reply({ embeds: [commandsEmbed] });
    }
}

module.exports = HelpCommand;

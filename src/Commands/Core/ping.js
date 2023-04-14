const { MessageEmbed } = require('discord.js');

class command {
    constructor() {
        this.name = "ping",
        this.description = "Affiche le temps de réponse du bot."
    }

    async execute(bot, interaction) {
        const PING = new MessageEmbed()
            .setColor('Blue')
            .setTitle('**Ping**')
            .setDescription("🏓 Pong")
            .addFields(
                { name: '🔧 - Latence :', value: `${Date.now() - interaction.createdTimestamp}ms.` },
            )
            .setTimestamp()
            .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

        interaction.reply({ embeds: [PING] });
    }
}

module.exports = command
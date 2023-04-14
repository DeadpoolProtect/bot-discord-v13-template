const { MessageEmbed } = require('discord.js');

class InviteCommand {
    constructor() {
        this.name = "invite";
        this.description = "Affiche le lien d'invitation pour inviter le bot sur votre serveur.";
    }
    
    async execute(bot, interaction) {
        const inviteLink = `https://discord.com/api/oauth2/authorize?client_id=1025079577447514215&permissions=8&scope=bot`;
        const inviteEmbed = new MessageEmbed()
            .setColor('BLEU')
            .setTitle('Inviter le bot')
            .setDescription(`Pour inviter le bot sur votre serveur, cliquez [ici](${inviteLink}).`)
            .setFooter(bot.user.username, bot.user.avatarURL());
        await interaction.reply({ embeds: [inviteEmbed] });
    }
}

module.exports = InviteCommand;

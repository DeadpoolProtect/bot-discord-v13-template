const { Permissions, MessageEmbed } = require('discord.js');

class BanCommand {
  constructor() {
    this.name = 'ban';
    this.description = 'Bannir un utilisateur du serveur';
    this.permissions = [
      Permissions.FLAGS.BAN_MEMBERS,
      Permissions.FLAGS.KICK_MEMBERS,
    ];
  }

  async execute(bot, interaction) {
    const user = interaction.options.getUser('utilisateur');
    const reason = interaction.options.getString('raison');

    if (!user) {
      return interaction.reply({
        content: 'Vous devez mentionner un utilisateur à bannir',
        ephemeral: true,
      });
    }

    const member = interaction.guild.members.cache.get(user.id);

    if (!member) {
      return interaction.reply({
        content: 'Cet utilisateur n\'est pas membre du serveur',
        ephemeral: true,
      });
    }

    if (!member.bannable) {
      return interaction.reply({
        content: 'Je n\'ai pas les permissions nécessaires pour bannir cet utilisateur',
        ephemeral: true,
      });
    }

    await member.ban({ reason });

    const banEmbed = new MessageEmbed()
      .setColor('RED')
      .setTitle('Bannissement')
      .setDescription(`**${member.user.tag}** a été banni du serveur`)
      .addField('Raison', reason || 'Aucune')
      .setTimestamp()
      .setFooter(bot.user.username, bot.user.avatarURL());

    await interaction.reply({
      embeds: [banEmbed],
      ephemeral: false,
    });
  }
}

module.exports = BanCommand;

const discord = require('discord.js')
const db = require('quick.db');

exports.run = async(client, message, args) => {


    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(" Bu komutu kullanabilmek için`Yönetici` yetkisine sahip olmalısın.");


    let rol = message.mentions.roles.first()  || message.guild.channels.cache.get(args[0])     
    if (!kanal) {
   return  message.channel.send("**Bir Kanal Belirtin!**")
    }
    db.set(`skanal_${message.guild.id}`, kanal.id)
    const embed2 = new discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))  
    .setColor("#f1ebeb")
    .setDescription(`Sohbet Kanalı Başarıyla Ayarlandı! : ${kanal}`)
    message.channel.send(embed2)
      
    }
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'sohbetkanal',
}
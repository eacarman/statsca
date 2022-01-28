const discord = require('discord.js')
const db = require('quick.db');

exports.run = async(client, message, args) => {


    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(" Bu komutu kullanabilmek için`Yönetici` yetkisine sahip olmalısın.");
let kanal = message.mentions.channels.first()   
  if(kanal){
    
    return  message.channel.send("**Bir Kanal Belirtin!**")
       
} else {
    
    const embed2 = new discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))  
    .setColor("#f1ebeb")
    .setDescription(`Giriş Kanalı Başarıyla Ayarlandı! : ${kanal}`)
    message.channel.send(embed2)
  db.set(`gkanal_${message.guild.id}`, kanal.id)
}  
    }
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'girişkanal',
}
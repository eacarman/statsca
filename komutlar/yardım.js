const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
  
  const prefix = ayarlar.prefix
  
  const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("Luffyy Ayarlamalı Kayıt Botu")
    .setColor("RANDOM")
    .setFooter(`${message.author} tarafından istendi.`, message.author.avatarURL())
    .addField(
      "__Yardım Menüsü__", `
      
\ \`${prefix}erkekrol\` : **Erkek Rolünü Ayarlar**

\ \`${prefix}kızrol\` : **Kız Rolünü Ayarlar**

\ \`${prefix}kayıtkanal\` : **Kayıt Kanalını Ayarlar**

\ \`${prefix}sohbetkanal\` : **Sohbet Kanalını Ayarlar**

\ \`${prefix}girişkanal\` : **Giriş Kanalını Ayarlar**

\ \`${prefix}tag\` : **Tag Ayarlar ( İsterseniz Ayarlamayın! )**

\ \`${prefix}yetkilirol\` : **Yetkili Rolü Ayarlar**

\ \`${prefix}kayıtsızrol\` : **Kayıtsız Rolü Ayarlar**

\ \`${prefix}kayıtsıfırla\` : **Kayıt Ayarlarını Sıfırlar**

`);
 
  message.channel.send(embed);                                          
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0
};



exports.help = {
  name: "yardım-menüsü",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};
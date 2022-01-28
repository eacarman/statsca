const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
  
  const prefix = ayarlar.prefix
  
  
   const luffyy = await client.users.fetch("779005712113467392");//buraya dokunma!
  const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("Luffyy Ayarlamalı Kayıt Botu")
    .setColor("RANDOM")
    .setFooter(`Luffyy Was Here!`, luffyy.avatarURL({ dynamic: true }))//buraya dokunma. bot kapanır aga öxzçlişzxö :D
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

\ \`${prefix}e\` : **Erkek Kayıt Yapr**

\ \`${prefix}k\` : **Kız Kayıt Yapar**

\ \`${prefix}şablon\` : **Şablon Atar**

`);
 
  message.channel.send(embed);                                          
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};



exports.help = {
  name: "yardım",
};
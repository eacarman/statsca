const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
  
  const prefix = ayarlar.prefix
  
  
   const luffyy = await client.users.fetch("904375931655815188");//buraya dokunma!
  const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("Mnetor RolePlay Kayıt Botu")
    .setColor("#ff0000")
    .setFooter(`Mentor RolePlay`, luffyy.avatarURL({ dynamic: true }))//buraya dokunma. bot kapanır aga öxzçlişzxö :D
    .addField(
      "__Yardım Menüsü__", `
      
\ \`${prefix}erkekrol\` : **Erkek Rolünü Ayarlar**

\ \`${prefix}kayıtkanal\` : **Kayıt Kanalını Ayarlar**

\ \`${prefix}sohbetkanal\` : **Sohbet Kanalını Ayarlar**

\ \`${prefix}girişkanal\` : **Giriş Kanalını Ayarlar**

\ \`${prefix}tag\` : **Tag Ayarlar ( İsterseniz Ayarlamayın! )**

\ \`${prefix}yetkilirol\` : **Yetkili Rolü Ayarlar**

\ \`${prefix}kayıtsızrol\` : **Kayıtsız Rolü Ayarlar**

\ \`${prefix}kayıtsıfırla\` : **Kayıt Ayarlarını Sıfırlar**

\ \`${prefix}e\` : **Erkek Kayıt Yapr**

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
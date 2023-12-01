const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
  
  const prefix = ayarlar.prefix
  
  
   
  const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("Kayıt Botu")
    .setColor("#ff0000")
    .setFooter(`SCA Yardım Menüsü`)
    .addField(
      "__Yardım Menüsü__", `
      
\ \`${prefix}y-kayıt\` : **kayıt komutlarını gösterir**

\ \`${prefix}deneme\` : **boş**





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
  name: "yardım",
};
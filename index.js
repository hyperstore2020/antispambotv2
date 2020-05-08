const Discord = require('discord.js');
const fs=require('fs');
const client = new Discord.Client();
client.login("Your token here!");


let messagos={};
let warns={};
try{warns=JSON.parse(fs.readFileSync('warns.json','utf8',(err)=>{if(err)console.log(err);}));}catch(e){console.log(e);warns={};}

let MuteRoleID="ID of role in here";

client.on("message",async message=>{
if(message.author.bot) return;
if(!messagos[message.author.id])messagos[message.author.id]=0;
messagos[message.author.id]++;setTimeout(function(){messagos[message.author.id]--;},1000);
if(messagos[message.author.id]>2){message.reply("Slow down a little!");if(!warns[message.author.id]){warns[message.author.id]=1;}else{warns[message.author.id]++;
if(warns[message.author.id]>2.5&&warns[message.author.id]<4){
let role = message.guild.roles.cache.get(MuteroleID);
if(role)message.member.addRole(role);
setTimeout(function(){message.member.removeRole(role);},600000);
}else if(warns[message.author.id]>4.5&&warns[message.author.id]<6){
let role = message.guild.roles.cache.get(MuteroleID);
if(role)message.member.addRole(role);
setTimeout(function(){message.member.removeRole(role);},86400000);
}else if(warns[message.author.id]>9&&warns[message.author.id]<29.5){
message.member.kick("10+ warnings");
}else if(warns[message.author.id]>29.5&&warns[message.author.id]<49.5){
message.member.ban("30+ warnings");
setTimeout(function(){message.guild.members.unban(message.author.id);},604800000);
}else if(warns[message.author.id]>49.5){
message.member.ban("50 warnings. Bye bye");
}
}save();}
});
function save(){
fs.writeFile('warns.json',JSON.stringify(warns),(err)=>{if(err)console.log(err);});
}

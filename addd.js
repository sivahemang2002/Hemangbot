module.exports = (client) =>
client.on('guildMemberAdd', (guildMember) => {
    
    guildMember.addRole(guildMember.guild.roles.cache.find(role => role.id === "811822746937065503"));
 });
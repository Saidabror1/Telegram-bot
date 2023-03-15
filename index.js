const TELEGRAM_BOT_TOKEN = ""

const TeleBot = require('telebot')
const bot = new TeleBot(TELEGRAM_BOT_TOKEN)
const chatIds = []
const CronJob = require('cron').CronJob
const job = new CronJob('0/5 * * * * *', function(){
    console.log('You will see this message every 5 seconds')
    chatIds.forEach((chatId) =>{
        bot.sendMessage(chatId,'Salom')
    });
}, null,true)
job.start()

bot.on('text',(msg)=> msg.reply.text('Kelgan habar: ' + msg.text))

bot.on(['/start'],(msg) =>{
    let chatId = msg.chat.id
    if(!chatIds.push(chatId))
    msg.reply.text('Boshladik!')
})

bot.on(['/stop'],(msg) =>{
    let chatId = msg.chat.id
    chatIds.pop(chatId)
})

bot.start()
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN; // apikey
const bot = new TelegramBot(token, { polling: true });

// 팀원들의 chatId
let teamChatId = [process.env.JIHOO_ID];

teamChatId.map(id => {
    bot.sendMessage(id, '알림이 도착했습니다');
})

// 응답이 오면 전송해줌
bot.on('message', (msg) => {
})

// "/chat"으로 시작하면 거기에 대한 답변을 해줌
bot.onText(/\/chat (.+)/, (msg, match) => {
    const chatId = process.env.JIHOO_ID;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
})
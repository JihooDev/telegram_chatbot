require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN; // apikey
const bot = new TelegramBot(token, { polling: true });

// 팀원들의 chatId
let teamChatId = [process.env.JIHOO_ID];

let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log('connect');
})

app.post('/send', (req, res) => {
    try {
        console.log(req.body);
        if (req.body.result) {
            teamChatId.map(id => {
                bot.sendMessage(id, '팀마파 문의가 들어왔습니다');
            })
            res.send({
                result: true,
                api_status: 200
            });
        } else {
            throw Error('error : result = false');
        }
    } catch (error) {
        res.send({
            result: false,
            error_code: error,
            api_status: 400
        })
    }
})
const telegram = require('./telegram');

module.exports.processWebhook = async event => {
    const body = JSON.parse(event.body);

    console.log(body); // Логируем body

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
        const { chat, text } = body.name;

        await telegram.sendMessage({ chat_id: -614387571,
           text:
           '#' + getRandomInRange(100, 100000)
            + "\n" +
            body.name
            + "\n" +
            body.vd
            + "\n" +
            body.tp
            + "\n" +
            body.tel
            + "\n" +
            body.email
         });


    return { statusCode: 200 };
};

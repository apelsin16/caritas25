const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '1875801032:AAEz21lwP8KzALf6NU6-qFJaXsQx7I-OH-0';
const bot = new TelegramBot(TOKEN, {polling: true});

const keyboard = [
   [ {
        text: '10.00', // текст на кнопке
        callback_data: '10' // данные для обработчика событий
    },
     {
        text: '12.00', // текст на кнопке
        callback_data: '12' // данные для обработчика событий
    },
     {
        text: '14.00', // текст на кнопке
        callback_data: '14' // данные для обработчика событий
    }],
]

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    console.log(query);

    if (query.data === '10') { // если 10
      bot.sendPhoto(chatId, 'kostel.jpg', { // прикрутим клаву
        reply_markup: {
          inline_keyboard: keyboard
        }
      });
      bot.sendMessage(chatId, 'О 10.00 почнеться Богослужіння в костелі Св. Миколая')
    }  
    if (query.data === '12') { // если 12
      bot.sendPhoto(chatId, 'dd2c3fc4b0.jpg', { // прикрутим клаву
        reply_markup: {
          inline_keyboard: keyboard
        }
      });
      bot.sendMessage(chatId, 'О 12.00 запрошуємовсіх на обід в ресторан "Кувшин"')
    }

    if (query.data === '14') { // если 14
        bot.sendPhoto(chatId, 'c33552b6c9.jpg', { // прикрутим клаву
            reply_markup: {
              inline_keyboard: keyboard
            }
          });
          bot.sendMessage(chatId, 'О 14.00 запрошуємовсіх на пробіжку')
      } 
    //   else {
    //   bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', {
    //     // прикрутим клаву
    //     reply_markup: {
    //       inline_keyboard: keyboard
    //     }
    //   });
    // }
  });

  bot.on('message', (msg) => {
    const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал
    const name = msg.chat.first_name // Получаем имя пользователя
    // отправляем сообщение
    bot.sendMessage(chatId, `Пан(і) ${name}. Вітаємо на урочистих подіях на честь святкування 25-річчя Карітас Україна. Ви можете обрати час щоб ознайомитися з програмою.`, { // прикрутим клаву
          reply_markup: {
              inline_keyboard: keyboard
          }
      });
  });
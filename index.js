const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '1875801032:AAEz21lwP8KzALf6NU6-qFJaXsQx7I-OH-0';
const bot = new TelegramBot(TOKEN, {polling: true});

const keyboard = [
  [ {
    text: 'Українська', // текст на кнопке
    callback_data: 'ukrainian' // данные для обработчика событий
  },
    {
      text: 'English', // текст на кнопке
      callback_data: 'english' // данные для обработчика событий
    },
    {
      text: 'Deutsch', // текст на кнопке
      callback_data: 'german' // данные для обработчика событий
    }],
]

const backUA = [
  [
    {
      text: 'Назад', // текст на кнопке
      callback_data: 'ukrainian' // данные для обработчика событий
    }
  ]
]

const backEN = [
  [
    {
      text: 'Назад', // текст на кнопке
      callback_data: 'english' // данные для обработчика событий
    }
  ]
]

const backDE = [
  [
    {
      text: 'Назад', // текст на кнопке
      callback_data: 'german' // данные для обработчика событий
    }
  ]
]

const keyboardUA = [
  [ {
    text: 'Програма', // текст на кнопке
    callback_data: 'programUA' // данные для обработчика событий
  },
    {
      text: 'Локації', // текст на кнопке
      callback_data: 'churchUA' // данные для обработчика событий
    },
    {
      text: 'Допомога', // текст на кнопке
      callback_data: 'helpUA' // данные для обработчика событий
    }],
]

const keyboardEN = [
  [ {
    text: 'Program', // текст на кнопке
    callback_data: 'programEN' // данные для обработчика событий
  },
    {
      text: 'Locations', // текст на кнопке
      callback_data: 'churchEN' // данные для обработчика событий
    },
    {
      text: 'Help', // текст на кнопке
      callback_data: 'helpEN' // данные для обработчика событий
    }],
]

const keyboardDE = [
  [ {
    text: 'Veranstaltungsprogramm', // текст на кнопке
    callback_data: 'programDE' // данные для обработчика событий
  },
    {
      text: 'Standorte', // текст на кнопке
      callback_data: 'churchDE' // данные для обработчика событий
    },
    {
      text: 'Helfe', // текст на кнопке
      callback_data: 'helpDE' // данные для обработчика событий
    }],
]

const keyboardLocationUA = [
    [
      {
        text: 'Храм', // текст на кнопке
        callback_data: 'churchUA' // данные для обработчика событий
      },
      {
        text: 'Ресторан', // текст на кнопке
        callback_data: 'restaurantUA' // данные для обработчика событий
      },
      {
        text: 'Готель', // текст на кнопке
        callback_data: 'hotelUA' // данные для обработчика событий
      }
    ],
    [
        {
          text: 'Назад', // текст на кнопке
          callback_data: 'ukrainian' // данные для обработчика событий
        }
    ]
  ]

const keyboardLocationEN = [
  [
    {
      text: 'Храм', // текст на кнопке
      callback_data: 'churchEN' // данные для обработчика событий
    },
    {
      text: 'Ресторан', // текст на кнопке
      callback_data: 'restaurantEN' // данные для обработчика событий
    },
    {
      text: 'Готель', // текст на кнопке
      callback_data: 'hotelEN' // данные для обработчика событий
    }
  ],
  [
    {
      text: 'Назад', // текст на кнопке
      callback_data: 'english' // данные для обработчика событий
    }
  ]
]

const keyboardLocationDE = [
  [
    {
      text: 'Храм', // текст на кнопке
      callback_data: 'churchDE' // данные для обработчика событий
    },
    {
      text: 'Ресторан', // текст на кнопке
      callback_data: 'restaurantDE' // данные для обработчика событий
    },
    {
      text: 'Готель', // текст на кнопке
      callback_data: 'hotelDE' // данные для обработчика событий
    }
  ],
  [
    {
      text: 'Назад', // текст на кнопке
      callback_data: 'german' // данные для обработчика событий
    }
  ]
]




bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    const name = query.message.chat.first_name // Получаем имя пользователя

    switch ( query.data ) {
      case 'ukrainian':
        bot.sendMessage(chatId, `Вітаємо Вас пане(і) ${name} на урочистих подіях на честь святкування 25-річчя Карітас Україна`, { // прикрутим клаву
          reply_markup: {
            inline_keyboard: keyboardUA
          }});
        break;
      case 'english':
        bot.sendMessage(chatId, `Congratulations to Mr or Mrs ${name} on the celebrations of the 25th anniversary of Caritas Ukraine`, {
          reply_markup: {
            inline_keyboard: keyboardEN
          }});
        break;
      case 'german':
        bot.sendMessage(chatId, `Herzlichen Glückwunsch an Herr oder Frau ${name} zu den Feierlichkeiten zum 25-jährigen Bestehen der Caritas Ukraine`, { // прикрутим клаву
          reply_markup: {
            inline_keyboard: keyboardDE
          }
        })
        break;
      case 'churchUA':
        bot.sendVenue(chatId, 50.45321488876344, 30.52507432569393, 'Собор Святого Александра', 'вулиця Костьольна, 17, Київ, 01001',
            { // прикрутим клаву
              reply_markup: {
                inline_keyboard: keyboardLocationUA
        }})
        // bot.sendMessage(chatId, 'Сайт https://st-alexander.org.ua/')
        break;
      case 'restaurantUA': //50.452766284274645, 30.53085249067206
        bot.sendVenue(chatId, 50.452766284274645, 30.53085249067206, 'Ресторан грузинської кухні "Сапераві"', 'вулиця Костьольна, 17, Київ',
            { // прикрутим клаву
              reply_markup: {
                inline_keyboard: keyboardLocationUA
              }})
        break;
      case 'hotelUA'://50.451565726839625, 30.52794845911215
        bot.sendVenue(chatId, 50.451565726839625, 30.52794845911215, 'Готель "Дніпро"', 'вулиця Грушевского 1в, Киев',
            { // прикрутим клаву
              reply_markup: {
                inline_keyboard: keyboardLocationUA
              }})
        break;
      case 'churchEN':
        bot.sendVenue(chatId, 50.45321488876344, 30.52507432569393, 'Собор Святого Александра EN', 'вулиця Костьольна, 17, Київ, 01001',
            { // прикрутим клаву
              reply_markup: {
                inline_keyboard: keyboardLocationEN
              }})
        // bot.sendMessage(chatId, 'Сайт https://st-alexander.org.ua/')
        break;
      case 'restaurantEN': //50.452766284274645, 30.53085249067206
        bot.sendVenue(chatId, 50.452766284274645, 30.53085249067206, 'Ресторан грузинської кухні "Сапераві" EN', 'вулиця Костьольна, 17, Київ',
            { // прикрутим клаву
              reply_markup: {
                inline_keyboard: keyboardLocationEN
              }})
        break;
      case 'hotelEN'://50.451565726839625, 30.52794845911215
        bot.sendVenue(chatId, 50.451565726839625, 30.52794845911215, 'Готель "Дніпро" EN ', 'вулиця Грушевского 1в, Киев ',
            { // прикрутим клаву
              reply_markup: {
                inline_keyboard: keyboardLocationEN
              }})
        break;
      case 'churchDE':
        bot.sendVenue(chatId, 50.45321488876344, 30.52507432569393, 'Собор Святого Александра DE', 'вулиця Костьольна, 17, Київ, 01001',
            { // прикрутим клаву
              reply_markup: {
                inline_keyboard: keyboardLocationDE
              }})
        // bot.sendMessage(chatId, 'Сайт https://st-alexander.org.ua/')
        break;
      case 'restaurantDE': //50.452766284274645, 30.53085249067206
        bot.sendVenue(chatId, 50.452766284274645, 30.53085249067206, 'Ресторан грузинської кухні "Сапераві" DE', 'вулиця Костьольна, 17, Київ',
            { // прикрутим клаву
              reply_markup: {
                inline_keyboard: keyboardLocationDE
              }})
        break;
      case 'hotelDE'://50.451565726839625, 30.52794845911215
        bot.sendVenue(chatId, 50.451565726839625, 30.52794845911215, 'Готель "Дніпро" DE', 'вулиця Грушевского 1в, Киев EN',
            { // прикрутим клаву
              reply_markup: {
                inline_keyboard: keyboardLocationDE
              }})
        break;
      case 'programUA':
        bot.sendMessage(chatId, `
          1. Храм 10.00-12.00
          2. Ресторан 12.00-14.00
          3. Готель           
        `,
            { // прикрутим клаву
              reply_markup: {
                inline_keyboard: backUA
              }})
        break;
      case 'programEN':
        bot.sendMessage(chatId, `
          1. Храм 10.00-12.00 EN
          2. Ресторан 12.00-14.00 EN
          3. Готель EN 
        `,
            { // прикрутим клаву
              reply_markup: {
                inline_keyboard: backEN
              }})
        break;
      case 'programDE':
        bot.sendMessage(chatId, `
          1. Храм 10.00-12.00 DE
          2. Ресторан 12.00-14.00 DE
          3. Готель DE 
        `,
            { // прикрутим клаву
              reply_markup: {
                inline_keyboard: backDE
              }})
        break;
    }
});

  bot.on('message', (msg) => {
    const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал
    // const name = msg.chat.first_name // Получаем имя пользователя
    // отправляем сообщение
    bot.sendMessage(chatId, `Оберіть мову | Choose language | Wählen Sie eine Sprache`, { // прикрутим клаву
          reply_markup: {
              inline_keyboard: keyboard
          }
      });
  });

// .sendContact(chatId, phoneNumber, firstName, [options])

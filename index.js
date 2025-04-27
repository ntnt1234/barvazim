const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'barvazimmm.aternos.me',
  port: 14658,
  version: '1.20.4',
  username: 'pizza247',
  auth: 'offline'
});

bot.on('spawn', () => {
  console.log('✅ הבוט התחבר לשרת!');

  bot.setControlState('forward', true); // הולך קדימה

  setTimeout(() => {
    bot.chat('/login @@##$$'); // שולח את הסיסמה
  }, 5000);
});

bot.on('error', (err) => {
  console.log('❌ שגיאה בבוט:', err);
});

bot.on('end', () => {
  console.log('⚠️ הבוט התנתק מהשרת');
});

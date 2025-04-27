const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'barvazimmm.aternos.me',   // כתובת השרת
    port: 14658,                     // פורט
    version: '1.20.4',               // גרסת מיינקרפט
    username: 'pizza247',            // שם הבוט
    auth: 'offline'                  // התחברות ללא פרימיום
  });

  bot.on('spawn', () => {
    console.log('✅ הבוט התחבר לשרת!');
    
    // לגרום לבוט ללכת קדימה
    bot.setControlState('forward', true);

    // אחרי 5 שניות שולח את הסיסמה
    setTimeout(() => {
      bot.chat('/login @@##$$');  // שים פה את הסיסמה האמיתית שלך
    }, 5000);
  });

  bot.on('error', (err) => {
    console.log('❌ שגיאה בבוט:', err);
  });

  bot.on('end', () => {
    console.log('⚡ הבוט התנתק! מנסה להתחבר שוב בעוד 5 שניות...');
    setTimeout(createBot, 5000); // מנסה להתחבר מחדש
  });
}

// מתחיל להפעיל את הבוט
createBot();

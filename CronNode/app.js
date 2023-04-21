const cron = require('node-cron');
const { syncDB } = require('./Task/sync-db');

console.log('Start App');

cron.schedule('1-59/5 * * * * *', syncDB );

import cron from 'node-cron';
import axios from 'axios';

const url = 'https://timnasa-txmd-1-agzl.onrender.com';

cron.schedule('*/14 * * * *', async () => {
  try {
    await axios.get(url);
    console.log('Service pinged successfully');
  } catch (error) {
    console.error('Error pinging service:', error);
  }
});

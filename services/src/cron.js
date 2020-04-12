import 'dotenv/config'
import axios from 'axios';
import cron from 'node-cron'

const axiosInstance = axios.create({
  baseURL: process.env.MANGA_EDEN_URL
})

const seed = async () => {
  const res = await axiosInstance.get();
  console.log(res.data.manga.length);
}

seed();

cron.schedule('0 * * * *', () => {
  console.log('running a task every hour');
});


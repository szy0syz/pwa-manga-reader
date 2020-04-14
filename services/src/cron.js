import 'dotenv/config';
import { fetchAllMangas } from '#root/mangaSources/mangaEden';
import cron from 'node-cron';
import '#root/db/connection';
import Manga from '#root/db/models/Manga';


// axiosInstance.interceptors.response.use((res) => {
//   if (res.config.baseURL === process.env.MANGA_EDEN_URL) {
//     res.data = res.data.manga.map(
//       ({
//         a: alias,
//         c: categories,
//         h: hits,
//         i: _id,
//         im: image,
//         s: status,
//         t: title,
//         ld: lastUpdated,
//       }) => ({
//         _id,
//         alias,
//         categories,
//         hits,
//         image,
//         status,
//         title,
//         lastUpdated,
//       })
//     );
//   }
//   return res;
// });

const seed = async () => {
  const res = await fetchAllMangas();
  const mangas = transformMangaEden(res.data.manga);
  await Manga.insertMany(mangas);
  console.log('[seeded]');
};

seed();

/*
{
  _id: '5db37427719a168daca60ff5',
  alias: 'haunted',
  categories: [],
  hits: 0,
  image: null,
  status: 1,
  title: 'HAUNTED (ホーンテッド)'
}
*/

cron.schedule('0 * * * *', () => {
  console.log('running a task every hour');
});

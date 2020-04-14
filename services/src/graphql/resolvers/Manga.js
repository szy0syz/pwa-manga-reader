import { fetchMangaInfo } from '#root/mangaSources/mangaEden';

export default {
  id: (mangaObj) => mangaObj._id,
  info: async (mangaObj) => {
    const res = await fetchMangaInfo({ mangaId: mangaObj.id });

    return {
      chapters: res.data.chapters,
      id: mangaObj.id,
    };
  },
  lastUpdated: (mangaObj) => new Date(mangaObj.lastUpdated * 1000),
};

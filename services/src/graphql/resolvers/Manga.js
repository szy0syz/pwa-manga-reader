import { fetchMangaInfo } from '#root/mangaSources/mangaEden';
export default {
  id: (mangaObj) => mangaObj._id,
  info: async (mangaObj) => {
    const res = await fetchMangaInfo({ mangaId: mangaObj.id });

    return {
      ...res.data,
      id: mangaObj.id,
    };

    // return {
    //   chapters: [
    //     {
    //       id: 1,
    //       lastUpdated: new Date(),
    //       number: 1,
    //       title: 'Chapter 1',
    //     },
    //     {
    //       id: 2,
    //       lastUpdated: new Date(),
    //       number: 2,
    //       title: 'Chapter 2',
    //     },
    //   ],
    //   id: mangaObj.id,
    // };
  },
  lastUpdated: (mangaObj) => new Date(mangaObj.lastUpdated * 1000),
};

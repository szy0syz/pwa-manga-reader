import globalAxios from 'axios';

const transformMangas = (mangas) =>
  mangas
    .filter((manga) => manga.ld)
    .map(
      ({
        a: alias,
        c: categories,
        h: hits,
        i: _id,
        im: image,
        s: status,
        t: title,
        ld: lastUpdated,
      }) => ({
        _id,
        alias,
        categories,
        hits,
        image,
        status,
        title,
        lastUpdated,
      })
    );

export const axios = globalAxios.create({
  baseURL: process.env.MANGA_EDEN_URL,
});

export const fetchAllMangas = () => (lang) => {
  const lanKey = { en: 0 }[lang];
  return axios.get(`list/${lanKey}`).then((res) => {
    res.data.manga = transformMangas(res.data.manga);
    return res;
  });
};

export const fetchMangaInfo = ({ mangaId }) => {
  return axios.get(`manga/${mangaId}`);
};

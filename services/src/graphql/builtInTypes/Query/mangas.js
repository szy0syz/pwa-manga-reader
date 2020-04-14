import Manga from '#root/db/models/Manga'

const mangasResolver = () => {
  return Manga.find({});
};

export default mangasResolver;

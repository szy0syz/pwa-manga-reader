import Manga from '#root/db/models/Manga';

const mangaResolver = (_, args) => {
  return Manga.findById(args.id);
};

export default mangaResolver;

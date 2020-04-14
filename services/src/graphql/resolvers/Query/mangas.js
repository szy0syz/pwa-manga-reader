import Manga from "#root/db/models/Manga";

const mangasResolver = () => {
  return Manga.find({}).sort({ lastUpdated: -1 });
};

export default mangasResolver;

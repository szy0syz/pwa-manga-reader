import * as Query from "./builtInTypes/Query";

const resolvers = {
  Query,
  Manga: {
    id: mangaObj => mangaObj._id
  }
};

export default resolvers;

// import { GraphQLScalarType } from "graphql";
import Manga from "./Manga";
import * as Query from "./Query";

const resolvers = {
  // Date: new GraphQLScalarType({
  //   name: "Date",
  //   description: "Date",
  //   serialize(timestamp) {
  //     return new Date(timestamp * 1000);
  //   },
  // }),
  Query,
  Manga,
};

export default resolvers;

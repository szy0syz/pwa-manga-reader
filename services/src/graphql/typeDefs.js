import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Manga {
    id: ID!
    image: String!
    title: String!
  }

  type Query {
    hello: String
    mangas: [Manga]!
  }
`;

export default typeDefs;

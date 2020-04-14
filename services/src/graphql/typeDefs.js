import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Date

  type Manga {
    id: ID!
    image: String
    title: String!
    lastUpdated: Date
  }

  type Query {
    hello: String
    mangas: [Manga]!
  }
`;

export default typeDefs;

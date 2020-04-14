import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Date

  type Chapter {
    id: ID!
    number: Int!
    title: String
    lastUpdated: Date!
  }

  type Manga {
    id: ID!
    info: MangaInfo!
    image: String
    title: String!
    lastUpdated: Date
  }

  type MangaInfo {
    chapters: [Chapter!]!
    id: ID!
  }

  type Query {
    manga(id: ID!): Manga
    mangas: [Manga]!
  }
`;

export default typeDefs;

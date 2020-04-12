import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import resolvers from '../graphql/resolvers';
import typeDefs from '../graphql/typeDefs';

const port = process.env.PORT || 3000;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

apolloServer.applyMiddleware({ app, path: '/graphql' });

app.all('*', (req, res) => {
  res.status(404).json({ status: 'Missing endpoint' });
});

app.listen(port, '0.0.0.0', () => console.log(`Services listening on ${port}`));

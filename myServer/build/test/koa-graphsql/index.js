"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require('koa');
const { ApolloServer, gql } = require('apollo-server-koa');
// Construct a schema, using GraphQL schema language
const typeDefs = [`
  type Message {
    hello: String
  }
  schema {
    query: Message
}
`];
// Provide resolver functions for your schema fields
const resolvers = {
    Message: {
        hello: (root) => "111",
    }
};
const server = new ApolloServer({ typeDefs, resolvers });
const app = new Koa();
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
//# sourceMappingURL=index.js.map
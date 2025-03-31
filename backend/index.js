import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import cors from "cors";
import { getBooks, getAuthors, addBook as _addBook, addAuthor as _addAuthor } from "./database/dbOperations.js";

const app = express();
app.use(cors());

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    authorId: ID!
    author: Author
  }

  type Author {
    id: ID!
    name: String!
  }

  type Query {
    books: [Book]
    authors: [Author]
  }

  type Mutation {
    addBook(id: ID!, title: String!, authorId: ID!): Book
    addAuthor(id: ID!, name: String!): Author
  }
`;

const resolvers = {
  Query: {
    books: () => getBooks(),
    authors: () => getAuthors(),
  },
  Mutation: {
    addBook: (_, { id, title, authorId }) => _addBook({ id, title, authorId }),
    addAuthor: (_, { id, name }) => _addAuthor({ id, name }),
  },
  Book: {
    author: (book) => getAuthors().find((author) => author.id === book.authorId),
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("🚀 Server running at http://localhost:4000/graphql");
  });
}

startServer();

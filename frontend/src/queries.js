import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author {
        name
      }
    }
  }
`;

export const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      id
      name
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($id: ID!, $title: String!, $authorId: ID!) {
    addBook(id: $id, title: $title, authorId: $authorId) {
      id
      title
      author {
        name
      }
    }
  }
`;

export const ADD_AUTHOR = gql`
  mutation AddAuthor($id: ID!, $name: String!) {
    addAuthor(id: $id, name: $name) {
      id
      name
    }
  }
`;

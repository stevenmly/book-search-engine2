// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
type Query {
    books: [Book]
  }
type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs; 
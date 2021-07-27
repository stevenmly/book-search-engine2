import gql from 'graphql-tag';

export const QUERY_GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        _id
        bookId
        authors
        description
        image
        link
        title
      }
`; 
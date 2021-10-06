const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]!
  }

  type Post {
    _id: ID
    author: String
    title: String
    body: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    body: String
    author: String
    createdAt: String
  }
`

module.exports = typeDefs;
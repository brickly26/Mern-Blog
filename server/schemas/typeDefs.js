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
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    p05t(postId: ID!): Post
  }
`

module.exports = typeDefs;
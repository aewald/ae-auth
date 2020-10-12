const { gql } = require('apollo-server-express');

exports.userTypes = `
  input SignUpInput {
    avatar: String
    username: String!
    name: String
    email: String!
    password: String!
    passwordConfirmation: String!
  }
`;

exports.userTypeDefs = gql`
  type Mutation {
    signUp(input: SignUpInput): String
    signIn: String
    signOut: String
  }
`;

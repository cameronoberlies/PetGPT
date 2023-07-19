const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        zipcode: String
        favorites: [String] 
    }

    type Auth {
       token: ID!
       user: User
    }
    #remember to add this back in once we have auth;

    type Query {
        users: [User] !
        user(userId: ID): User
        me: User
    }

    type Mutation {
        #Change to : Auth once we have auth; back to :User if we want to test with no auth
        addUser(username: String!, email: String!, password: String!, zipcode: String!): Auth
        login(email: String!, password: String!): Auth

        addFavorite(userId: ID!, favorite: String!): User
        removeUser: User
        removeFavorite(favorite: String!): User

    }
`;

module.exports = typeDefs;
    
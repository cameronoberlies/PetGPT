const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        password: String
        zipCode: Int
        favorites: [String] !
    }


    #type Auth {
    #   token: ID!
    #   user: User
    #}
    #remember to add this back in once we have auth;

    type Query {
        users: [User] !
        user(userId: ID): User
        me: User
    }

    type Mutation {
        #Change to : Auth once we have auth;
        addUser(name: String!, email: String!, password: String!, zipCode: Int!): User
        login(email: String!, password: String!): User

        addFavorite(userId: ID!, favorite: String!): User
        removeUser: User
        removeFavorite(favorite: String!): User

    }
`;

module.exports = typeDefs;
    
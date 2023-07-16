import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    mutation addUser($name: String!, $email: String!, $password: String!, $zipCode: Int!) {
        addUser(name: $name, email: $email, password: $password, zipCode: $zipCode) {
            #token
            user {
                _id
                name
            }
        }
    }
`;

export const ADD_FAVORITE = gql`
    mutation addFavorite($userId: ID!, $favorite: String!) {
        addFavorite(userId: $userId, favorite: $favorite) {
            _id
            name
            favorites
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            #token
            profile {
                _id
                name
            }
        }
    }
`;

export const REMOVE_FAVORITE = gql`
    mutation removeFavorite($favorite: String!) {
        removeFavorite(favorite: $favorite) {
            _id
            name
            favorites
        }
    }
`;
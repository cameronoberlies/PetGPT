import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $zipcode: String! ) {
    addUser(username: $username, email: $email, password: $password, zipcode: $zipcode) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_FAVORITE = gql`
    mutation addFavorite($userId: ID!, $favorite: String!) {
        addFavorite(userId: $userId, favorite: $favorite) {
            _id
            username
            favorites
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
            
        }
    }
`;

export const REMOVE_FAVORITE = gql`
    mutation removeFavorite($favorite: String!) {
        removeFavorite(favorite: $favorite) {
            _id
            username
            favorites
        }
    }
`;
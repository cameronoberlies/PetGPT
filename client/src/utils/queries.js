import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      favorites
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      favorites
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      favorites
      email
    }
  }
`;

export const GET_USER_FAVORITES = gql`
  query GetUserFavorites($userId: ID!) {
    getUserFavorites(userId: $userId) {
      favorites
    }
  }
`;

const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        
        },
        me: async (parent, args, context) => {
            if(context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        getUserFavorites: async (parent, { userId }, context) => {
            return User.findById(userId);
          },
    },

    Mutation: {
        addUser: async (parent, { username, email, password, zipcode }) => {
            const user = await User.create({ username, email, password, zipcode });
            const token = signToken(user);
            return { token, user }; //{ token, user }, will need to add this once we have auth;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if(!user) {
                throw new AuthenticationError('No profile with this email found!');
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }
            const token = signToken(user);
            return { token, user }; //{ token, user }, will need to add this once we have auth;
        },

        addFavorite: async (parent, { userId, favorite }, context) => {
            if (context.user) {
              try {
                const updatedUser = await User.findByIdAndUpdate(
                  userId,
                  { $addToSet: { favorites: favorite } },
                  { new: true, runValidators: true }
                );
      
                return updatedUser;
              } catch (error) {
                throw new Error('Failed to add favorite.');
              }
            } else {
              throw new AuthenticationError('You need to be logged in!');
            }
          },

        removeUser: async (parent, args, context) => {
            if(context.user) {
                return User.findOneAndDelete({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeFavorite: async (parent, { userId, favorite }, context) => {
            if (context.user) {
              try {
                const updatedUser = await User.findByIdAndUpdate(
                  userId,
                  { $pull: { favorites: favorite } },
                  { new: true, runValidators: true }
                );
      
                return updatedUser;
              } catch (error) {
                throw new Error('Failed to remove favorite.');
              }
            } else {
              throw new AuthenticationError('You need to be logged in!');
            }
          },
        },
      };

    


module.exports = resolvers;
# Perfect Dog Breed Matcher App

![App Screenshot](screenshot.png)

The Perfect Dog Breed Matcher App is a web application that helps users find their perfect dog breed match by taking a six-question test. The app utilizes the OpenAI API for generating personalized responses based on the user's preferences. Additionally, it leverages the Petfinder API to display dogs available for adoption in the user's area that match their preferences.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- MongoDB: A NoSQL database used for storing user data.
- Apollo GraphQL: A GraphQL implementation that facilitates data communication between the client and server.
- JWT (JSON Web Tokens): A secure method for transmitting information between parties as JSON objects.
- OpenAI API: An API that provides access to the GPT-3.5 language model for generating natural language responses.
- Chakra UI: A component library for building responsive and accessible UI components.
- Bootstrap: A front-end framework for building responsive websites and applications.
- Node.js: A server-side JavaScript runtime environment.
- Express: A web application framework for Node.js used to build the server-side of the application.

## Features

- User Registration and Authentication: Users can create accounts and log in securely using JWT.
- Dog Breed Test: Users can take a six-question test to determine their lifestyle, home type, household composition, dog size preference, shedding preference, and climate. The OpenAI API generates personalized responses based on the user's answers.
- Dog Breed Recommendations: Based on the test results, the app suggests dog breeds that match the user's preferences.
- Petfinder Integration: The app uses the Petfinder API to fetch data on dogs available for adoption in the user's area that match their preferences.
- Favorites List: Users can create a favorites list of dog breeds they are interested in.

## Setup Instructions

1. Clone the repository to your local machine.
2. Install Node.js and MongoDB if you haven't already.
3. Navigate to the project directory and install dependencies by running:
   ```
   npm install
   ```
4. Set up environment variables. Create a `.env` file in the root of the project and add the following:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   OPENAI_API_KEY=your_openai_api_key
   ```
5. Run the server:
   ```
   npm run develop
   ```

8. The app should now be running on `http://localhost:3000`.

## Screenshots

![Screenshot 1](screenshot1.png)
![Screenshot 2](screenshot2.png)

## Future Enhancements

- Allow users to save their favorite dogs for future reference.
- Add filters for more specific dog breed search options.
- Improve the user interface and design for a better user experience.

## Contributions

Contributions to this project are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.
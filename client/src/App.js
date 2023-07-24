import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./test.css";
// import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Main from "./pages/Main";
import Breed from "./pages/Breed";
import Adopt from "./pages/Adopt";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Test from "./pages/Test";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Results from './pages/Results';
import Donate from "./components/Donate";



const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
    
    <ApolloProvider client={client}>
      
      <BrowserRouter>
      
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/breed" element={<Breed />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/results" element={<Results />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        
      </BrowserRouter>
      </ApolloProvider>
      
    </>
  );
}

export default App;

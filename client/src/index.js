import React from "react";
import ReactDOM from "react-dom"; // Change this import to "react-dom"
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from './utils/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FavoritesProvider } from './components/FavoritesContext';



ReactDOM.render( // Use ReactDOM.render() for React 17 and below


    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
 
  
 ,
  document.getElementById("root")
);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from './utils/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FavoritesProvider } from './components/FavoritesContext';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesProvider>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  </FavoritesProvider>
);
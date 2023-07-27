import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FavoritesProvider } from './components/FavoritesContext';

createRoot(document.getElementById("root")).render(
  // Use createRoot().render() for React 18
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
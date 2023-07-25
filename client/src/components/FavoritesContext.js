// import React, { createContext, useContext, useState } from "react";
// import { useQuery } from "@apollo/client";
// import { GET_USER_FAVORITES } from "../utils/queries";
// import Auth from "../utils/auth";
// import { useEffect } from "react";
// const FavoritesContext = createContext();

// export function useFavorites() {
//   console.log("Testing FavoritesContext.js");
//   return useContext(FavoritesContext);
// }

// export function FavoritesProvider({ children }) {
//   const [myFavorites, setMyFavorites] = useState([]);

//   const addFavorite = (breed) => {
//     console.log("Hello can you hear meeeeeeee")
//     setMyFavorites((prevFavorites) => [...prevFavorites, breed]);
//   };

//   const removeFavorite = (breed) => {
//     setMyFavorites((prevFavorites) =>
//       prevFavorites.filter((item) => item !== breed)
//     );
//   };

//   const clearFavorites = () => {
//     setMyFavorites([]);
//   };

//   const { loading, error, data } = useQuery(GET_USER_FAVORITES, {
//     variables: { userId: Auth.getProfile().data._id },
//   });
  
//   useEffect(() => {
//     if (!loading && !error) {
//       setMyFavorites(data.getUserFavorites.favorites);
//     }
//   }, [loading, error, data]);

//   return (
//     <FavoritesContext.Provider
//       value={{ myFavorites, addFavorite, removeFavorite, clearFavorites }}
//     >
//       {children}
//     </FavoritesContext.Provider>
//   );
// }
import { useState, createContext, useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_FAVORITES } from "../utils/queries"; // replace with your actual query
import  Auth  from "../utils/auth"; // replace with your actual Auth import

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [myFavorites, setMyFavorites] = useState([]);
  const { loading, error, data } = useQuery(GET_USER_FAVORITES, {
    variables: { userId: Auth.getProfile().data._id },
  });

  useEffect(() => {
    if (!loading && !error) {
      setMyFavorites(data.getUserFavorites.favorites); // adjust based on your actual data structure
    }
  }, [loading, error, data]);

  const addFavorite = (breed) => {
    setMyFavorites((prevFavorites) => [...prevFavorites, breed]);
  };

  const removeFavorite = (breed) => {
    setMyFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav !== breed)
    );
  };

  const clearFavorites = () => {
    setMyFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{ myFavorites, addFavorite, removeFavorite, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavorites = () => useContext(FavoritesContext);

export { FavoritesProvider, useFavorites };

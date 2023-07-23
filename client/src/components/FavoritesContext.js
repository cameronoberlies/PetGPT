import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export function useFavorites() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (breed) => {
    setFavorites((prevFavorites) => [...prevFavorites, breed]);
  };

  const removeFavorite = (breed) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item !== breed));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

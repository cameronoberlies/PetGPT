import { useState, createContext, useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_FAVORITES } from "../utils/queries"; // replace with your actual query
import Auth from "../utils/auth"; // replace with your actual Auth import

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [myFavorites, setMyFavorites] = useState([]);
  const token = Auth.getToken();
  const userProfile = token ? Auth.getProfile() : null;
  const userId = userProfile?.data?._id || null;

  const { loading, error, data } = useQuery(GET_USER_FAVORITES, {
    variables: { userId },
  });

  useEffect(() => {
    if (!loading && !error && data && data.getUserFavorites) {
      setMyFavorites(data.getUserFavorites.favorites);
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

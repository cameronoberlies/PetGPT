import { useState, createContext, useContext, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER_FAVORITES } from "../utils/queries"; 
import { REMOVE_FAVORITE } from "../utils/mutations";
import Auth from "../utils/auth"; 
import { AuthContext } from "./AuthContext";

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const { loggedIn } = useContext(AuthContext);
  const [myFavorites, setMyFavorites] = useState([]);
  const token = Auth.getToken();
  const userProfile = token ? Auth.getProfile() : null;
  const userId = userProfile?.data?._id || null;
  const [removeFavoriteMutation] = useMutation(REMOVE_FAVORITE);

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

  // const removeFavorite = (breed) => {
  //   setMyFavorites((prevFavorites) =>
  //     prevFavorites.filter((fav) => fav !== breed)
  //   );
  // };

  const removeFavorite = async (breed) => {
    try {
      await removeFavoriteMutation({
        variables: {
          favorite: breed,
        },
      });
      setMyFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav !== breed)
      );
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
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

export { FavoritesProvider, useFavorites};

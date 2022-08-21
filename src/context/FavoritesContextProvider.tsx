import { ReactNode, useState } from "react";
import Gif from "../models/Gif";
import FavoritesContext from "./FavoritesContext";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Gif[]>([]);
  const addFavorite = (gif: Gif): void => {
    setFavorites((prev) => {
      return [...prev, gif];
      // const newList: Gif[] = prev.slice(0);
      // newList.push(gif);
      // return newList;
    });
  };
  const removeFavorite = (id: string): void => {
    setFavorites((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
      // const newList: Gif[] = prev.slice(0);
      // const index: number = prev.findIndex(item => item.id === id)
      // newList.splice(index, 1);
      // return newList;
    });
  };
  const isFav = (id: string): boolean => favorites.some((gif) => gif.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFav }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;

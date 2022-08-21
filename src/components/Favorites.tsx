import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import "./Favorites.css";
import GifContainer from "./GifContainer";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="Favorites">
      <GifContainer gifs={favorites} />
    </div>
  );
};

export default Favorites;

import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import Gif from "../models/Gif";
import "./Card.css";

interface Props {
  gif: Gif;
}

const Card = ({ gif }: Props) => {
  const { addFavorite, removeFavorite, isFav } = useContext(FavoritesContext);

  return (
    <li className="Card">
      <h2>{gif.title}</h2>
      <Link to={`/gifs/${encodeURIComponent(gif.id)}/details`}>
        <img src={gif.images.original.url} alt={gif.title} />
      </Link>
      <a href={gif.url} target="_blank">
        Link To Original
      </a>

      {isFav(gif.id) ? (
        <i
          className="fa-solid fa-heart"
          onClick={() => removeFavorite(gif.id)}
        ></i>
      ) : (
        <i className="fa-regular fa-heart" onClick={() => addFavorite(gif)}></i>
      )}
    </li>
  );
};

export default Card;

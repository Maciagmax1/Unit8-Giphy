import Gif from "../models/Gif";
import Card from "./Card";
import "./GifContainer.css";

interface Props {
  gifs: Gif[];
}

const GifContainer = ({ gifs }: Props) => {
  return (
    <div className="GifContainer">
      <ul>
        {gifs.map((singularGif, index) => (
          <Card gif={singularGif} key={`${index}${singularGif.id}`} />
        ))}
      </ul>
    </div>
  );
};

export default GifContainer;

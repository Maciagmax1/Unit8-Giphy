import { useEffect, useState } from "react";
import Gif from "../models/Gif";
import { getGifsBySearchTerm, getTrendingGifs } from "../services/GiphyService";
import GifContainer from "./GifContainer";
import "./Main.css";
import SearchForm from "./SearchForm";
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  // const [inquiry, setInquiry] = useState("");
  const [searchParams] = useSearchParams();
  const inquiry = searchParams.get("q");

  useEffect(() => {
    if (inquiry) {
      getGifsBySearchTerm(inquiry).then((response) => {
        setGifs(response.data);
      });
    } else {
      getTrendingGifs().then((response) => {
        setGifs(response.data);
      });
    }
  }, [inquiry]);

  return (
    <div className="Main">
      <SearchForm />
      <GifContainer gifs={gifs} />
    </div>
  );
};

export default Main;

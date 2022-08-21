import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gif from "../models/Gif";
import { getGifById } from "../services/GiphyService";
import Card from "./Card";
import "./Details.css";

const Details = () => {
  const id: string | undefined = useParams().id;
  const [gif, setGif] = useState<Gif | null>(null);

  useEffect(() => {
    getGifById(id!).then((response) => {
      setGif(response.data);
    });
  }, []);

  return (
    <div className="Details">{gif ? <Card gif={gif} /> : <p>Loading</p>}</div>
  );
};

export default Details;

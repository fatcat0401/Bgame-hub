import { ref, get, child } from "firebase/database";
import { useState, useEffect } from "react";
import db from "../services/api-client";
import { BoardGame } from "./useGames";
import axios from "axios";
import { Hotness, xml2Obj } from "../functions/readXml";

const useHotness = () => {
  const list: (keyof Hotness)[] = ["name", "thumbnail", "yearpublished"];
  const [hotness, setHotness] = useState<Hotness[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    axios
      .get("https://boardgamegeek.com/xmlapi2/hot?boardgame", {
        timeout: 5000,
        signal: controller.signal,
      })
      .then((res) => {
        //setHotness(getHotness<Hotness>(res,list));
        const hotnessData: Hotness[] = xml2Obj<Hotness>(res, list);
        setHotness(hotnessData);
        setLoading(false);
        return controller.abort();
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  return { hotness, error, isLoading };
};

export default useHotness;

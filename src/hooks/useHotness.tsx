import { ref, get, child } from "firebase/database";
import { useState, useEffect } from "react";
import db from "../services/api-client";
import { BoardGame } from "./useGames";
import axios from "axios";

interface Hotness {
  name: string | null;
  //thumbnail: string;
}

const useHotness = () => {
  const [hotness, setHotness] = useState<Hotness[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    //const controller = new AbortController();
    axios
      .get("https://boardgamegeek.com/xmlapi2/hot?boardgame", {
        timeout: 5000,
      })
      .then((res) => {
        const text = res.data;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");

        const numberOfNames = xmlDoc.getElementsByTagName("item").length;
        const items = xmlDoc.getElementsByTagName("item");

        // Transform items into an array of Hotness objects
        const hotnessArray: Hotness[] = [];
        for (let i = 0; i < items.length; i++) {
          const gameName = items[i]
            .getElementsByTagName("name")[0]
            .getAttribute("value");
          const hotnessObj: Hotness = { name: gameName }; // Modify this based on the actual properties of Hotness
          hotnessArray.push(hotnessObj);
        }

        setHotness(hotnessArray);

        //setHotness(res.data);
        console.log(res.data);
      })
      .catch((error) => setError(error.message));

    //return controller.abort();
  }, []);
  return { hotness, error };
};

export default useHotness;

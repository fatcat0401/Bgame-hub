import { ref, get, child } from "firebase/database";
import { useEffect, useState } from "react";
import db from "../services/api-client";
import { abort } from "process";

export interface BoardGame {
  id: number;
  name: string;
  //image: string;
  thumbnail: string;
  status: Status;
  ranks: Rank[];
  average: string;
  yearpublished: string;
  objectid: string;
}

export interface Rank {
  name: string;
  friendlyname: string;
  value: string;
}

export interface Genre {
  name: string;
  slug: string;
}

interface Status {
  own: string;
}

const useGames = () => {
  const list = ["id", "name", "thumbnail", "status", "ranks", "average"];
  const [games, setGames] = useState<BoardGame[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoadingState] = useState(false);
  const dbRef = ref(db);
  useEffect(() => {
    setLoadingState(true);

    get(child(dbRef, `1`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const gamesData = snapshot.val();
          const updatedGames = gamesData.map(
            (item: BoardGame, index: number) => ({
              ...item,
              id: index,
            })
          );
          setGames(updatedGames);
          //console.log(games);
        } else {
          setError("No data available");
        }
        setLoadingState(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoadingState(false);
      });
  }, []);
  return { games, error, isLoading };
};

export default useGames;

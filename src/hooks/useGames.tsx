import { ref, get, child } from "firebase/database";
import { useEffect, useState } from "react";
import db from "../services/api-client";
import { abort } from "process";

interface BoardGame {
  id: number;
  name: string;
}

const useGames = () => {
  const [games, setGames] = useState<BoardGame[]>([]);
  const [error, setError] = useState("");
  const dbRef = ref(db);
  useEffect(() => {
    get(child(dbRef, `items/item`))
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

          console.log(games);
        } else {
          setError("No data available");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  return { games, error };
};

export default useGames;

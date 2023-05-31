import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import db from "../services/api-client";

interface BoardGame {
  id: number;
  name: string;
}

const GameGrid = () => {
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

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;

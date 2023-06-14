import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import HotnessList from "./Components/HotnessList";
import { useState } from "react";
import { Genre } from "./hooks/useGames";
import Genres from "./Components/Genres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre>({
    name: "All",
    slug: "boardgame",
  });

  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main" `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
      templateRows="1fr"
      backgroundColor={"gray.400"}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <HotnessList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Genres
          selectedGenre={selectedGenre}
          onSelectedGenre={(genre) => setSelectedGenre(genre)}
        />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;

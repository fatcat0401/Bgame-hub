import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import HotnessList from "./Components/HotnessList";
import { useState } from "react";
import { Genre } from "./hooks/useGames";
import Genres from "./Components/Genres";
import SortSelector from "./Components/SortSelector";

export interface GameQuery {
  genre: Genre;
  selector: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: { name: "All", slug: "boardgame" },
    selector: "Relevance",
  } as GameQuery);

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
        <Flex marginLeft={3} marginBottom={4}>
          <Box marginRight={5}>
            <Genres
              selectedGenre={gameQuery.genre}
              onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </Box>
          <SortSelector
            selectedSelector={gameQuery.selector}
            onSelectedSelector={(selector) =>
              setGameQuery({ ...gameQuery, selector })
            }
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

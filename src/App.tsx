import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import HotnessList from "./Components/HotnessList";
import Genres from "./Components/Genres";
import { useState } from "react";
function App() {
  const [category, setCategory] = useState("thematic");
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
      <GridItem area="main" textAlign={"center"}>
        <Genres onSelectedCategory={(cat) => setCategory(cat)} />
        <GameGrid selectedCategory={category} />
      </GridItem>
    </Grid>
  );
}

export default App;

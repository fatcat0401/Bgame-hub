import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box backgroundColor={"red"} overflow="hidden" borderRadius="lg">
      {children}
    </Box>
  );
};

export default GameCardContainer;

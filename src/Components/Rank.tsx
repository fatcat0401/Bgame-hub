import { Badge } from "@chakra-ui/react";

interface Props {
  brank: string;
}

const Rank = ({ brank }: Props) => {
  const rank = isNaN(parseInt(brank)) ? "Not Ranked" : parseInt(brank);
  const color =
    typeof rank === "string"
      ? "gray.500"
      : rank < 200
      ? "green"
      : rank < 500
      ? "blue"
      : "red";
  return (
    <Badge colorScheme={color} padding={1} fontSize={"md"}>
      {rank}
    </Badge>
  );
};

export default Rank;

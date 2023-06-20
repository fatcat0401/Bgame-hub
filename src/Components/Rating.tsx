import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  avgRating: string;
}

const Rating = ({ avgRating }: Props) => {
  const rating = isNaN(parseInt(avgRating))
    ? "Not Rated"
    : parseFloat(avgRating);
  const color =
    typeof rating === "string"
      ? "gray.500"
      : rating > 8.0
      ? "green"
      : rating > 7.0
      ? "blue"
      : rating > 5.0
      ? "yellow"
      : "red";
  return (
    <Badge colorScheme={color} padding={1} fontSize={"md"}>
      {rating}
    </Badge>
  );
};

export default Rating;

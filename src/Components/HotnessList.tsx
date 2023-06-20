import React from "react";
import useHotness from "../hooks/useHotness";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const HotnessList = () => {
  const { hotness, error, isLoading } = useHotness();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <Card borderRadius={"2xl"} overflow={"hidden"}>
      <CardHeader bg={"blue.400"} textColor={"white"}>
        <Heading size="md">Hotness List</Heading>
      </CardHeader>
      <CardBody>
        <List paddingY={"5px"}>
          <Stack divider={<StackDivider />} spacing="4">
            {hotness.map((hot, index) => (
              <ListItem paddingY={1} key={index}>
                <HStack>
                  <Image
                    alignSelf={"flex-start"}
                    src={hot.thumbnail ? hot.thumbnail : ""}
                    boxSize={"40px"}
                    borderRadius={8}
                    pt={"5px"}
                    objectFit="cover"
                  />
                  <Box>
                    <Text as={Link} fontSize={"md"} fontWeight={"extrabold"}>
                      {hot.name}
                    </Text>
                    <Text fontSize={"md"}>{hot.yearpublished}</Text>
                  </Box>
                </HStack>
              </ListItem>
            ))}
          </Stack>
        </List>
      </CardBody>
    </Card>
  );
};

export default HotnessList;

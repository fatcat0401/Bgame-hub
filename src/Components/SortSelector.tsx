import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSelector: (selector: string) => void;
  selectedSelector: string;
}

const sortSelectors = ["Relevance", "Release Year", "Average Rating"];

const SortSelector = ({ onSelectedSelector, selectedSelector }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedSelector}
      </MenuButton>
      <MenuList>
        {sortSelectors.map((selector) => (
          <MenuItem key={selector} onClick={() => onSelectedSelector(selector)}>
            {selector}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

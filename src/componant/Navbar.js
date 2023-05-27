import {
  Box,
  Divider,
  HStack,
  Heading,
  IconButton,
  Show,
  Stack,
  Switch,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <HStack p={4} justifyContent={"space-between"}>
        <Heading fontFamily={"cursive"}>Find Train</Heading>
        <Show above="760px">
          <HStack fontSize={"xl"} w={"40%"} justifyContent={"space-evenly"}>
            <Text>Home</Text>
            <Text>About Us</Text>
            <HStack>
              <Switch
                colorScheme="green"
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
              />
              <Text>{colorMode.toUpperCase()}</Text>
            </HStack>
          </HStack>
        </Show>
        <Show below="760px">
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Show>
      </HStack>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack px={4} as={"nav"} spacing={4}>
            <Text>Home</Text>
            <Text>About Us</Text>
            <HStack>
              <Switch
                colorScheme="green"
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
              />
              <Text>{colorMode.toUpperCase()}</Text>
            </HStack>
          </Stack>
        </Box>
      ) : null}
      <Divider></Divider>
    </>
  );
};

export default Navbar;

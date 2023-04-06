import { HStack, Heading, useColorMode, Image } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.jpeg";

const Nav = () => {
  const { colorMode } = useColorMode();

  return (
    <HStack
      justifyContent="space-between"
      padding={4}
      bgColor={colorMode === "dark" ? "gray.700" : "blue.100"}
      borderRadius="10px"
      marginY={3}
      marginX={3}
    >
      <Image
        borderRadius="full"
        boxSize="40px"
        src={logo}
      />
      <Heading as="h3" size="lg">
        Movie Hub
      </Heading>
      <ThemeToggle />
    </HStack>
  );
};

export default Nav;

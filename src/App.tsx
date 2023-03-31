import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <ChakraProvider>
      <Nav />
    </ChakraProvider>
  );
}

export default App;
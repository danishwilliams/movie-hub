import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Nav from "./components/Nav";
import NavTabs from "./components/NavTabs";
import theme from "./utils/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <NavTabs />
    </ChakraProvider>
  );
}

export default App;

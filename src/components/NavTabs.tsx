import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Filter from "./Filter";
import Search from "./Search";

const NavTabs = () => {
  return (
    <Tabs
      paddingY={3}
      
      variant="soft-rounded"
      colorScheme="blue"
    >
      <TabList paddingX={4} justifyContent="center">
        <Tab>Search</Tab>
        <Tab>Filter</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Search />
        </TabPanel>
        <TabPanel>
          <Filter />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default NavTabs;

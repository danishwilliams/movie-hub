import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Search from "./Search";
import Filter from "./Filter";

const Nav = () => {
  return (
    <Tabs
      paddingTop={3}
      width="100%"
      align="center"
      variant="soft-rounded"
      colorScheme="blue"
    >
      <TabList>
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

export default Nav;

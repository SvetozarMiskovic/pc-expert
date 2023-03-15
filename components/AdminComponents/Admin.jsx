import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";
function Admin({ properties, data }) {
  console.log(data);
  return (
    <div className="admin-component">
      <Tabs isFitted width={"100%"}>
        <TabList>
          <Tab _selected={{ borderColor: "#4cbb17" }} width={"100%"}>
            <Text color={"#0c0c0c"} fontWeight={"bold"} fontSize={"lg"}>
              Kreiraj artikl
            </Text>
          </Tab>
          <Tab _selected={{ borderColor: "#4cbb17" }} width={"100%"}>
            <Text color={"#0c0c0c"} fontWeight={"bold"} fontSize={"lg"}>
              Uredi artikl
            </Text>
          </Tab>
          <Tab _selected={{ borderColor: "#4cbb17" }} width={"100%"}>
            <Text color={"#0c0c0c"} fontWeight={"bold"} fontSize={"lg"}>
              Obriši artikl
            </Text>
          </Tab>
        </TabList>
        <TabPanels width={"100%"}>
          <TabPanel width={"100%"}>
            <CreateProduct properties={properties} />
          </TabPanel>
          <TabPanel width={"100%"}>
            <UpdateProduct data={data} />
          </TabPanel>
          <TabPanel width={"100%"}>
            <DeleteProduct data={data} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Admin;

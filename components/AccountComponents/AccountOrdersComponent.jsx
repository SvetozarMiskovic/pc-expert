import React from "react";
import {
  Text,
  Icon,
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { FaBoxes } from "react-icons/fa";
function AccountOrdersComponent() {
  return (
    <div className="account-showcase-wrapper">
      <div className="account-showcase-component">
        <div className="account-showcase-header">
          <div className="account-showcase-header-title">
            <Icon as={FaBoxes} fontSize={"4xl"} color={"#f89a20"} />
            <Text fontSize={"3xl"} color={"#5f5f5f"}>
              Narudžbe
            </Text>
          </div>
          <Text fontSize={"sm"}>Prikaz podataka o narudžbama</Text>
        </div>
        <div className="account-showcase-body">
          <TableContainer overflow={"auto"} width={"100%"}>
            <Table
              overflowX={"auto"}
              // layout={"fixed"}
              variant="striped"
              colorScheme={"brand"}
              wordWrap={"break-word"}
            >
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Datum narudzbe</Th>
                  <Th>Datum isporuke</Th>
                  <Th>Poslano</Th>
                  <Th>Cijena narudžbe</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Th>12345</Th>
                  <Th>17.01.2023</Th>
                  <Th>18.01.2023</Th>
                  <Th>Da</Th>
                  <Th>2000 KM</Th>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default AccountOrdersComponent;

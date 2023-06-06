import React, { useState, useEffect } from "react";
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
import { useAuthContext } from "../../context/AuthContext";

function AccountOrdersComponent() {
  const [user, setUser] = useState({});
  const { activeUser } = useAuthContext();
  // const updateUser = obj => {
  //   setUser(obj);
  // };

  // useEffect(() => {
  //   getUser().then(res => updateUser(res.data));
  // }, []);

  if (!activeUser) {
    return <h1>Niste ulogovani</h1>;
  }
  return (
    <div className="account-showcase-wrapper">
      <div className="account-showcase-component">
        <div className="account-showcase-header">
          <div className="account-showcase-header-title">
            <div>
              <Icon as={FaBoxes} fontSize={"4xl"} color={"#f89a20"} />
              <Text fontSize={"3xl"} color={"#0c0c0c"} fontWeight={"bold"}>
                Narudžbe
              </Text>
            </div>
            <Text fontSize={"md"}>Prikaz podataka o narudžbama</Text>
          </div>
        </div>
        <div className="account-showcase-body">
          <TableContainer overflow={"auto"} width={"100%"}>
            <Table
              overflowX={"auto"}
              // layout={"fixed"}
              variant="striped"
              colorScheme={"brand"}
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

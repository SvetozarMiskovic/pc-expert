import React from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { useAuthContext } from "../../context/AuthContext";

function AccountSidebar() {
  const { isLoged } = useAuthContext();
  return (
    <div className="account-sidebar-wrapper">
      <div className="account-sidebar-container">
        <div className="account-sidebar-information">
          <Text fontSize={"md"} fontWeight="bold" color={"#5f5f5f"}>
            Moj korisnički račun
          </Text>
          <Link
            className="account-sidebar-link"
            href={"/nalog/info"}
            color={"#5f5f5f"}
          >
            <Text color={"#5f5f5f"} fontSize="sm">
              Podaci o korisničkom računu
            </Text>
          </Link>

          {isLoged && (
            <Text
              color={"#5f5f5f"}
              cursor="pointer"
              className="account-sidebar-link"
              fontSize="sm"
            >
              Izmjeni podatke
            </Text>
          )}
          {isLoged && (
            <Text
              color={"#5f5f5f"}
              cursor="pointer"
              className="account-sidebar-link"
              fontSize="sm"
            >
              Promjeni lozinku
            </Text>
          )}
          {isLoged && (
            <Text
              color={"#5f5f5f"}
              cursor="pointer"
              className="account-sidebar-link"
              fontSize="sm"
            >
              Promjeni sliku
            </Text>
          )}
        </div>
        <div className="account-sidebar-orders">
          <Text fontSize={"md"} fontWeight="bold" color={"#5f5f5f"}>
            Narudžbe
          </Text>

          <Link href={"/nalog/narudzbe"} className="account-sidebar-link">
            <Text fontSize="sm" color={"#5f5f5f"}>
              Moje narudžbe
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccountSidebar;

import React from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { useAuthContext } from "../../context/AuthContext";
import { useGlobalContext } from "../../context/GlobalContext";
import { useRouter } from "next/router";

function AccountSidebar() {
  const { isLoged, role } = useAuthContext();

  const router = useRouter();

  return (
    <div className="account-sidebar-wrapper">
      <div className="account-sidebar-container">
        <div className="account-sidebar-information">
          <Text fontSize={"lg"} fontWeight="bold" color={"#0c0c0c"}>
            Moj korisnički račun
          </Text>
          <Link
            className="account-sidebar-link"
            href={"/nalog/info"}
            color={"#5f5f5f"}
          >
            <Text color={"#5f5f5f"} fontSize="md">
              Podaci o korisničkom računu
            </Text>
          </Link>

          {isLoged && (
            <Link href="/nalog/promjeniLozinku">
              <Text
                color={"#5f5f5f"}
                cursor="pointer"
                className="account-sidebar-link"
                fontSize="md"
              >
                Promjeni lozinku
              </Text>
            </Link>
          )}

          {isLoged && role === "admin" && (
            <Link href="/admin">
              <Text
                color={"#5f5f5f"}
                cursor="pointer"
                className="account-sidebar-link"
                fontSize="md"
              >
                Admin menu
              </Text>
            </Link>
          )}
        </div>
        <div className="account-sidebar-orders">
          <Text fontSize={"lg"} fontWeight="bold" color={"#0c0c0c"}>
            Narudžbe
          </Text>

          <Link href={"/nalog/narudzbe"} className="account-sidebar-link">
            <Text fontSize="md" color={"#5f5f5f"}>
              Moje narudžbe
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccountSidebar;

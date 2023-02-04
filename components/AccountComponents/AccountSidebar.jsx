import React from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { useAuthContext } from "../../context/AuthContext";
import { useGlobalContext } from "../../context/GlobalContext";
import { useRouter } from "next/router";

function AccountSidebar() {
  const { isLoged } = useAuthContext();
  const { updateEditProfile } = useGlobalContext();
  const router = useRouter();

  const glupost = [];
  return (
    <div className="account-sidebar-wrapper">
      <div className="account-sidebar-container">
        <div className="account-sidebar-information">
          <Text fontSize={"lg"} fontWeight="bold" color={"#5f5f5f"}>
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
            <Text
              color={"#5f5f5f"}
              cursor="pointer"
              className="account-sidebar-link"
              fontSize="md"
              onClick={() =>
                router.asPath === "/nalog/info" && updateEditProfile()
              }
            >
              Izmjeni podatke
            </Text>
          )}
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
          {isLoged && (
            <Text
              color={"#5f5f5f"}
              cursor="pointer"
              className="account-sidebar-link"
              fontSize="md"
            >
              Promjeni sliku
            </Text>
          )}
        </div>
        <div className="account-sidebar-orders">
          <Text fontSize={"lg"} fontWeight="bold" color={"#5f5f5f"}>
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

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Text, Icon, Avatar } from "@chakra-ui/react";
import { FaUserCheck } from "react-icons/fa";
import Image from "next/image";
function AccountComponent() {
  return (
    <div className="account-showcase-wrapper">
      <div className="account-showcase-component">
        <div className="account-showcase-header">
          <div className="account-showcase-header-title">
            <Icon as={FaUserCheck} fontSize={"4xl"} color={"#f89a20"} />
            <Text fontSize={"3xl"} color={"#5f5f5f"} fontWeight="bold">
              Moj korisnički račun
            </Text>
          </div>
          <Text fontSize={"md"}>Prikaz podataka o korisničkom računu</Text>
        </div>
        <div className="account-showcase-body">
          <div className="account-showcase-body-info">
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Ime i prezime
              </Text>
              <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                Svetozar Miskovic
              </Text>
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Email
              </Text>
              <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                tosve214@gmail.com
              </Text>
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Adresa
              </Text>
              <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                Karanovac bb
              </Text>
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Ulica
              </Text>
              <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                Voje i Gorana Kajkuta
              </Text>
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Grad
              </Text>
              <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                Banja Luka
              </Text>
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Postanski broj
              </Text>
              <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                78000
              </Text>
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Broj Telefona
              </Text>
              <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                063791630
              </Text>
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Ime i prezime
              </Text>
              <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                Svetozar Miskovic
              </Text>
            </div>
          </div>
          <div className="account-showcase-body-image">
            <div className="account-showbase-body-avatar">
              <div className="account-showcase-avatar-holder">
                <Image
                  width={200}
                  height={200}
                  src="/sveto.jpeg"
                  name="Ime i Prezime"
                  alt="avatar"
                />
              </div>
              <Text fontSize={"lg"} color={"#5f5f5f"} fontWeight="bold">
                Svetozar Miskovic
              </Text>
              <Text fontSize={"md"} color={"#5f5f5f"}>
                tosve214@gmail.com
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountComponent;

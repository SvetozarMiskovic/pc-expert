import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Text, Icon, Avatar } from "@chakra-ui/react";
import { FaUserCheck } from "react-icons/fa";
import Image from "next/image";

import axios from "axios";
import { getUser } from "../../fetchFunctions/getUser";

function AccountComponent() {
  const [user, setUser] = useState({});

  const updateUser = obj => {
    setUser(obj);
  };

  useEffect(() => {
    getUser().then(res => updateUser(res.data));
  }, []);

  if (!user.id)
    return (
      <Text fontSize={"3xl"} color={"#5f5f5f"} fontStyle={"italic"}>
        {user?.message}
      </Text>
    );
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
                {user?.ime_i_prezime}
              </Text>
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Email
              </Text>
              <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                {user?.email}
              </Text>
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Adresa
              </Text>
              <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                {user?.adresa}
              </Text>
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Ulica
              </Text>
              <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                {user?.ulica}
              </Text>
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Grad
              </Text>
              <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                {user?.grad}
              </Text>
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Postanski broj
              </Text>
              <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                {user?.postanski_broj}
              </Text>
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Broj Telefona
              </Text>
              <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                {"+387" + user?.broj_telefona}
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

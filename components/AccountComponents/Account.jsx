import {
  Avatar,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

function Account({ userObj }) {
  const [user] = useState(userObj);

  if (!user.email) {
    return (
      <div className="account-component">
        <Text
          fontSize={"2xl"}
          textAlign="center"
          color={"#f89a20"}
          fontStyle="italic"
        >
          Nalog
        </Text>
        <Divider borderColor={"#f89a20"} />

        <div className="account-body-no-auth">
          <Text fontSize={"2xl"} textAlign={"center"}>
            Ne mozete da pristupite stranici jer niste ulogovani!
          </Text>

          <Link href="/prijava" passHref legacyBehavior>
            <Button
              marginTop={"2rem"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "#f89a2099",
              }}
              _active={{
                backgroundColor: "#f89a20",
              }}
              backgroundColor={"#f89a20"}
              color={"#fff"}
              as={"a"}
            >
              Prijavi se
            </Button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="account-component">
        {!user && <h1>MAJMAUNEEEEEEEEEEEEEEEEEEEEEEEEE</h1>}
        <Text
          fontSize={"2xl"}
          textAlign="center"
          color={"#f89a20"}
          fontStyle="italic"
        >
          Nalog
        </Text>
        <Divider borderColor={"#f89a20"} />
        <div className="account-body">
          <div className="account-body-features">
            <Avatar size={"2xl"} src="/sveto.jpeg" />
            <Button
              _hover={{
                backgroundColor: "#f89a2099",
              }}
              _active={{
                backgroundColor: "#f89a20",
              }}
              backgroundColor={"#f89a20"}
              color={"#fff"}
              type="button"
            >
              Uredi profil
            </Button>
            <Button
              _hover={{
                backgroundColor: "#f89a2099",
              }}
              _active={{
                backgroundColor: "#f89a20",
              }}
              backgroundColor={"#f89a20"}
              color={"#fff"}
              type="button"
            >
              Moje narudzbe
            </Button>
          </div>
          <div className="account-body-info">
            <FormControl className="single-account-item">
              <FormLabel color={"#5f5f5f"} fontStyle="italic">
                Ime i prezime
              </FormLabel>
              <Input
                fontWeight={"bold"}
                outline={"1px solid #f89a20"}
                border="none"
                value={user?.ime_i_prezime}
                disabled
                type={"text"}
              />
            </FormControl>
            <FormControl className="single-account-item">
              <FormLabel color={"#5f5f5f"} fontStyle="italic">
                Email
              </FormLabel>
              <Input
                outline={"1px solid #f89a20"}
                border="none"
                disabled
                type={"email"}
                fontWeight={"bold"}
                value={user?.email}
              />
            </FormControl>
            <FormControl className="single-account-item">
              <FormLabel color={"#5f5f5f"} fontStyle="italic">
                Broj telefona
              </FormLabel>
              <Input
                fontWeight={"bold"}
                outline={"1px solid #f89a20"}
                border="none"
                disabled
                type={"number"}
                value={user?.broj_telefona}
              />
            </FormControl>
            <FormControl className="single-account-item">
              <FormLabel color={"#5f5f5f"} fontStyle="italic">
                Adresa
              </FormLabel>
              <Input
                fontWeight={"bold"}
                value={user?.adresa}
                outline={"1px solid #f89a20"}
                border="none"
                disabled
                type={"text"}
              />
            </FormControl>
            <FormControl className="single-account-item">
              <FormLabel color={"#5f5f5f"} fontStyle="italic">
                Ulica
              </FormLabel>
              <Input
                fontWeight={"bold"}
                outline={"1px solid #f89a20"}
                border="none"
                disabled
                type={"text"}
                value={user?.ulica}
              />
            </FormControl>
            <FormControl className="single-account-item">
              <FormLabel color={"#5f5f5f"} fontStyle="italic">
                Grad
              </FormLabel>
              <Input
                fontWeight={"bold"}
                outline={"1px solid #f89a20"}
                border="none"
                disabled
                type={"text"}
                value={user?.grad}
              />
            </FormControl>
            <FormControl className="single-account-item">
              <FormLabel color={"#5f5f5f"} fontStyle="italic">
                Postanski broj
              </FormLabel>
              <Input
                fontWeight={"bold"}
                outline={"1px solid #f89a20"}
                border="none"
                disabled
                type={"number"}
                value={user?.postanski_broj}
              />
            </FormControl>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;

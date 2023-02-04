import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import { Text, Icon, Avatar, Input, Button } from "@chakra-ui/react";
import { FaUserCheck } from "react-icons/fa";
import Image from "next/image";
import { MutatingDots } from "react-loader-spinner";
import axios from "axios";
import { getUser } from "../../fetchFunctions/getUser";
import { useGlobalContext } from "../../context/GlobalContext";
import { updateProfile } from "../../fetchFunctions/updateProfile";
import { toast } from "react-toastify";

function AccountComponent() {
  const [user, setUser] = useState();
  const router = useRouter();
  const newNameRef = useRef();
  const newEmailRef = useRef();
  const newCityRef = useRef();
  const newStreetRef = useRef();
  const newAddressRef = useRef();
  const newNumberRef = useRef();
  const newPostalRef = useRef();
  const { editProfile, updateEditProfile } = useGlobalContext();
  const updateUser = obj => {
    setUser(obj);
  };

  function isEmptyOrSpaces(str) {
    return str === null || str.toString().match(/^ *$/) !== null;
  }

  const updateLoading = () => {
    setLoading(prevState => !prevState);
  };

  useEffect(() => {
    getUser().then(res => {
      updateUser(res.data);
    });
  }, []);

  if (!user?.id)
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
              {editProfile ? (
                <Input
                  outline={"no-outline"}
                  ref={newNameRef}
                  color="#5f5f5f"
                  autoComplete={"off"}
                  outlineColor={"transparent"}
                  _hover={{ outline: "no-outline" }}
                  _focusVisible={{ outline: "no-outline" }}
                  // borderColor={"#f89a20"}
                  borderRadius={"15rem"}
                  backgroundColor="#fff"
                  type="text"
                  height={"1.5rem"}
                  minWidth={"10.5rem"}
                  maxWidth={"11.5rem"}
                  placeholder={user?.ime_i_prezime}
                />
              ) : (
                <>
                  <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                    {user?.ime_i_prezime}
                  </Text>
                </>
              )}
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Email
              </Text>
              {/* {editProfile ? (
                <Input
                  outline={"no-outline"}
                  ref={newEmailRef}
                  color="#5f5f5f"
                  autoComplete={"off"}
                  outlineColor={"transparent"}
                  _hover={{ outline: "no-outline" }}
                  _focusVisible={{ outline: "no-outline" }}
                  // borderColor={"#f89a20"}
                  borderRadius={"15rem"}
                  backgroundColor="#fff"
                  type="text"
                  height={"1.5rem"}
                  width={"10.5rem"}
                  placeholder={user?.email}
                />
              ) : (
                <>
                 
                </>
              )} */}
              <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                {user?.email}
              </Text>
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Adresa
              </Text>
              {editProfile ? (
                <Input
                  outline={"no-outline"}
                  ref={newAddressRef}
                  color="#5f5f5f"
                  autoComplete={"off"}
                  outlineColor={"transparent"}
                  _hover={{ outline: "no-outline" }}
                  _focusVisible={{ outline: "no-outline" }}
                  // borderColor={"#f89a20"}
                  borderRadius={"15rem"}
                  backgroundColor="#fff"
                  type="text"
                  height={"1.5rem"}
                  minWidth={"10.5rem"}
                  maxWidth={"11.5rem"}
                  placeholder={user?.adresa}
                />
              ) : (
                <>
                  <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                    {user?.adresa}
                  </Text>
                </>
              )}
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Ulica
              </Text>
              {editProfile ? (
                <Input
                  outline={"no-outline"}
                  ref={newStreetRef}
                  color="#5f5f5f"
                  autoComplete={"off"}
                  outlineColor={"transparent"}
                  _hover={{ outline: "no-outline" }}
                  _focusVisible={{ outline: "no-outline" }}
                  // borderColor={"#f89a20"}
                  borderRadius={"15rem"}
                  backgroundColor="#fff"
                  type="text"
                  height={"1.5rem"}
                  minWidth={"10.5rem"}
                  maxWidth={"11.5rem"}
                  zIndex={"1"}
                  placeholder={user?.ulica}
                />
              ) : (
                <>
                  <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                    {user?.ulica}
                  </Text>
                </>
              )}
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Grad
              </Text>
              {editProfile ? (
                <Input
                  outline={"no-outline"}
                  ref={newCityRef}
                  color="#5f5f5f"
                  autoComplete={"off"}
                  outlineColor={"transparent"}
                  _hover={{ outline: "no-outline" }}
                  _focusVisible={{ outline: "no-outline" }}
                  // borderColor={"#f89a20"}
                  borderRadius={"15rem"}
                  backgroundColor="#fff"
                  type="text"
                  height={"1.5rem"}
                  minWidth={"10.5rem"}
                  maxWidth={"11.5rem"}
                  placeholder={user?.grad}
                />
              ) : (
                <>
                  <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                    {user?.grad}
                  </Text>
                </>
              )}
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Poštanski broj
              </Text>
              {editProfile ? (
                <Input
                  outline={"no-outline"}
                  ref={newPostalRef}
                  color="#5f5f5f"
                  autoComplete={"off"}
                  outlineColor={"transparent"}
                  _hover={{ outline: "no-outline" }}
                  _focusVisible={{ outline: "no-outline" }}
                  // borderColor={"#f89a20"}
                  borderRadius={"15rem"}
                  backgroundColor="#fff"
                  type="text"
                  height={"1.5rem"}
                  minWidth={"10.5rem"}
                  maxWidth={"11.5rem"}
                  placeholder={user?.postanski_broj}
                />
              ) : (
                <>
                  <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                    {user?.postanski_broj}
                  </Text>
                </>
              )}
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"lg"}>
                Broj Telefona
              </Text>
              {editProfile ? (
                <Input
                  outline={"no-outline"}
                  ref={newNumberRef}
                  color="#5f5f5f"
                  autoComplete={"off"}
                  outlineColor={"transparent"}
                  _hover={{ outline: "no-outline" }}
                  _focusVisible={{ outline: "no-outline" }}
                  // borderColor={"#f89a20"}
                  borderRadius={"15rem"}
                  backgroundColor="#fff"
                  type="number"
                  height={"1.5rem"}
                  minWidth={"10.5rem"}
                  maxWidth={"11.5rem"}
                  placeholder={user?.broj_telefona}
                />
              ) : (
                <>
                  <Text color={"#5f5f5f"} fontSize={"md"} fontWeight="bold">
                    {"+387" + user?.broj_telefona}
                  </Text>
                </>
              )}
            </div>
            <div className="account-showcase-body-single">
              {editProfile && (
                <Button
                  _hover={{
                    backgroundColor: "#4CBB1799",
                  }}
                  _active={{
                    backgroundColor: "#4CBB17",
                  }}
                  backgroundColor={"#4CBB17"}
                  color={"#fff"}
                  type={"submit"}
                  onClick={async () => {
                    const payload = {
                      ime_i_prezime: newNameRef?.current.value
                        ? newNameRef?.current.value
                        : user?.ime_i_prezime,
                      ulica: newStreetRef?.current.value
                        ? newStreetRef?.current.value
                        : user?.ulica,
                      grad: newCityRef?.current.value
                        ? newCityRef?.current.value
                        : user?.grad,
                      postanski_broj: newPostalRef?.current.value
                        ? newPostalRef?.current.value
                        : user?.postanski_broj,
                      broj_telefona: newNumberRef?.current.value
                        ? newNumberRef?.current.value
                        : user?.broj_telefona,
                      adresa: newAddressRef?.current.value
                        ? newAddressRef?.current.value
                        : user?.adresa,
                      email: user?.email,
                    };

                    if (
                      isEmptyOrSpaces(newNameRef.current.value) &
                      isEmptyOrSpaces(newAddressRef.current.value) &
                      isEmptyOrSpaces(newNumberRef.current.value) &
                      isEmptyOrSpaces(newCityRef.current.value) &
                      isEmptyOrSpaces(newPostalRef.current.value) &
                      isEmptyOrSpaces(newStreetRef.current.value)
                    ) {
                      toast("Nema promjena!", {
                        progressStyle: {
                          background: "red",
                        },
                      });
                      updateEditProfile();
                    } else {
                      const res = await updateProfile(payload);
                      if (res?.data?.msg) {
                        toast(res?.data?.msg, {
                          progressStyle: { background: "#4CBB17" },
                        });
                        updateEditProfile();
                        router.reload();
                      } else {
                        toast(res?.data?.err, {
                          progressStyle: { background: "red" },
                        });
                      }
                    }
                  }}
                  borderRadius={"15rem"}
                >
                  Snimi izmjene
                </Button>
              )}
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

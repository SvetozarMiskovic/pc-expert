import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import { Text, Icon, Avatar, Input, Button } from "@chakra-ui/react";
import { FaUserCheck, FaEdit } from "react-icons/fa";
import Image from "next/image";
import { MutatingDots } from "react-loader-spinner";
import axios from "axios";
import { useGlobalContext } from "../../context/GlobalContext";
import { useAuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useUser } from "../../hooks/useUser";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";

function AccountComponent({ data }) {
  const { editProfile, updateEditProfile } = useGlobalContext();
  const { logedUser, updateRole, activeUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState();

  const { mutateAsync: updateProfile } = useUpdateProfile();

  const router = useRouter();
  const newNameRef = useRef();
  const newEmailRef = useRef();
  const newCityRef = useRef();
  const newStreetRef = useRef();
  const newAddressRef = useRef();
  const newNumberRef = useRef();
  const newPostalRef = useRef();
  // const updateUser = obj => {
  //   setUser(obj);
  // };

  function isEmptyOrSpaces(str) {
    return str === null || str.toString().match(/^ *$/) !== null;
  }

  const handleUpdate = async () => {
    setLoading(true);
    const payload = {
      ime_i_prezime: newNameRef?.current.value
        ? newNameRef?.current.value
        : activeUser?.ime_i_prezime,
      ulica: newStreetRef?.current.value
        ? newStreetRef?.current.value
        : activeUser?.ulica,
      grad: newCityRef?.current.value
        ? newCityRef?.current.value
        : activeUser?.grad,
      postanski_broj: newPostalRef?.current.value
        ? newPostalRef?.current.value
        : activeUser?.postanski_broj,
      broj_telefona: newNumberRef?.current.value
        ? newNumberRef?.current.value
        : activeUser?.broj_telefona,
      adresa: newAddressRef?.current.value
        ? newAddressRef?.current.value
        : activeUser?.adresa,
      email: activeUser?.email,
    };

    const isUpdated = await updateProfile({ userInfo: payload, id: logedUser });

    if (isUpdated) {
      setLoading(false);
      updateEditProfile();
      router.reload();
      toast("Uspješna izmjena!", {
        progressStyle: {
          background: "#4CBB17",
        },
      });
    } else {
      toast("Došlo je do greške! Pokušajte ponovo!", {
        progressStyle: {
          background: "red",
        },
      });
      setLoading(false);
      updateEditProfile();
    }
    // if (
    //   isEmptyOrSpaces(newNameRef.current.value) &
    //   isEmptyOrSpaces(newAddressRef.current.value) &
    //   isEmptyOrSpaces(newNumberRef.current.value) &
    //   isEmptyOrSpaces(newCityRef.current.value) &
    //   isEmptyOrSpaces(newPostalRef.current.value) &
    //   isEmptyOrSpaces(newStreetRef.current.value)
    // ) {
    //   toast("Nema promjena!", {
    //     progressStyle: {
    //       background: "red",
    //     },
    //   });
    //   updateEditProfile();
    //   setLoading(false);
    // } else {
    //   const res = await updateProfile(payload);
    //   if (res?.activeUser?.msg) {
    //     toast(res?.activeUser?.msg, {
    //       progressStyle: { background: "#4CBB17" },
    //     });
    //     updateEditProfile();
    //     setLoading(false);
    //     router.reload();
    //   } else {
    //     toast(res?.activeUser?.err, {
    //       progressStyle: { background: "red" },
    //     });
    //     setLoading(false);
    //   }
    // }
  };
  if (!activeUser) {
    return <h1>Niste ulogovani</h1>;
  }
  return (
    <div className="account-showcase-wrapper">
      <div className="account-showcase-component">
        <div className="account-showcase-header">
          <div className="account-showcase-header-title">
            <div>
              <Icon as={FaUserCheck} fontSize={"4xl"} color={"#f89a20"} />
              <Text fontSize={"3xl"} color={"#0c0c0c"} fontWeight="bold">
                Moj korisnički račun
              </Text>
            </div>
            <Text fontSize={"md"}>Prikaz podataka o korisničkom računu</Text>
          </div>
          <div className="account-showcase-header-edit-btn">
            <button
              className="edit-acc-btn btn"
              onClick={() => updateEditProfile()}
            >
              <Icon fontSize={"2xl"} as={FaEdit} zIndex="1" />
              <Text zIndex="1" fontSize={"xl"}>
                {!editProfile ? "Uredi" : "Poništi"}
              </Text>
            </button>

            {/* <Text  >
              Uredi
            </Text> */}
          </div>
        </div>
        <div className="account-showcase-body">
          <div className="account-showcase-body-info">
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"xl"}>
                Ime i prezime
              </Text>
              {editProfile ? (
                <motion.div
                  className="motion-div"
                  initial={{ x: "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
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
                    placeholder={activeUser?.ime_i_prezime}
                  />
                </motion.div>
              ) : (
                <>
                  <motion.div
                    className="motion-div"
                    initial={{ x: "-50%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <Text color={"#0c0c0c"} fontSize={"lg"} fontWeight="bold">
                      {activeUser?.ime_i_prezime}
                    </Text>
                  </motion.div>
                </>
              )}
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"xl"}>
                Email
              </Text>

              <motion.div
                className="motion-div"
                initial={{ x: "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <Text color={"#0c0c0c"} fontSize={"lg"} fontWeight="bold">
                  {activeUser?.email}
                </Text>
              </motion.div>
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"xl"}>
                Adresa
              </Text>
              {editProfile ? (
                <motion.div
                  className="motion-div"
                  initial={{ x: "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <Input
                    outline={"no-outline"}
                    ref={newAddressRef}
                    color="#0c0c0c"
                    autoComplete={"off"}
                    outlineColor={"transparent"}
                    _hover={{ outline: "no-outline" }}
                    _focusVisible={{ outline: "no-outline" }}
                    // borderColor={"#f89a20"}
                    borderRadius={"15rem"}
                    backgroundColor="#fff"
                    type="text"
                    placeholder={activeUser?.adresa}
                  />
                </motion.div>
              ) : (
                <>
                  <motion.div
                    className="motion-div"
                    initial={{ x: "-50%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <Text color={"#0c0c0c"} fontSize={"lg"} fontWeight="bold">
                      {activeUser?.adresa}
                    </Text>
                  </motion.div>
                </>
              )}
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"xl"}>
                Ulica
              </Text>
              {editProfile ? (
                <motion.div
                  className="motion-div"
                  initial={{ x: "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
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
                    zIndex={"1"}
                    placeholder={activeUser?.ulica}
                  />
                </motion.div>
              ) : (
                <>
                  <motion.div
                    className="motion-div"
                    initial={{ x: "-50%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <Text color={"#0c0c0c"} fontSize={"lg"} fontWeight="bold">
                      {activeUser?.ulica}
                    </Text>
                  </motion.div>
                </>
              )}
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"xl"}>
                Grad
              </Text>
              {editProfile ? (
                <motion.div
                  className="motion-div"
                  initial={{ x: "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
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
                    placeholder={activeUser?.grad}
                  />
                </motion.div>
              ) : (
                <>
                  <motion.div
                    className="motion-div"
                    initial={{ x: "-50%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <Text color={"#0c0c0c"} fontSize={"lg"} fontWeight="bold">
                      {activeUser?.grad}
                    </Text>
                  </motion.div>
                </>
              )}
            </div>
            <div className="account-showcase-body-single">
              <Text color={"#5f5f5f"} fontSize={"xl"}>
                Poštanski broj
              </Text>
              {editProfile ? (
                <motion.div
                  className="motion-div"
                  initial={{ x: "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
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
                    placeholder={activeUser?.postanski_broj}
                  />
                </motion.div>
              ) : (
                <>
                  <motion.div
                    className="motion-div"
                    initial={{ x: "-50%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <Text color={"#0c0c0c"} fontSize={"lg"} fontWeight="bold">
                      {activeUser?.postanski_broj}
                    </Text>
                  </motion.div>
                </>
              )}
            </div>
            <div className={"account-showcase-body-single"}>
              <Text color={"#5f5f5f"} fontSize={"xl"}>
                Broj Telefona
              </Text>
              {editProfile ? (
                <motion.div
                  className="motion-div"
                  initial={{ x: "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
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
                    placeholder={activeUser?.broj_telefona}
                  />
                </motion.div>
              ) : (
                <>
                  <motion.div
                    className="motion-div"
                    initial={{ x: "-50%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <Text color={"#0c0c0c"} fontSize={"lg"} fontWeight="bold">
                      {activeUser?.broj_telefona
                        ? activeUser?.broj_telefona
                        : ""}
                    </Text>
                  </motion.div>
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
                  width="100%"
                  // marginTop={"2.1rem"}
                  type={"submit"}
                  display="flex"
                  // alignContent={'flex-end'}
                  justifySelf={"flex-end"}
                  alignSelf={"flex-end"}
                  // height={"100%"}
                  onClick={handleUpdate}
                  borderRadius={"15rem"}
                  isLoading={loading}
                >
                  Snimi izmjene
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountComponent;

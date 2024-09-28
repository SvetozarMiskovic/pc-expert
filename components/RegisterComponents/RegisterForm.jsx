import React, { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import {
  Divider,
  FormControl,
  FormLabel,
  Text,
  Input,
  Button,
  Icon,
  InputRightElement,
  InputGroup,
  Checkbox,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/router";
import { resetRegisterForm } from "../../utils/resetRegisterForm";
import { useRegisterUser } from "../../hooks/useRegisterUser";
import { useUser, fetchUser } from "../../hooks/useUser";

import { useLoginUser } from "../../hooks/useLoginUser";
function RegisterForm() {
  const router = useRouter();
  const { isSuccess, mutateAsync: registerUser } = useRegisterUser();
  const { mutateAsync: loginUser } = useLoginUser();
  const [emailLoading, setEmailLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [terms, setTerms] = useState(false);
  const [showPw, setShowPW] = useState(false);
  const [showCPw, setShowCPW] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const addressRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const postalRef = useRef();
  const pwRef = useRef();
  const cpwRef = useRef();

  const handleGoogleSignIn = async (e) => {
    setGoogleLoading(true);

    //   const response = signInWithPopup(auth, googleProvider)
    //     .then((data) => {
    //       setGoogleLoading(false);
    //       return data;
    //     })
    //     .catch((err) => {
    //       console.log(err.message, err.code);
    //       toast(
    //         err?.code === "auth/popup-closed-by-user"
    //           ? "Google prijava otkazana!"
    //           : "Došlo je do greške! Osvježite stranicu i pokušajte ponovo!",

    //         {
    //           progressStyle: {
    //             background: "red",
    //           },
    //         }
    //       );
    //       setGoogleLoading(false);
    //     });

    //   const logedUser = await response;

    //   if (logedUser) {
    //     const isNew = getAdditionalUserInfo(logedUser).isNewUser;

    //     const userInfo = {
    //       ime_i_prezime: logedUser.user.displayName
    //         ? logedUser.user.displayName
    //         : "",
    //       email: logedUser.user.email ? logedUser.user.email : "",
    //       broj_telefona: logedUser.user.phoneNumber
    //         ? logedUser.user.phoneNumber
    //         : "",
    //       id: logedUser.user.uid ? logedUser.user.uid : "",
    //       role: "customer",
    //       adresa: "",
    //       grad: "",
    //       ulica: "",
    //       postanski_broj: "",
    //     };

    //     if (isNew) {
    //       const payload = {
    //         userInfo,
    //         jwt: logedUser?.user?.accessToken,
    //         isGoogle: true,
    //       };
    //       console.log("EVOT PEJLOD", payload);
    //       const response = await registerUser(payload);
    //       console.log("OVOT JE RSIPONSE", response);
    //       if (!response.auth) {
    //         toast(response?.message, {
    //           progressStyle: { background: "red" },
    //         });
    //       } else {
    //         toast(response?.auth, {
    //           progressStyle: { background: "#4CBB17" },
    //         });
    //         router.push("/");
    //         router.reload();
    //       }
    //     } else {
    //       const tokenData = { token: logedUser.user.accessToken };
    //       console.log("pejloud", tokenData);
    //       const response = await loginUser(tokenData);
    //       toast(response.auth, {
    //         progressStyle: {
    //           background: "#4CBB17",
    //         },
    //       });
    //       router.push("/");
    //     }
    //   }

    //   // setEmailLoading(prevstate => !prevstate);
    // };

    // const handleRegister = async () => {
    //   setEmailLoading(true);
    //   if (!emailRef.current.value) {
    //     toast("Unesite email!", {
    //       progressStyle: {
    //         background: "red",
    //       },
    //     });
    //     setEmailLoading(false);
    //   }

    //   if (pwRef.current.value !== cpwRef.current.value) {
    //     toast("Lozinke se ne podudaraju!", {
    //       progressStyle: {
    //         background: "red",
    //       },
    //     });
    //     setEmailLoading(false);
    //   }

    //   if (
    //     pwRef.current.value === cpwRef.current.value &&
    //     emailRef.current.value
    //   ) {
    //     createUserWithEmailAndPassword(
    //       auth,
    //       emailRef.current.value,
    //       pwRef.current.value
    //     )
    //       .then(async (userCred) => {
    //         console.log(userCred);

    //         const isNew = getAdditionalUserInfo(userCred).isNewUser;
    //         console.log("postoji li", isNew);
    //         let userInfo = {
    //           ime_i_prezime: userCred.user.displayName
    //             ? userCred.user.displayName
    //             : nameRef.current.value,
    //           email: userCred.user.email ? userCred.user.email : "",
    //           broj_telefona: userCred.user.phoneNumber
    //             ? userCred.user.phoneNumber
    //             : numberRef.current.value,
    //           id: userCred.user.uid ? userCred.user.uid : "",
    //           role: "customer",
    //           adresa: addressRef.current.value,
    //           grad: cityRef.current.value,
    //           ulica: streetRef.current.value,
    //           postanski_broj: postalRef.current.value,
    //         };

    //         const payload = {
    //           userInfo,
    //           jwt: userCred?.user?.accessToken,
    //           isGoogle: false,
    //         };

    //         if (isNew) {
    //           const response = await registerUser(payload);
    //           if (response.auth) {
    //             toast(response.auth, {
    //               progressStyle: {
    //                 background: "#4CBB17",
    //               },
    //             });
    //             setEmailLoading(false);
    //             router.push("/");
    //             router.reload();
    //           } else {
    //             toast(response.message, {
    //               progressStyle: {
    //                 background: "red",
    //               },
    //             });
    //             setEmailLoading(false);
    //           }
    //         } else {
    //           const tokenData = { token: userCred.user.accessToken };
    //           console.log("pejloud", tokenData);
    //           const response = await loginUser(tokenData);
    //           toast(response.auth, {
    //             progressStyle: {
    //               background: "#4CBB17",
    //             },
    //           });
    //           router.push("/");
    //         }
    //       })
    //       .catch((err) => {
    //         console.log(err.code);
    //         if (err.code === "auth/missing-password") {
    //           toast("Unesite lozinku!", {
    //             progressStyle: {
    //               background: "red",
    //             },
    //           });
    //           setEmailLoading(false);
    //         }
    //         if (err.code === "auth/weak-password") {
    //           toast(
    //             "Lozinka preslaba! Minimalna dužina lozinke treba biti 6 ili više karaktera!",
    //             {
    //               progressStyle: {
    //                 background: "red",
    //               },
    //             }
    //           );
    //           setEmailLoading(false);
    //         }
    //         if (err.code === "auth/invalid-email") {
    //           toast(
    //             "Email nije ispravan! Unesite ispravan email i pokušajte ponovo!",
    //             {
    //               progressStyle: {
    //                 background: "red",
    //               },
    //             }
    //           );
    //           setEmailLoading(false);
    //         }
    //         if (err.code === "auth/email-already-in-use") {
    //           toast(
    //             "Email je već u upotrebi! Unesite drugi email i pokušajte ponovo!",
    //             {
    //               progressStyle: {
    //                 background: "red",
    //               },
    //             }
    //           );
    //           setEmailLoading(false);
    //         }
    //       });
    //   }

    //   // let payload;
    //   // e.preventDefault();
    //   // setEmailLoading(true);
    //   // payload = {
    //   //   ime_i_prezime: nameRef.current.value,
    //   //   email: emailRef.current.value,
    //   //   broj_telefona: numberRef.current.value,
    //   //   adresa: addressRef.current.value,
    //   //   grad: cityRef.current.value,
    //   //   ulica: streetRef.current.value,
    //   //   postanski_broj: postalRef.current.value,
    //   //   lozinka: pwRef.current.value,
    //   //   role: "customer",
    //   // };
    //   // if (payload.lozinka === cpwRef.current.value && payload.email) {
    //   //   const response = await registerUser({ userInfo: payload });
    //   //   // console.log(useUser());
    //   //   if (!response.auth) {
    //   //     toast(response?.message, {
    //   //       progressStyle: { background: "red" },
    //   //     });
    //   //     setEmailLoading(false);
    //   //   } else {
    //   //     console.log("rezultat nakon mutejsna", response);
    //   //     toast(response?.auth, {
    //   //       progressStyle: { background: "#4CBB17" },
    //   //     });
    //   //     setEmailLoading(false);
    //   //     resetRegisterForm(
    //   //       nameRef,
    //   //       emailRef,
    //   //       numberRef,
    //   //       addressRef,
    //   //       streetRef,
    //   //       cityRef,
    //   //       postalRef,
    //   //       pwRef,
    //   //       cpwRef
    //   //     );
    //   //   }
    //   // } else {
    //   //   toast("Lozinke se ne podudaraju! Pokusajte ponovo.", {
    //   //     progressStyle: { background: "red" },
    //   //   });
    //   //   setEmailLoading(prevState => !prevState);
    //   // }
    // };

    return (
      <div className="register-component">
        <form>
          <div className="register-header">
            <div className="header-image">
              <Image width={150} height={150} src="/static/T1.png" alt="logo" />
            </div>
            {/* <Text color="#f89a20" fontSize="3xl">
            Registrujte novi nalog
          </Text> */}
          </div>
          <div className="register-grid">
            <FormControl className="register-name">
              <Input
                placeholder="Ime i prezime"
                ref={nameRef}
                color="#5f5f5f"
                autoComplete={"off"}
                outlineColor={"transparent"}
                outline={"no-outline"}
                _hover={{ outline: "no-outline" }}
                _focusVisible={{ outline: "no-outline" }}
                backgroundColor="#fff"
                borderRadius={"15rem"}
                type="text"
              />
            </FormControl>
            <FormControl className="register-email" isRequired>
              <Input
                placeholder="E-mail"
                ref={emailRef}
                color="#5f5f5f"
                autoComplete={"off"}
                outlineColor={"transparent"}
                outline={"no-outline"}
                _hover={{ outline: "no-outline" }}
                _focusVisible={{ outline: "no-outline" }}
                backgroundColor="#fff"
                borderRadius={"15rem"}
                type="email"
              />
            </FormControl>
            <FormControl className="register-address">
              <Input
                placeholder="Adresa"
                ref={addressRef}
                color="#5f5f5f"
                autoComplete={"off"}
                outlineColor={"transparent"}
                outline={"no-outline"}
                _hover={{ outline: "no-outline" }}
                _focusVisible={{ outline: "no-outline" }}
                backgroundColor="#fff"
                borderRadius={"15rem"}
                type="text"
              />
            </FormControl>
            <FormControl className="register-street">
              <Input
                placeholder="Ulica"
                ref={streetRef}
                color="#5f5f5f"
                autoComplete={"off"}
                outlineColor={"transparent"}
                outline={"no-outline"}
                _hover={{ outline: "no-outline" }}
                _focusVisible={{ outline: "no-outline" }}
                backgroundColor="#fff"
                borderRadius={"15rem"}
                type="text"
              />
            </FormControl>
            <FormControl className="register-city">
              <Input
                placeholder="Grad"
                ref={cityRef}
                color="#5f5f5f"
                autoComplete={"off"}
                outlineColor={"transparent"}
                outline={"no-outline"}
                _hover={{ outline: "no-outline" }}
                _focusVisible={{ outline: "no-outline" }}
                backgroundColor="#fff"
                borderRadius={"15rem"}
                type="text"
              />
            </FormControl>
            <FormControl className="register-pn">
              <Input
                placeholder="Postanski broj"
                ref={postalRef}
                color="#5f5f5f"
                autoComplete={"off"}
                outlineColor={"transparent"}
                outline={"no-outline"}
                _hover={{ outline: "no-outline" }}
                _focusVisible={{ outline: "no-outline" }}
                backgroundColor="#fff"
                borderRadius={"15rem"}
                type="number"
              />
            </FormControl>
            <FormControl className="register-phn">
              <Input
                placeholder="Broj telefona"
                ref={numberRef}
                color="#5f5f5f"
                autoComplete={"off"}
                outlineColor={"transparent"}
                outline={"no-outline"}
                _hover={{ outline: "no-outline" }}
                _focusVisible={{ outline: "no-outline" }}
                backgroundColor="#fff"
                borderRadius={"15rem"}
                type="number"
              />
            </FormControl>
            <FormControl className="register-pw" isRequired>
              <InputGroup>
                <Input
                  placeholder="Lozinka"
                  ref={pwRef}
                  color="#5f5f5f"
                  autoComplete={"off"}
                  outlineColor={"transparent"}
                  outline={"no-outline"}
                  _hover={{ outline: "no-outline" }}
                  _focusVisible={{ outline: "no-outline" }}
                  type={showPw ? "text" : "password"}
                  backgroundColor="#fff"
                  borderRadius={"15rem"}
                />
                <InputRightElement>
                  <Button
                    background={"transparent"}
                    _hover={{ background: "transparent" }}
                    _active={{ background: "transparent" }}
                    onClick={() => setShowPW(!showPw)}
                  >
                    {showPw ? (
                      <Icon color={"#5f5f5f"} as={FaEyeSlash} />
                    ) : (
                      <Icon color={"#5f5f5f"} as={FaEye} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl className="register-cpw" isRequired>
              <InputGroup>
                <Input
                  placeholder="Potvrdi lozinku"
                  ref={cpwRef}
                  color="#5f5f5f"
                  autoComplete={"off"}
                  outlineColor={"transparent"}
                  outline={"no-outline"}
                  _hover={{ outline: "no-outline" }}
                  _focusVisible={{ outline: "no-outline" }}
                  backgroundColor="#fff"
                  borderRadius={"15rem"}
                  type={showCPw ? "text" : "password"}
                />
                <InputRightElement>
                  <Button
                    background={"transparent"}
                    _hover={{ background: "transparent" }}
                    _active={{ background: "transparent" }}
                    onClick={() => setShowCPW(!showCPw)}
                  >
                    {showCPw ? (
                      <Icon color={"#5f5f5f"} as={FaEyeSlash} />
                    ) : (
                      <Icon color={"#5f5f5f"} as={FaEye} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              gap={"0.4rem"}
            >
              <Checkbox
                borderColor={"#0c0c0c"}
                colorScheme={"green"}
                size={"lg"}
                onChange={(e) => setTerms(e.target.checked)}
              />
              <FormLabel margin={0} cursor={"pointer"} color={"#0c0c0c"}>
                Upoznat/a sam i slažem se sa pravilima privatnosti.
              </FormLabel>
            </FormControl>
          </div>
          <div className="register-buttons">
            <Button
              isDisabled={!terms}
              _hover={{
                backgroundColor: "#4CBB1799",
              }}
              _active={{
                backgroundColor: "#4CBB17",
              }}
              borderRadius={"12rem"}
              backgroundColor={"#4CBB17"}
              width={"50%"}
              color={"#fff"}
              className="register-submit"
              type="button"
              onClick={() => handleRegister()}
              isLoading={emailLoading}
              loadingText={"Obradjujem zahtjev..."}
            >
              Registruj se
            </Button>
            <Button
              _hover={{
                backgroundColor: "#007FFF99",
              }}
              _active={{
                backgroundColor: "#007FFF",
              }}
              backgroundColor={"#007FFF"}
              borderRadius={"12rem"}
              width={"50%"}
              color={"#fff"}
              className="register-submit"
              type="button"
              onClick={() => {
                router.push("/prijava");
              }}
              loadingText={"Obradjujem zahtjev..."}
            >
              Prijavi se
            </Button>
          </div>
          <FormControl
            width={"100%"}
            display="flex"
            gap={"1rem"}
            marginTop={"2rem"}
            justifyContent={"center"}
          >
            <Button
              width={"25rem"}
              height={"3.5rem"}
              borderRadius={"15rem"}
              transition={"200ms ease-in"}
              _hover={{
                transform: "scaleX(0.95)",
                transition: "200ms ease-in",
              }}
              _active={{
                transition: "200ms ease-in",
              }}
              // backgroundColor={"#007FFF"}
              bgGradient={
                "linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335)"
              }
              color={"#fff"}
              type={"button"}
              display={"flex"}
              gap={"0.5rem"}
              fontSize={"xl"}
              isLoading={googleLoading}
              onClick={handleGoogleSignIn}
            >
              <Icon
                as={FaGoogle}
                fontSize={"5xl"}
                padding={"0.3rem"}
                borderRadius={"3rem"}
                color={"#fff"}
              />
              Prijavi se sa Google nalogom
            </Button>
          </FormControl>
        </form>
      </div>
    );
  };
}

export default RegisterForm;

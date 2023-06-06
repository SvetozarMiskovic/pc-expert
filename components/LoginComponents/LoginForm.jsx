import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FormControl,
  Input,
  FormLabel,
  InputRightElement,
  InputGroup,
  Button,
  Icon,
  Divider,
  Text,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash, FaGoogle, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";

import {
  signInWithPopup,
  getAdditionalUserInfo,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { useRegisterUser } from "../../hooks/useRegisterUser";
import { useLoginUser } from "../../hooks/useLoginUser";

function LoginForm() {
  const [emailLoading, setEmailLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const { mutateAsync: registerUser } = useRegisterUser();
  const { mutateAsync: loginUser } = useLoginUser();
  const [showPw, setShowPW] = useState(false);
  const emailRef = useRef();
  const pwRef = useRef();

  const { updateLoged, updateLogedUser, isLoged } = useAuthContext();
  const router = useRouter();

  // useEffect(() => {
  //   if (isLoged) {
  //     router.push("/");
  //   }
  // }, [isLoged, router]);

  const handleSignIn = async e => {
    e.preventDefault();

    setEmailLoading(true);
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      pwRef.current.value
    )
      .then(async userCreds => {
        setEmailLoading(false);
        console.log(userCreds.user);
        const payload = { token: userCreds.user.accessToken };
        console.log("pejloud", payload);
        const response = await loginUser(payload);
        toast(response.auth, {
          progressStyle: {
            background: "#4CBB17",
          },
        });
        router.push("/");
      })
      .catch(err => {
        console.log(err.code);
        if (err.code === "auth/invalid-email") {
          toast("Email nije ispravan!", {
            progressStyle: {
              background: "red",
            },
          });
          setEmailLoading(false);
        }
        if (err.code === "auth/missing-password") {
          toast("Unesite lozinku!", {
            progressStyle: {
              background: "red",
            },
          });
          setEmailLoading(false);
        }
        if (err.code === "auth/wrong-password") {
          toast("Pogrešna lozinka!", {
            progressStyle: {
              background: "red",
            },
          });
          setEmailLoading(false);
        }
        if (err.code === "auth/user-not-found") {
          toast("Korisnik ne postoji!", {
            progressStyle: {
              background: "red",
            },
          });
          setEmailLoading(false);
        }
      });
  };
  const handleGoogleSignIn = async e => {
    setGoogleLoading(true);

    const response = signInWithPopup(auth, googleProvider)
      .then(data => {
        setGoogleLoading(false);
        return data;
      })
      .catch(err => {
        console.log(err.message, err.code);
        toast(
          err?.code === "auth/popup-closed-by-user"
            ? "Google prijava otkazana!"
            : "Došlo je do greške! Osvježite stranicu i pokušajte ponovo!",

          {
            progressStyle: {
              background: "red",
            },
          }
        );
        setGoogleLoading(false);
      });

    const logedUser = await response;

    if (logedUser) {
      const isNew = getAdditionalUserInfo(logedUser).isNewUser;

      const userInfo = {
        ime_i_prezime: logedUser.user.displayName
          ? logedUser.user.displayName
          : "",
        email: logedUser.user.email ? logedUser.user.email : "",
        broj_telefona: logedUser.user.phoneNumber
          ? logedUser.user.phoneNumber
          : "",
        id: logedUser.user.uid ? logedUser.user.uid : "",
        role: "customer",
        adresa: "",
        grad: "",
        ulica: "",
        postanski_broj: "",
      };

      if (isNew) {
        const payload = {
          userInfo,
          jwt: logedUser?.user?.accessToken,
          isGoogle: true,
        };

        const response = await registerUser(payload);

        if (!response.auth) {
          toast(response?.message, {
            progressStyle: { background: "red" },
          });
        } else {
          toast(response?.auth, {
            progressStyle: { background: "#4CBB17" },
          });
          router.push("/");
          router.reload();
        }
      } else {
        const tokenData = { token: logedUser.user.accessToken };
        console.log("pejloud", tokenData);
        const response = await loginUser(tokenData);
        toast(response.auth, {
          progressStyle: {
            background: "#4CBB17",
          },
        });
        router.push("/");
      }
    }

    // setEmailLoading(prevstate => !prevstate);
  };

  return (
    <div className="login-component">
      <form onSubmit={handleSignIn}>
        <div className="login-header">
          <div className="header-image">
            <Image width={150} height={150} src="/static/T1.png" alt="logo" />
          </div>

          {/* <Text color="#007FFF" fontSize="5xl" fontWeight={"bold"}>
            PC <span style={{ color: "#4CBB17" }}>Expert</span>
          </Text> */}
        </div>
        <div className="login-body">
          <FormControl>
            <Input
              placeholder={"E-mail"}
              outline={"no-outline"}
              ref={emailRef}
              color="#5f5f5f"
              autoComplete={"off"}
              outlineColor={"transparent"}
              _hover={{ outline: "no-outline" }}
              _focusVisible={{ outline: "no-outline" }}
              // borderColor={"#f89a20"}
              borderRadius={"15rem"}
              backgroundColor="#fff"
              type={"email"}
              width={"100%"}
            />
          </FormControl>
          <FormControl>
            <InputGroup>
              <Input
                width={"100%"}
                backgroundColor="#fff"
                borderRadius={"15rem"}
                ref={pwRef}
                color="#5f5f5f"
                autoComplete={"off"}
                outlineColor={"transparent"}
                outline={"no-outline"}
                _hover={{ outline: "no-outline" }}
                _focusVisible={{ outline: "no-outline" }}
                placeholder={"Lozinka"}
                // borderColor={"#f89a20"}
                type={showPw ? "text" : "password"}
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
        </div>

        <Link href="/zaboravljenaLozinka">
          <Text
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"0.3rem"}
            _hover={{
              textDecoration: "underline",
            }}
            fontSize={"sm"}
            fontWeight={"bold"}
            fontStyle={"italic"}
            color={"#5f5f5f"}
          >
            Zaboravio/la sam lozinku <Icon as={FaLock} />
          </Text>
        </Link>
        <FormControl
          width={"100%"}
          display="flex"
          gap={"1rem"}
          justifyContent={"center"}
        >
          <Button
            width={"12rem"}
            _hover={{
              backgroundColor: "#4CBB1799",
            }}
            _active={{
              backgroundColor: "#4CBB17",
            }}
            backgroundColor={"#4CBB17"}
            color={"#fff"}
            type={"submit"}
            // onClick={() => handleSignIn()}
            isLoading={emailLoading}
            borderRadius={"15rem"}
          >
            Prijavi se
          </Button>
          <Button
            width={"12rem"}
            borderRadius={"15rem"}
            _hover={{
              backgroundColor: "#007FFF99",
            }}
            _active={{
              backgroundColor: "#007FFF",
            }}
            onClick={() => {
              router.push("/registracija");
            }}
            backgroundColor={"#007FFF"}
            color={"#fff"}
            type={"button"}
          >
            Registruj se
          </Button>
        </FormControl>
        <FormControl
          width={"100%"}
          display="flex"
          gap={"1rem"}
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
}

export default LoginForm;

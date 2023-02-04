import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { loginUser } from "../../fetchFunctions/loginUser";
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
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { checkLogin } from "../../fetchFunctions/checkLogin";

function LoginForm() {
  const [loading, setLoading] = useState(false);

  const [showPw, setShowPW] = useState(false);
  const emailRef = useRef();
  const pwRef = useRef();

  const { updateLoged, updateLogedUser, isLoged } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (isLoged) {
      router.push("/");
    }
  }, [isLoged, router]);

  const handleSubmit = async e => {
    let payload;
    e.preventDefault();

    payload = {
      email: emailRef.current.value,
      lozinka: pwRef.current.value,
    };

    setLoading(prevstate => !prevstate);
    if (emailRef.current.value && pwRef.current.value) {
      const response = await loginUser(payload);

      if (response.data.message) {
        setLoading(prevstate => !prevstate);
        toast(response.data?.message, {
          progressStyle: { background: "red" },
        });
      } else {
        const data = await checkLogin();

        updateLoged(!!data.data?.isValid);
        updateLogedUser(data.data?.userId);

        router.push("/");

        setLoading(prevstate => !prevstate);
        toast(response.data?.auth, {
          progressStyle: { background: "#4CBB17" },
        });
      }
    } else {
      toast("Unesite email i lozinku!");
    }
  };

  return (
    <div className="login-component">
      <form onSubmit={handleSubmit}>
        <div className="login-header">
          <div className="header-image">
            <Image width={150} height={150} src="/T1.png" alt="logo" />
          </div>

          {/* <Text color="#007FFF" fontSize="5xl" fontWeight={"bold"}>
            PC <span style={{ color: "#4CBB17" }}>Expert</span>
          </Text> */}
        </div>
        <div className="login-body">
          <FormControl isRequired>
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
          <FormControl isRequired>
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
            isLoading={loading}
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
      </form>
    </div>
  );
}

export default LoginForm;

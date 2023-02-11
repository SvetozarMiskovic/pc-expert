import React, { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { registerUser } from "../../fetchFunctions/registerUser";
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
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router";
import { resetRegisterForm } from "../../utils/resetRegisterForm";
function RegisterForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async e => {
    let payload;
    e.preventDefault();

    setLoading(prevState => !prevState);

    payload = {
      ime_i_prezime: nameRef.current.value,
      email: emailRef.current.value,
      broj_telefona: numberRef.current.value,
      adresa: addressRef.current.value,
      grad: cityRef.current.value,
      ulica: streetRef.current.value,
      postanski_broj: postalRef.current.value,
      lozinka: pwRef.current.value,
      role: "customer",
    };

    if (payload.lozinka === cpwRef.current.value && payload.email) {
      const response = await registerUser(payload);

      if (response.data.message) {
        toast(response.data?.message, {
          progressStyle: { background: "red" },
        });

        setLoading(prevState => !prevState);
      } else {
        toast(response.data?.auth, {
          progressStyle: { background: "#4CBB17" },
        });
        setLoading(prevState => !prevState);
        resetRegisterForm(
          nameRef,
          emailRef,
          numberRef,
          addressRef,
          streetRef,
          cityRef,
          postalRef,
          pwRef,
          cpwRef
        );
      }
    } else {
      toast("Lozinke se ne podudaraju! Pokusajte ponovo.", {
        progressStyle: { background: "red" },
      });
      setLoading(prevState => !prevState);
    }
  };

  return (
    <div className="register-component">
      <form onSubmit={handleSubmit}>
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
        </div>
        <div className="register-buttons">
          <Button
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
            type="submit"
            isLoading={loading}
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
      </form>
    </div>
  );
}

export default RegisterForm;

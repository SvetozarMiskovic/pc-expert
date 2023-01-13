import React, { useRef, useState } from "react";
import uniqid from "uniqid";
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
function RegisterForm() {
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
      <Text fontSize={"2xl"} color={"#f89a20"} fontStyle={"italic"}>
        Registracija
      </Text>
      <Divider borderColor={"#f89a20"} />

      <form onSubmit={handleSubmit}>
        <div className="register-header">
          {/* <div className="header-image">
                        <Image width={200} height={200} src="/T1.png" />
                    </div> */}
          <Text color="#f89a20" fontSize="3xl">
            Registrujte novi nalog
          </Text>
          <Divider marginTop="1rem" marginBottom="1rem" borderColor="#f89a20" />
          <Text
            fontSize={"lg"}
            color={"#5f5f5f"}
            fontStyle={"italic"}
            textDecoration="underline"
          >
            Registracijom i prijavom ostvarujete ubrzavanje procesa naplate
            prilikom zavrsetka kupovine, uvid u prethodne narudzbe i mnoge
            druge...
          </Text>
          <Divider marginTop="1rem" borderColor="#f89a20" />
        </div>
        <div className="register-grid">
          <FormControl className="register-name">
            <FormLabel fontSize={"lg"} color={"#5f5f5f"}>
              Ime i prezime
            </FormLabel>
            <Input
              ref={nameRef}
              color="#5f5f5f"
              autoComplete={"off"}
              outlineColor={"transparent"}
              _hover={{ borderColor: "#f89a20" }}
              _focusVisible={{ borderColor: "#f89a20" }}
              borderColor={"#f89a20"}
              type="text"
            />
          </FormControl>
          <FormControl className="register-email">
            <FormLabel fontSize={"lg"} color={"#5f5f5f"}>
              E-mail
            </FormLabel>
            <Input
              isRequired
              ref={emailRef}
              color="#5f5f5f"
              autoComplete={"off"}
              outlineColor={"transparent"}
              _hover={{ borderColor: "#f89a20" }}
              _focusVisible={{ borderColor: "#f89a20" }}
              borderColor={"#f89a20"}
              type="email"
            />
          </FormControl>
          <FormControl className="register-address">
            <FormLabel fontSize={"lg"} color={"#5f5f5f"}>
              Adresa
            </FormLabel>
            <Input
              ref={addressRef}
              color="#5f5f5f"
              autoComplete={"off"}
              outlineColor={"transparent"}
              _hover={{ borderColor: "#f89a20" }}
              _focusVisible={{ borderColor: "#f89a20" }}
              borderColor={"#f89a20"}
              type="text"
            />
          </FormControl>
          <FormControl className="register-street">
            <FormLabel fontSize={"lg"} color={"#5f5f5f"}>
              Ulica
            </FormLabel>
            <Input
              ref={streetRef}
              color="#5f5f5f"
              autoComplete={"off"}
              outlineColor={"transparent"}
              _hover={{ borderColor: "#f89a20" }}
              _focusVisible={{ borderColor: "#f89a20" }}
              borderColor={"#f89a20"}
              type="text"
            />
          </FormControl>
          <FormControl className="register-city">
            <FormLabel fontSize={"lg"} color={"#5f5f5f"}>
              Grad
            </FormLabel>
            <Input
              ref={cityRef}
              color="#5f5f5f"
              autoComplete={"off"}
              outlineColor={"transparent"}
              _hover={{ borderColor: "#f89a20" }}
              _focusVisible={{ borderColor: "#f89a20" }}
              borderColor={"#f89a20"}
              type="text"
            />
          </FormControl>
          <FormControl className="register-pn">
            <FormLabel fontSize={"lg"} color={"#5f5f5f"}>
              Postanski broj
            </FormLabel>
            <Input
              ref={postalRef}
              color="#5f5f5f"
              autoComplete={"off"}
              outlineColor={"transparent"}
              _hover={{ borderColor: "#f89a20" }}
              _focusVisible={{ borderColor: "#f89a20" }}
              borderColor={"#f89a20"}
              type="number"
            />
          </FormControl>
          <FormControl className="register-phn">
            <FormLabel fontSize={"lg"} color={"#5f5f5f"}>
              Broj telefona
            </FormLabel>
            <Input
              ref={numberRef}
              color="#5f5f5f"
              autoComplete={"off"}
              outlineColor={"transparent"}
              _hover={{ borderColor: "#f89a20" }}
              _focusVisible={{ borderColor: "#f89a20" }}
              borderColor={"#f89a20"}
              type="number"
            />
          </FormControl>
          <FormControl className="register-pw">
            <FormLabel fontSize={"lg"} color={"#5f5f5f"}>
              Lozinka
            </FormLabel>
            <InputGroup>
              <Input
                isRequired
                ref={pwRef}
                color="#5f5f5f"
                autoComplete={"off"}
                outlineColor={"transparent"}
                _hover={{ borderColor: "#f89a20" }}
                _focusVisible={{ borderColor: "#f89a20" }}
                borderColor={"#f89a20"}
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
          <FormControl className="register-cpw">
            <FormLabel fontSize={"lg"} color={"#5f5f5f"}>
              Potvrdi lozinku
            </FormLabel>
            <InputGroup>
              <Input
                isRequired
                ref={cpwRef}
                color="#5f5f5f"
                autoComplete={"off"}
                outlineColor={"transparent"}
                _hover={{ borderColor: "#f89a20" }}
                _focusVisible={{ borderColor: "#f89a20" }}
                borderColor={"#f89a20"}
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
          <Button
            _hover={{
              backgroundColor: "#f89a2099",
            }}
            _active={{
              backgroundColor: "#f89a20",
            }}
            backgroundColor={"#f89a20"}
            color={"#fff"}
            className="register-submit"
            type="submit"
            isLoading={loading}
            loadingText={"Obradjujem zahtjev..."}
          >
            Registruj se
          </Button>
        </div>
        <FormControl
          width={"100%"}
          display="flex"
          flexDir={"column"}
          alignItems="center"
        >
          <div className="login-reg-section">
            <Text
              fontStyle={"italic"}
              color={"#5f5f5f"}
              fontSize={"lg"}
              marginTop={"1rem"}
            >
              Imate nalog?{" "}
              <span className="login-reg-link">
                <Link href="prijava">Prijavite se!</Link>
              </span>
            </Text>
          </div>
        </FormControl>
      </form>
    </div>
  );
}

export default RegisterForm;

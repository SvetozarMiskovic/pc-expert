import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
      <Text
        fontStyle={"italic"}
        textAlign={"center"}
        color={"#f89a20"}
        fontSize={"2xl"}
      >
        Prijava
      </Text>
      <Divider borderColor={"#f89a20"} />

      <form onSubmit={handleSubmit}>
        <div className="login-header">
          {/* <div className="header-image">
                        <Image width={200} height={200} src="/T1.png" />
                    </div> */}
          <Text color="#f89a20" fontSize="3xl">
            Prijavite se na svoj nalog
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
        <FormControl>
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
            type={"email"}
          />
        </FormControl>
        <FormControl>
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
        <FormControl width={"100%"} display="flex" justifyContent={"center"}>
          <Button
            width={"25rem"}
            _hover={{
              backgroundColor: "#f89a2099",
            }}
            _active={{
              backgroundColor: "#f89a20",
            }}
            backgroundColor={"#f89a20"}
            color={"#fff"}
            type={"submit"}
            isLoading={loading}
          >
            Prijavi se
          </Button>
        </FormControl>
        <FormControl
          width={"100%"}
          display="flex"
          flexDir={"column"}
          alignItems="center"
        >
          <div className="login-reg-section">
            <Text fontStyle={"italic"} color={"#5f5f5f"} fontSize={"lg"}>
              Nemate nalog?{" "}
              <span className="login-reg-link">
                <Link href="registracija">Registrujte se!</Link>
              </span>
            </Text>
          </div>
        </FormControl>
      </form>
    </div>
  );
}

export default LoginForm;

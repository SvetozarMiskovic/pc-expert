import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { newPassword } from "../../fetchFunctions/newPassword";
import { useRouter } from "next/router";

function NewPassword({ data }) {
  const router = useRouter();
  const pwRef = useRef();
  const cpwRef = useRef();

  const [showPw, setShowPW] = useState(false);
  const [showCPw, setShowCPW] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!pwRef?.current?.value && !cpwRef?.current?.value) {
      toast("Unesite lozinku!", {
        progressStyle: { background: "red" },
      });
    }

    if (pwRef?.current?.value === cpwRef?.current?.value) {
      const payload = { lozinka: pwRef?.current?.value };
      const res = await newPassword(payload);

      if (res?.data?.msg) {
        toast(res?.data?.msg, {
          progressStyle: { background: "#4CBB17" },
        });
        router.push("/");
      } else {
        toast(res?.data?.err, {
          progressStyle: { background: "red" },
          autoClose: 10000,
        });
        router.push("/zaboravljenaLozinka");
      }
    } else {
      toast("Lozinke se ne poklapaju! Pokusajte ponovo.", {
        progressStyle: { background: "red" },
      });
    }
  };
  return (
    <div className="new-password-component">
      {data?.err ? (
        data?.err
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="new-password-header">
            <div className="new-password-image">
              <Image width={150} height={150} src="/static/T1.png" alt="logo" />
            </div>
          </div>
          <div className="new-password-body">
            <FormControl className="register-pw" isRequired>
              <InputGroup>
                <Input
                  placeholder="Nova lozinka"
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
            <FormControl>
              <Button
                width={"100%"}
                _hover={{
                  backgroundColor: "#4CBB1799",
                }}
                _active={{
                  backgroundColor: "#4CBB17",
                }}
                backgroundColor={"#4CBB17"}
                color={"#fff"}
                type={"submit"}
                //   isLoading={loading}
                borderRadius={"15rem"}
              >
                Resetuj lozinku
              </Button>
            </FormControl>
          </div>
        </form>
      )}
    </div>
  );
}

export default NewPassword;

import React, { useRef, useState } from "react";
import {
  FormControl,
  Icon,
  InputGroup,
  Input,
  InputRightElement,
  Text,
  Button,
} from "@chakra-ui/react";
import { FaUserLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { changePassword } from "../../fetchFunctions/changePassword";
function AccountNewPassword() {
  const oldPwRef = useRef();
  const newPwRef = useRef();
  const cpwRef = useRef();

  const [showOldPW, setShowOldPW] = useState(false);
  const [showNewPW, setShowNewPW] = useState(false);
  const [showCPW, setShowCPW] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async e => {
    e.preventDefault();

    const payload = {
      oldPW: oldPwRef.current?.value,
      newPW: newPwRef.current?.value,
    };
    setLoading(true);
    if (newPwRef.current?.value !== cpwRef.current?.value) {
      toast("Lozinke se ne poklapaju! Pokušajte ponovo", {
        progressStyle: { background: "red" },
      });
      setLoading(false);
    } else {
      const res = await changePassword(payload);
      if (res?.data?.err) {
        toast(res?.data?.err, {
          progressStyle: {
            background: "red",
          },
        });
        setLoading(false);
      } else {
        toast(res?.data?.msg, {
          progressStyle: {
            background: "#4cbb17",
          },
        });
        newPwRef.current.value = "";
        oldPwRef.current.value = "";
        cpwRef.current.value = "";
        setLoading(false);
      }
    }
  };
  return (
    <div className="account-new-password-component">
      <div className="account-new-password-header">
        <div className="account-new-password-title">
          <Icon as={FaUserLock} fontSize={"4xl"} color={"#f89a20"} />
          <Text fontSize={"3xl"} color={"#0c0c0c"} fontWeight="bold">
            Promjenite lozinku
          </Text>
        </div>
        <Text fontSize={"md"}>Ukoliko želite da promjenite lozinku</Text>
      </div>
      <div className="account-new-password-body">
        <form onSubmit={handleSubmit}>
          <FormControl className="register-pw" isRequired>
            <InputGroup>
              <Input
                placeholder="Stara lozinka"
                ref={oldPwRef}
                color="#5f5f5f"
                autoComplete={"off"}
                outlineColor={"transparent"}
                outline={"no-outline"}
                _hover={{ outline: "no-outline" }}
                _focusVisible={{ outline: "no-outline" }}
                type={showOldPW ? "text" : "password"}
                backgroundColor="#fff"
                borderRadius={"15rem"}
              />
              <InputRightElement>
                <Button
                  background={"transparent"}
                  _hover={{ background: "transparent" }}
                  _active={{ background: "transparent" }}
                  onClick={() => setShowOldPW(!showOldPW)}
                >
                  {showOldPW ? (
                    <Icon color={"#5f5f5f"} as={FaEyeSlash} />
                  ) : (
                    <Icon color={"#5f5f5f"} as={FaEye} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl className="register-pw" isRequired>
            <InputGroup>
              <Input
                placeholder="Nova lozinka"
                ref={newPwRef}
                color="#5f5f5f"
                autoComplete={"off"}
                outlineColor={"transparent"}
                outline={"no-outline"}
                _hover={{ outline: "no-outline" }}
                _focusVisible={{ outline: "no-outline" }}
                type={showNewPW ? "text" : "password"}
                backgroundColor="#fff"
                borderRadius={"15rem"}
              />
              <InputRightElement>
                <Button
                  background={"transparent"}
                  _hover={{ background: "transparent" }}
                  _active={{ background: "transparent" }}
                  onClick={() => setShowNewPW(!showNewPW)}
                >
                  {showNewPW ? (
                    <Icon color={"#5f5f5f"} as={FaEyeSlash} />
                  ) : (
                    <Icon color={"#5f5f5f"} as={FaEye} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl className="register-pw" isRequired>
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
                type={showCPW ? "text" : "password"}
                backgroundColor="#fff"
                borderRadius={"15rem"}
              />
              <InputRightElement>
                <Button
                  background={"transparent"}
                  _hover={{ background: "transparent" }}
                  _active={{ background: "transparent" }}
                  onClick={() => setShowCPW(!showCPW)}
                >
                  {showCPW ? (
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
              isLoading={loading}
              borderRadius={"15rem"}
              type="submit"
            >
              Promjeni lozinku
            </Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
}

export default AccountNewPassword;

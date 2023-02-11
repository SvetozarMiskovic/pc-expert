import React, { useRef, useState } from "react";
import Image from "next/image";
import { FormControl, Input, FormLabel, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { forgotPassword } from "../../fetchFunctions/forgotPassword";
import { toast } from "react-toastify";

function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const emailRef = useRef();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    if (!emailRef?.current?.value) {
      toast("Unesite email!", {
        progressStyle: { background: "red" },
      });
      setLoading(false);
    } else {
      const payload = { email: emailRef?.current?.value };
      const res = await forgotPassword(payload);

      if (res?.data?.msg) {
        toast(res?.data?.msg, {
          progressStyle: { background: "#4CBB17" },
        });
        setLoading(false);
      } else {
        toast(res?.data?.err, {
          progressStyle: { background: "red" },
        });
        setLoading(false);
      }
    }
  };
  return (
    <div className="forgot-pw-component">
      <form onSubmit={handleSubmit}>
        <div className="forgot-pw-header">
          <div className="forgot-pw-image">
            <Image width={150} height={150} src="/static/T1.png" alt="logo" />
          </div>
        </div>
        <div className="forgot-pw-body">
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
              Resetuj lozinku
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
                router.push("/prijava");
              }}
              backgroundColor={"#007FFF"}
              color={"#fff"}
              type={"button"}
            >
              Prijavi se
            </Button>
          </FormControl>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;

import React, { useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { sendQuery } from "../../fetchFunctions/sendQuery";
import { toast } from "react-toastify";
import { resetQueryForm } from "../../utils/reserQueryForm";

function QueryForm() {
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const shortDescRef = useRef();
  const detailDescRef = useRef();

  const handleSubmit = async e => {
    let payload;
    e.preventDefault();
    setLoading(true);
    payload = {
      ime_i_prezime: nameRef.current?.value,
      email: emailRef.current?.value,
      broj_telefona: numberRef.current?.value,
      kratki_opis: shortDescRef.current?.value,
      detalji: detailDescRef.current?.value,
    };

    const res = await sendQuery(payload);

    if (res.data.message) {
      toast(res.data.message, {
        progressStyle: {
          background: "#4CBB17",
        },
      });
      setLoading(false);
      resetQueryForm(nameRef, emailRef, numberRef, shortDescRef, detailDescRef);
    } else {
      toast(res.data.error, {
        progressStyle: {
          background: "red",
        },
      });
      setLoading(false);
    }
  };

  return (
    <div className="query-form">
      <form onSubmit={handleSubmit}>
        <FormControl className="name-part">
          <FormLabel>Ime i prezime</FormLabel>
          <Input type={"text"} ref={nameRef} />
        </FormControl>
        <FormControl className="email-part" isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input ref={emailRef} type={"email"} />
        </FormControl>

        <FormControl className="number-part" isRequired>
          <FormLabel>Broj telefona</FormLabel>
          <Input ref={numberRef} type={"number"} />
        </FormControl>
        <FormControl className="short-desc-part">
          <FormLabel>Naslov upita</FormLabel>
          <Input
            placeholder="npr. Upit vezano za Samsung S10..."
            ref={shortDescRef}
            type={"text"}
          />
        </FormControl>
        <FormControl className="detail-desc-part" isRequired>
          <FormLabel>Detaljno</FormLabel>
          <Textarea
            resize={"none"}
            height={"350px"}
            ref={detailDescRef}
            size={"md"}
            placeholder="Napisite nesto..."
          ></Textarea>
        </FormControl>
        <Button
          backgroundColor={"#f89a20"}
          color={"#fff"}
          className="order-submit"
          _hover={{
            backgroundColor: "#f89a2099",
          }}
          _active={{ backgroundColor: "#f89a2099" }}
          type="submit"
          isLoading={loading}
        >
          Posalji upit
        </Button>
      </form>
    </div>
  );
}

export default QueryForm;

import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React, { use, useRef, useState } from "react";
import { toast } from "react-toastify";
import { sendOrder } from "../../fetchFunctions/sendOrder";
import { resetOrderForm } from "../../utils/resetOrderForm";

function OrderForm() {
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const numberRef = useRef();
  const shortDescRef = useRef();
  const detailDescRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const postalRef = useRef();

  const handleSubmit = async e => {
    let payload;
    e.preventDefault();

    setLoading(true);
    payload = {
      ime_i_prezime: nameRef.current?.value,
      email: emailRef.current?.value,
      adresa: addressRef.current?.value,
      broj_telefona: numberRef.current?.value,
      ulica: streetRef.current?.value,
      grad: cityRef.current?.value,
      postanski_broj: postalRef.current?.value,
      kratki_opis: shortDescRef.current?.value,
      detalji: detailDescRef.current?.value,
    };

    const res = await sendOrder(payload);

    if (res.data.message) {
      toast(res.data.message, {
        progressStyle: {
          background: "#4CBB17",
        },
      });
      setLoading(false);
      resetOrderForm(
        nameRef,
        emailRef,
        numberRef,
        addressRef,
        cityRef,
        postalRef,
        streetRef,
        shortDescRef,
        detailDescRef
      );
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
    <div className="order-form">
      <form onSubmit={handleSubmit}>
        <FormControl className="name-part" isRequired>
          <FormLabel>Ime i prezime</FormLabel>
          <Input type={"text"} ref={nameRef} />
        </FormControl>
        <FormControl className="email-part" isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input ref={emailRef} type={"email"} />
        </FormControl>
        <FormControl className="address-part" isRequired>
          <FormLabel>Adresa stanovanja</FormLabel>
          <Input ref={addressRef} type={"text"} />
        </FormControl>
        <FormControl className="street-part" isRequired>
          <FormLabel>Ulica</FormLabel>
          <Input ref={streetRef} type={"text"} />
        </FormControl>
        <FormControl className="city-part" isRequired>
          <FormLabel>Grad</FormLabel>
          <Input ref={cityRef} type={"text"} />
        </FormControl>
        <FormControl className="postal-part" isRequired>
          <FormLabel>Postanski broj</FormLabel>
          <Input ref={postalRef} type={"text"} />
        </FormControl>
        <FormControl className="number-part" isRequired>
          <FormLabel>Broj telefona</FormLabel>
          <Input ref={numberRef} type={"number"} />
        </FormControl>
        <FormControl className="short-desc-part">
          <FormLabel>Kratki opis</FormLabel>
          <Input ref={shortDescRef} type={"text"} />
        </FormControl>
        <FormControl className="detail-desc-part" isRequired>
          <FormLabel>Detaljne informacije</FormLabel>
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
          type="submit"
          isLoading={loading}
        >
          Naruci
        </Button>
      </form>
    </div>
  );
}

export default OrderForm;

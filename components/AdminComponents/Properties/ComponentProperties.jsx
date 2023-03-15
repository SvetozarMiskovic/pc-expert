import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import { createId } from "@paralleldrive/cuid2";

function ComponentProperties({ properties }) {
  const [state, setState] = useState();
  const [id] = useState(createId());
  const formatText = string => {
    const capitalize = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalize.split("_").join(" ");
  };
  const updateState = (prop, value) => {
    setState(prevState => {
      return {
        ...prevState,
        [prop]: value,
      };
    });
  };

  const submitRequest = (e)=>{
    e.preventDefault()
  }
  return (
    <form onSubmit={submitRequest}>
      {properties?.map(prop => {
        return (
          <Input
            color={"#0c0c0c"}
            key={prop}
            placeholder={prop.toLowerCase() === "id" ? id : formatText(prop)}
            onChange={e => updateState(prop, e.target.value)}
            disabled={prop.toLowerCase() === "id" ? true : false}
            type={"text"}
          />
        );
      })}
      <Button
        _hover={{
          backgroundColor: "#4CBB1799",
        }}
        _active={{
          backgroundColor: "#4CBB17",
        }}
        borderRadius={"12rem"}
        backgroundColor={"#4CBB17"}
        width={"100%"}
        color={"#fff"}
        className="register-submit"
        type="submit"
        onClick={() => console.log(state)}
        // isLoading={loading}
      >
        Kreiraj artikl
      </Button>
    </form>
  );
}

export default ComponentProperties;

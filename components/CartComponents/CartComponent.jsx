import { Button, Collapse, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function CartComponent({ isCart }) {
  return (
    <div className="cart-component-wrapper">
      <Collapse in={isCart}>
        <div className="cart-component-header">
          <Text fontSize={"2xl"}>Korpa</Text>
        </div>
        <div className="cart-component-body">
          <Text>Nesto spisano</Text>
          <Text>Nesto spisano</Text>
          <Text>Nesto spisano</Text>
          <Text>Nesto spisano</Text>
          <Text>Nesto spisano</Text>
          <Text>Nesto spisano</Text>
          <Text>Nesto spisano</Text>
          <Text>Nesto spisano</Text>
          <Text>Nesto spisano</Text>
        </div>
        <div className="cart-component-footer">
          <Text fontSize={"2xl"}>Ukupno:</Text>
          <Link href={"/korpa"}>
            <Button
              _hover={{
                backgroundColor: "#4CBB1799",
              }}
              _active={{
                backgroundColor: "#4CBB17",
              }}
              backgroundColor={"#4CBB17"}
              color={"#fff"}
              width="100%"
              type={"button"}
              display="flex"
              borderRadius={"15rem"}
            >
              Vidi korpu
            </Button>
          </Link>
        </div>
      </Collapse>
    </div>
  );
}

export default CartComponent;

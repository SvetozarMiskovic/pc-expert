import { Checkbox, Input, Radio, Text, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { useAuthContext } from "../../context/AuthContext";
import EmptyCart from "./EmptyCart";
import { FaArrowAltCircleRight } from "react-icons/fa";

function CartPageInfo() {
  const [newAddr, setNewAddr] = useState(false);

  const { cart, order, updateOrder } = useGlobalContext();
  const { isLogged } = useAuthContext();
  const updateNewAddr = () => {
    setNewAddr(prevState => !prevState);
  };

  useEffect(() => {
    const populate = async () => {
      const { data } = await getUser();
      if (!data?.message) {
        const { id, role, ...rest } = data;
        const objKeys = Object.keys(rest);

        objKeys.map(key => {
          return updateOrder(key, rest[key]);
        });
      } else return;
    };

    populate();
  }, []);
  return (
    <div className="cart-page-info-wrapper">
      {cart?.length === 0 && <EmptyCart />}
      {cart?.length !== 0 && (
        <div className="cart-page-info-form">
          <div className="cart-page-info-form-field">
            <Text fontSize="xl" fontWeight={"bold"}>
              Ime i prezime
            </Text>
            <Input
              type="text"
              value={order?.ime_i_prezime}
              onChange={e => updateOrder("ime_i_prezime", e.target.value)}
            />
          </div>
          <div className="cart-page-info-form-field">
            <Text fontSize="xl" fontWeight={"bold"}>
              Kontakt email
            </Text>
            <Input
              type="text"
              value={order?.email}
              onChange={e => updateOrder("email", e.target.value)}
            />
          </div>
          <div className="cart-page-info-form-field">
            <Text fontSize="xl" fontWeight={"bold"}>
              Broj telefona
            </Text>
            <Input
              type="text"
              value={order?.broj_telefona}
              onChange={e => updateOrder("broj_telefona", e.target.value)}
            />
          </div>
          <div className="cart-page-info-form-field">
            <Text fontSize="xl" fontWeight={"bold"}>
              Dostavi na adresu
            </Text>
            <Input
              type="text"
              isDisabled={newAddr}
              value={order?.adresa}
              onChange={e => updateOrder("adresa", e.target.value)}
            />
          </div>
          <div className="cart-page-info-form-field">
            <Checkbox size={"lg"} onChange={() => updateNewAddr()}>
              <Text fontSize="xl" fontWeight={"bold"}>
                Dostavi na drugu adresu{" "}
              </Text>
            </Checkbox>

            <Input
              type="text"
              isDisabled={!newAddr}
              value={order?.adresa_2}
              onChange={e => updateOrder("adresa_2", e.target.value)}
            />
          </div>
          <div className="cart-page-info-form-field">
            <Text fontSize="xl" fontWeight={"bold"}>
              Grad
            </Text>
            <Input
              type="text"
              value={order?.grad}
              onChange={e => updateOrder("grad", e.target.value)}
            />
          </div>
          <div className="cart-page-info-form-field">
            <Text fontSize="xl" fontWeight={"bold"}>
              Poštanski broj
            </Text>
            <Input
              type="text"
              value={order?.postanski_broj}
              onChange={e => updateOrder("postanski_broj", e.target.value)}
            />
          </div>
          <div className="cart-page-info-form-field">
            <Text fontSize="xl" fontWeight={"bold"}>
              Ulica
            </Text>
            <Input
              type="text"
              value={order?.ulica}
              onChange={e => updateOrder("ulica", e.target.value)}
            />
          </div>
          <div className="cart-page-info-form-field">
            <Text fontSize="xl" fontWeight={"bold"}>
              Napomena
            </Text>
            <Textarea
              type="text"
              value={order?.napomena}
              onChange={e => updateOrder("napomena", e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPageInfo;

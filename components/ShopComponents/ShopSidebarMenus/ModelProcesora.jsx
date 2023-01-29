import React, { useState } from "react";
import { Text, Collapse } from "@chakra-ui/react";
import { useShopContext } from "../../../context/ShopContext";
import ShopSingleFilter from "../ShopSingleFilter";

function ModelProcesora() {
  const { modelProcesora } = useShopContext();
  const [open, setOpen] = useState(true);

  const updateCollapseState = () => {
    setOpen(prevState => !prevState);
  };
  return (
    <div className="shop-single-menu">
      <div
        className="shop-single-menu-header"
        onClick={() => updateCollapseState()}
      >
        <Text
          paddingLeft={"0.4rem"}
          fontSize={"lg"}
          color={"#0c0c0d"}
          fontWeight="bold"
        >
          Model procesora
        </Text>
      </div>
      <Collapse in={open}>
        <div className="shop-single-menu-body">
          {!!modelProcesora &&
            modelProcesora?.map(p => {
              return <ShopSingleFilter key={p} data={p} />;
            })}
        </div>
      </Collapse>
    </div>
  );
}

export default ModelProcesora;

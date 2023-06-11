import { Collapse, Text } from "@chakra-ui/react";
import React from "react";
import ShopSingleFilter from "../ShopSingleFilter";

function Cijena() {
  const [open, setOpen] = useState(true);

  const updateCollapseState = () => {
    setOpen(prevState => !prevState);
  };

  const { cijena } = useShopContext();

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
          Cijena
        </Text>
      </div>
      <Collapse in={open}>
        <div className="shop-single-menu-body">
          {!!cijena &&
            cijena?.map(p => {
              return (
                <ShopSingleFilter key={p} data={p} filterProperty={"boja"} />
              );
            })}
        </div>
      </Collapse>
    </div>
  );
}

export default Cijena;

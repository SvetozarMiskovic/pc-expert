import { createId } from "@paralleldrive/cuid2";
import { Input } from "@chakra-ui/react";

import LaptopData from "../components/AdminComponents/Data/LaptopData";
import MonitorData from "../components/AdminComponents/Data/MonitorData";
import TVData from "../components/AdminComponents/Data/TVData";
import PhoneData from "../components/AdminComponents/Data/PhoneData";
import ComponentData from "../components/AdminComponents/Data/ComponentData";
import PeriferyData from "../components/AdminComponents/Data/PeriferyData";
import ComputerData from "../components/AdminComponents/Data/ComputerData";
import MiningData from "../components/AdminComponents/Data/MiningData";

export const createProductData = (
  category,
  data,
  updateSelectedProduct,
  openModal,
  selectedProduct
) => {
  const formatText = string => {
    const capitalize = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalize.split("_").join(" ");
  };
  switch (category) {
    case "laptop": {
      return (
        <LaptopData
          updateSelectedProduct={updateSelectedProduct}
          data={data.laptop}
          openModal={openModal}
          selectedProduct={selectedProduct}
        />
      );
    }
    case "monitor": {
      return (
        // <form>
        //   {data?.monitor.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <MonitorData
          openModal={openModal}
          updateSelectedProduct={updateSelectedProduct}
          data={data.monitor}
          selectedProduct={selectedProduct}
        />
      );
    }
    case "tv": {
      return (
        // <form>
        //   {data?.tv.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <TVData
          updateSelectedProduct={updateSelectedProduct}
          data={data.tv}
          openModal={openModal}
          selectedProduct={selectedProduct}
        />
      );
    }
    case "phone": {
      return (
        // <form>
        //   {data?.phone.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <PhoneData
          openModal={openModal}
          updateSelectedProduct={updateSelectedProduct}
          data={data.phone}
          selectedProduct={selectedProduct}
        />
      );
    }
    case "component": {
      return (
        // <form>
        //   {data?.component.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <ComponentData
          openModal={openModal}
          updateSelectedProduct={updateSelectedProduct}
          data={data.component}
          selectedProduct={selectedProduct}
        />
      );
    }
    case "perifery": {
      return (
        // <form>
        //   {data?.perifery.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <PeriferyData
          openModal={openModal}
          updateSelectedProduct={updateSelectedProduct}
          data={data.perifery}
          selectedProduct={selectedProduct}
        />
      );
    }
    case "computer": {
      return (
        // <form>
        //   {data?.computer.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <ComputerData
          openModal={openModal}
          updateSelectedProduct={updateSelectedProduct}
          data={data.computer}
          selectedProduct={selectedProduct}
        />
      );
    }
    case "mining": {
      return (
        // <form>
        //   {data?.mining.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <MiningData
          openModal={openModal}
          updateSelectedProduct={updateSelectedProduct}
          data={data.mining}
          selectedProduct={selectedProduct}
        />
      );
    }
  }
  return category;
};

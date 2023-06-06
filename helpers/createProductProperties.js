import { createId } from "@paralleldrive/cuid2";
import { Input } from "@chakra-ui/react";

import LaptopProperties from "../components/AdminComponents/Properties/LaptopProperties";
import MonitorProperties from "../components/AdminComponents/Properties/MonitorProperties";
import TVProperties from "../components/AdminComponents/Properties/TVProperties";
import PhoneProperties from "../components/AdminComponents/Properties/PhoneProperties";
import ComponentProperties from "../components/AdminComponents/Properties/ComponentProperties";
import PeriferyProperties from "../components/AdminComponents/Properties/PeriferyProperties";
import ComputerProperties from "../components/AdminComponents/Properties/ComputerProperties";
import MiningProperties from "../components/AdminComponents/Properties/MiningProperties";
export const createProductProperties = (
  category,

  updateNewProduct,
  initialProduct
) => {
  const formatText = string => {
    const capitalize = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalize.split("_").join(" ");
  };
  switch (category) {
    case "laptop": {
      return (
        <LaptopProperties
          updateNewProduct={updateNewProduct}
          initialProduct={initialProduct}
        />
      );
    }
    case "monitor": {
      return (
        // <form>
        //   {?.monitor.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <MonitorProperties
          updateNewProduct={updateNewProduct}
          initialProduct={initialProduct}
        />
      );
    }
    case "tv": {
      return (
        // <form>
        //   {?.tv.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <TVProperties
          updateNewProduct={updateNewProduct}
          initialProduct={initialProduct}
        />
      );
    }
    case "phone": {
      return (
        // <form>
        //   {?.phone.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <PhoneProperties
          updateNewProduct={updateNewProduct}
          initialProduct={initialProduct}
        />
      );
    }
    case "component": {
      return (
        // <form>
        //   {?.component.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <ComponentProperties
          updateNewProduct={updateNewProduct}
          initialProduct={initialProduct}
        />
      );
    }
    case "perifery": {
      return (
        // <form>
        //   {?.perifery.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <PeriferyProperties
          updateNewProduct={updateNewProduct}
          initialProduct={initialProduct}
        />
      );
    }
    case "computer": {
      return (
        // <form>
        //   {?.computer.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <ComputerProperties
          updateNewProduct={updateNewProduct}
          initialProduct={initialProduct}
        />
      );
    }
    case "mining": {
      return (
        // <form>
        //   {?.mining.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <MiningProperties
          updateNewProduct={updateNewProduct}
          initialProduct={initialProduct}
        />
      );
    }
  }
  return category;
};

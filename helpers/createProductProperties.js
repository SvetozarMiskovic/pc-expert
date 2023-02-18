import { createId } from "@paralleldrive/cuid2";
import { Input } from "@chakra-ui/react";

import LaptopProperties from "../components/AdminComponents/LaptopProperties";
import MonitorProperties from "../components/AdminComponents/MonitorProperties";
import TVProperties from "../components/AdminComponents/TVProperties";
import PhoneProperties from "../components/AdminComponents/PhoneProperties";
import ComponentProperties from "../components/AdminComponents/ComponentProperties";
import PeriferyProperties from "../components/AdminComponents/PeriferyProperties";
import ComputerProperties from "../components/AdminComponents/ComputerProperties";
import MiningProperties from "../components/AdminComponents/MiningProperties";
export const createProductProperties = (category, properties) => {
  const formatText = string => {
    const capitalize = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalize.split("_").join(" ");
  };
  switch (category) {
    case "laptop": {
      return (
        <LaptopProperties properties={properties.laptop} />
        // <form>
        //   {properties?.laptop.map(prop => {
        //     return (
        //       <Input
        //         placeholder={
        //           prop.toLowerCase() === "id" ? createId() : formatText(prop)
        //         }
        //         onChange={e => console.log(e.target.value)}
        //         disabled={prop.toLowerCase() === "id" ? true : false}
        //         type={"text"}
        //       />
        //     );
        //   })}
        // </form>
      );
    }
    case "monitor": {
      return (
        // <form>
        //   {properties?.monitor.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <MonitorProperties properties={properties.monitor} />
      );
    }
    case "televizor": {
      return (
        // <form>
        //   {properties?.tv.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <TVProperties properties={properties.tv} />
      );
    }
    case "telefon": {
      return (
        // <form>
        //   {properties?.phone.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <PhoneProperties properties={properties.phone} />
      );
    }
    case "komponenta": {
      return (
        // <form>
        //   {properties?.component.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <ComponentProperties properties={properties.component} />
      );
    }
    case "periferija": {
      return (
        // <form>
        //   {properties?.perifery.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <PeriferyProperties properties={properties.perifery} />
      );
    }
    case "racunar": {
      return (
        // <form>
        //   {properties?.computer.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <ComputerProperties properties={properties.computer} />
      );
    }
    case "mining": {
      return (
        // <form>
        //   {properties?.mining.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <MiningProperties properties={properties.mining} />
      );
    }
  }
  return category;
};

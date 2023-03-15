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
    case "tv": {
      return (
        // <form>
        //   {properties?.tv.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <TVProperties properties={properties.tv} />
      );
    }
    case "phone": {
      return (
        // <form>
        //   {properties?.phone.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <PhoneProperties properties={properties.phone} />
      );
    }
    case "component": {
      return (
        // <form>
        //   {properties?.component.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <ComponentProperties properties={properties.component} />
      );
    }
    case "perifery": {
      return (
        // <form>
        //   {properties?.perifery.map(prop => {
        //     return <Input placeholder={formatText(prop)} type={"text"} />;
        //   })}
        // </form>
        <PeriferyProperties properties={properties.perifery} />
      );
    }
    case "computer": {
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

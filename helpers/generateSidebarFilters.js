import Boja from "../components/ShopComponents/ShopSidebarMenus/Boja";
import VelicinaEkrana from "../components/ShopComponents/ShopSidebarMenus/VelicinaEkrana";
import Procesor from "../components/ShopComponents/ShopSidebarMenus/Procesor";
import TipProcesora from "../components/ShopComponents/ShopSidebarMenus/TipProcesora";
import ModelProcesora from "../components/ShopComponents/ShopSidebarMenus/ModelProcesora";
import RamMemorija from "../components/ShopComponents/ShopSidebarMenus/RamMemorija";
import TipRamMemorije from "../components/ShopComponents/ShopSidebarMenus/TipRamMemorije";
import VelicinaHDD from "../components/ShopComponents/ShopSidebarMenus/VelicinaHDD";
import TipHDD from "../components/ShopComponents/ShopSidebarMenus/TipHDD";
import Proizvodjac from "../components/ShopComponents/ShopSidebarMenus/Proizvodjac";
import Grafika from "../components/ShopComponents/ShopSidebarMenus/Grafika";
import OS from "../components/ShopComponents/ShopSidebarMenus/OS";
import Garancija from "../components/ShopComponents/ShopSidebarMenus/Garancija";
import TipEkrana from "../components/ShopComponents/ShopSidebarMenus/TipEkrana";
import Rezolucija from "../components/ShopComponents/ShopSidebarMenus/Rezolucija";
import RefreshRate from "../components/ShopComponents/ShopSidebarMenus/RefreshRate";
import VGA from "../components/ShopComponents/ShopSidebarMenus/VGA";
import SMART from "../components/ShopComponents/ShopSidebarMenus/SMART";
import WIFI from "../components/ShopComponents/ShopSidebarMenus/WIFI";
import BrojSim from "../components/ShopComponents/ShopSidebarMenus/BrojSim";
import BrojJezgara from "../components/ShopComponents/ShopSidebarMenus/BrojJezgara";
import BrzinaProcesora from "../components/ShopComponents/ShopSidebarMenus/BrzinaProcesora";
import InternaMemorija from "../components/ShopComponents/ShopSidebarMenus/InternaMemorija";
import RezolucijaGlavne from "../components/ShopComponents/ShopSidebarMenus/RezolucijaGlavne";
import BT from "../components/ShopComponents/ShopSidebarMenus/BT";
import Vrsta from "../components/ShopComponents/ShopSidebarMenus/Vrsta";

export const generateSidebarFilters = category => {
  console.log("iz generate sidebar" + category);
  switch (category) {
    case "laptopi": {
      return (
        <>
          <Boja />
          <Proizvodjac />
          <VelicinaEkrana />
          <Procesor />
          <TipProcesora />
          <ModelProcesora />
          <RamMemorija />
          <TipRamMemorije />
          <VelicinaHDD />
          <TipHDD />
          <Grafika />
          <OS />
          <Garancija />
        </>
      );
    }
    case "monitori": {
      return (
        <>
          <Boja />
          <Proizvodjac />
          <VelicinaEkrana />
          <TipEkrana />
          <Rezolucija />
          <RefreshRate />
          <VGA />
          <Garancija />
        </>
      );
    }
    case "tv": {
      return (
        <>
          <Proizvodjac />
          <VelicinaEkrana />
          <TipEkrana />
          <Rezolucija />
          <SMART />
          <WIFI />
          <Garancija />
        </>
      );
    }
    case "racunari": {
      return (
        <>
          <Proizvodjac />
          <Procesor />
          <TipProcesora />
          <ModelProcesora />
          <RamMemorija />
          <TipRamMemorije />
          <VelicinaHDD />
          <TipHDD />
          <Grafika />
          <OS />
          <Garancija />
        </>
      );
    }
    case "telefoni": {
      return (
        <>
          <Boja />
          <Proizvodjac />
          <OS />
          <VelicinaEkrana />
          <BrojSim />
          <Procesor />
          <BrojJezgara />
          <BrzinaProcesora />
          <RamMemorija />
          <InternaMemorija />
          <RezolucijaGlavne />
          <BT />
          <Garancija />
        </>
      );
    }
    case "periferija": {
      return (
        <>
          <Proizvodjac />
          <Vrsta />
          <Garancija />
        </>
      );
    }

    case "komponente": {
      return (
        <>
          <Proizvodjac />
          <Vrsta />
          <Garancija />
        </>
      );
    }
    case "mining": {
      return (
        <>
          <Garancija />
        </>
      );
    }
  }
};

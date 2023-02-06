import React, { useEffect, useRef, useState } from "react";
import { useShopContext } from "../../context/ShopContext";
import ShopCategoryItem from "./ShopCategoryItem";
import { paginate } from "../../helpers/paginate";

import ShopPagination from "./ShopPagination";

function ShopCategory({ category, data }) {
  const {
    updateActiveCategory,
    updateCategoryProducts,
    updateBoje,
    updateProizvodjac,
    updateVelicinaEkrana,
    updateProcesor,
    updateTipProcesora,
    updateModelProcesora,
    updateRam,
    updateTipRam,
    updateHdd,
    updateTipHdd,
    updateBrzinaProcesora,
    updateGarancija,
    updateTipEkrana,
    updateRezolucija,
    updateRefRate,
    updateVga,
    updateSmart,
    updateWifi,
    updateBt,
    updateVrsta,
    updateOs,
    updateGraficka,
    updateBrojSim,
    updateJezgra,
    updateBaterija,
    updateInterna,
    updateGlavnaKamera,
    filteredItems,
    currentPage,
    pageSize,
    onPageChange,
    nextPage,
    prevPage,
  } = useShopContext();

  useEffect(() => {
    const updateFilters = () => {
      updateCategoryProducts(data);
      updateActiveCategory(category);
      const boje = [
        ...new Set(
          data?.map(element => (element["boja"] ? element["boja"] : null))
        ),
      ];
      const proizvodjaci = [
        ...new Set(
          data?.map(element =>
            element["proizvodjac"] ? element["proizvodjac"] : null
          )
        ),
      ];

      const velicineEkrana = [
        ...new Set(
          data?.map(element =>
            element["velicina_ekrana"] ? element["velicina_ekrana"] : null
          )
        ),
      ];
      const procesori = [
        ...new Set(
          data?.map(element =>
            element["procesor"] ? element["procesor"] : null
          )
        ),
      ];
      const tipoviProcesora = [
        ...new Set(
          data?.map(element =>
            element["tip_procesora"] ? element["tip_procesora"] : null
          )
        ),
      ];
      const modeliProcesora = [
        ...new Set(
          data?.map(element =>
            element["model_procesora"] ? element["model_procesora"] : null
          )
        ),
      ];
      const ram = [
        ...new Set(
          data?.map(element => (element["ram"] ? element["ram"] : null))
        ),
      ];
      const tipRam = [
        ...new Set(
          data?.map(element => (element["tip_ram"] ? element["tip_ram"] : null))
        ),
      ];
      const hdd = [
        ...new Set(
          data?.map(element =>
            element["hard_disk"] ? element["hard_disk"] : null
          )
        ),
      ];
      const tipHdd = [
        ...new Set(
          data?.map(element =>
            element["tip_hard_diska"] ? element["tip_hard_diska"] : null
          )
        ),
      ];
      const os = [
        ...new Set(
          data?.map(element => (element["os"] ? element["os"] : null))
        ),
      ];
      const garancije = [
        ...new Set(
          data?.map(element =>
            element["garancija"] ? element["garancija"] : null
          )
        ),
      ];
      const tipoviEkrana = [
        ...new Set(
          data?.map(element =>
            element["tip_ekrana"] ? element["tip_ekrana"] : null
          )
        ),
      ];
      const rezolucije = [
        ...new Set(
          data?.map(element =>
            element["rezolucija"] ? element["rezolucija"] : null
          )
        ),
      ];
      const refRate = [
        ...new Set(
          data?.map(element =>
            element["refresh_rate"] ? element["refresh_rate"] : null
          )
        ),
      ];
      const vga = [
        ...new Set(
          data?.map(element => (element["vga"] ? element["vga"] : null))
        ),
      ];
      const smart = [
        ...new Set(
          data?.map(element => (element["smart"] ? element["smart"] : null))
        ),
      ];
      const wifi = [
        ...new Set(
          data?.map(element => (element["wifi"] ? element["wifi"] : null))
        ),
      ];
      const graficke = [
        ...new Set(
          data?.map(element =>
            element["graficka_kartica"] ? element["graficka_kartica"] : null
          )
        ),
      ];
      const brojSim = [
        ...new Set(
          data?.map(element =>
            element["broj_sim"] ? element["broj_sim"] : null
          )
        ),
      ];
      const jezgra = [
        ...new Set(
          data?.map(element =>
            element["broj_jezgara"] ? element["broj_jezgara"] : null
          )
        ),
      ];
      const brzineProcesora = [
        ...new Set(
          data?.map(element =>
            element["brzina_procesora"] ? element["brzina_procesora"] : null
          )
        ),
      ];
      const baterije = [
        ...new Set(
          data?.map(element =>
            element["baterija"] ? element["baterija"] : null
          )
        ),
      ];
      const interna = [
        ...new Set(
          data?.map(element =>
            element["interna_memorija"] ? element["interna_memorija"] : null
          )
        ),
      ];
      const glavnaKamera = [
        ...new Set(
          data?.map(element =>
            element["rezolucija_glavne_kamere"]
              ? element["rezolucija_glavne_kamere"]
              : null
          )
        ),
      ];
      const bt = [
        ...new Set(
          data?.map(element => (element["bt"] ? element["bt"] : null))
        ),
      ];
      const vrsta = [
        ...new Set(
          data?.map(element => (element["vrsta"] ? element["vrsta"] : null))
        ),
      ];
      updateBoje(boje);
      updateProizvodjac(proizvodjaci);
      updateVelicinaEkrana(velicineEkrana);
      updateTipEkrana(tipoviEkrana);
      updateProcesor(procesori);
      updateModelProcesora(modeliProcesora);
      updateTipProcesora(tipoviProcesora);
      updateRam(ram);
      updateTipRam(tipRam);
      updateHdd(hdd);
      updateTipHdd(tipHdd);
      updateBaterija(baterije);
      updateInterna(interna);
      updateBt(bt);
      updateVrsta(vrsta);
      updateGlavnaKamera(glavnaKamera);
      updateBrzinaProcesora(brzineProcesora);
      updateBrojSim(brojSim);
      updateJezgra(jezgra);
      updateWifi(wifi);
      updateSmart(smart);
      updateVga(vga);
      updateGraficka(graficke);
      updateRefRate(refRate);
      updateRezolucija(rezolucije);
      updateGarancija(garancije);
      updateOs(os);
    };

    updateFilters();
  }, [category]);

  const paginatedData = paginate(data, currentPage, pageSize);
  const paginatedFilters = paginate(filteredItems, currentPage, pageSize);
  return (
    <div className="shop-category-wrapper">
      <div className="shop-category-container">
        {filteredItems?.length < 1 &&
          paginatedData?.map(item => {
            return (
              <ShopCategoryItem
                key={item.id}
                dataCategory={item}
                category={category}
              />
            );
          })}
        {filteredItems?.length > 0 &&
          paginatedFilters?.map(item => {
            return (
              <ShopCategoryItem
                key={item.id}
                dataCategory={item}
                category={category}
              />
            );
          })}
      </div>

      <ShopPagination
        items={filteredItems?.length > 0 ? filteredItems?.length : data?.length} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={onPageChange}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

export default ShopCategory;

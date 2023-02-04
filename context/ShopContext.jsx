import { createContext, useContext, useEffect, useState } from "react";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [allCategoryProducts, setAllCategoryProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const [boje, setBoje] = useState([]);
  const [proizvodjac, setProizvodjac] = useState([]);
  const [velicinaEkrana, setVelicinaEkrana] = useState([]);
  const [procesor, setProcesor] = useState([]);
  const [tipProcesora, setTipProcesora] = useState([]);
  const [modelProcesora, setModelProcesora] = useState([]);
  const [ram, setRam] = useState([]);
  const [tipRam, setTipRam] = useState([]);
  const [hdd, setHdd] = useState([]);
  const [tipHdd, setTipHdd] = useState([]);
  const [os, setOs] = useState([]);
  const [garancija, setGarancija] = useState([]);
  const [tipEkrana, setTipEkrana] = useState([]);
  const [rezolucija, setRezolucija] = useState([]);
  const [refRate, setRefRate] = useState([]);
  const [vga, setVga] = useState([]);
  const [smart, setSmart] = useState([]);
  const [wifi, setWifi] = useState([]);
  const [graficka, setGraficka] = useState([]);
  const [brojSim, setBrojSim] = useState([]);
  const [jezgra, setJezgra] = useState([]);
  const [brzinaProcesora, setBrzinaProcesora] = useState([]);
  const [baterija, setBaterija] = useState([]);
  const [interna, setInterna] = useState([]);
  const [glavnaKamera, setGlavnaKamera] = useState([]);
  const [bt, setBt] = useState([]);
  const [vrsta, setVrsta] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  useEffect(() => {
    filterItems(activeFilters);
    setCurrentPage(1);
  }, [activeFilters]);

  useEffect(() => {
    setActiveFilters([]);
  }, [activeCategory]);
  // Sidebar filter setters
  const updateBoje = arr => {
    setBoje(() => {
      return arr;
    });
  };
  const onPageChange = page => {
    setCurrentPage(page);
  };

  const nextPage = page => {
    setCurrentPage(Number(page) + 1);
  };

  const prevPage = page => {
    setCurrentPage(Number(page) - 1);
  };

  const updatePageSize = page => {
    setCurrentPage(1);
    setPageSize(Number(page.target.value));
  };

  const updateProizvodjac = arr => {
    setProizvodjac(() => {
      return arr;
    });
  };

  const updateVelicinaEkrana = arr => {
    setVelicinaEkrana(() => {
      return arr;
    });
  };

  const updateProcesor = arr => {
    setProcesor(() => {
      return arr;
    });
  };

  const updateTipProcesora = arr => {
    setTipProcesora(() => {
      return arr;
    });
  };

  const updateModelProcesora = arr => {
    setModelProcesora(() => {
      return arr;
    });
  };

  const updateRam = arr => {
    setRam(() => {
      return arr;
    });
  };

  const updateTipRam = arr => {
    setTipRam(() => {
      return arr;
    });
  };

  const updateHdd = arr => {
    setHdd(() => {
      return arr;
    });
  };

  const updateTipHdd = arr => {
    setTipHdd(() => {
      return arr;
    });
  };

  const updateGarancija = arr => {
    setGarancija(() => {
      return arr;
    });
  };

  const updateTipEkrana = arr => {
    setTipEkrana(() => {
      return arr;
    });
  };

  const updateRezolucija = arr => {
    setRezolucija(() => {
      return arr;
    });
  };

  const updateRefRate = arr => {
    setRefRate(() => {
      return arr;
    });
  };

  const updateVga = arr => {
    setVga(() => {
      return arr;
    });
  };

  const updateSmart = arr => {
    setSmart(() => {
      return arr;
    });
  };

  const updateWifi = arr => {
    setWifi(() => {
      return arr;
    });
  };

  const updateGraficka = arr => {
    setGraficka(() => {
      return arr;
    });
  };

  const updateBrojSim = arr => {
    setBrojSim(() => {
      return arr;
    });
  };

  const updateJezgra = arr => {
    setJezgra(() => {
      return arr;
    });
  };

  const updateBrzinaProcesora = arr => {
    setBrzinaProcesora(() => {
      return arr;
    });
  };

  const updateBaterija = arr => {
    setBaterija(() => {
      return arr;
    });
  };

  const updateInterna = arr => {
    setInterna(() => {
      return arr;
    });
  };

  const updateGlavnaKamera = arr => {
    setGlavnaKamera(() => {
      return arr;
    });
  };

  const updateBt = arr => {
    setBt(() => {
      return arr;
    });
  };

  const updateVrsta = arr => {
    setVrsta(() => {
      return arr;
    });
  };

  const updateOs = arr => {
    setOs(() => {
      return arr;
    });
  };

  const updateCategoryProducts = data => {
    setCategoryProducts(() => {
      return [...data];
    });
  };

  const updateAllCategoryProducts = data => {
    setAllCategoryProducts(() => {
      return [...data];
    });
  };

  const updateActiveCategory = cat => {
    setActiveCategory(cat);
  };

  // Sidebar active filter setters

  const updateActiveFilters = ({ data, filterProperty }) => {
    const filterObject = {
      filterProperty: filterProperty,
      filterValues: [data],
    };

    setActiveFilters(prevState => {
      const doesExist = prevState.filter(
        ps => ps.filterProperty === filterProperty
      )?.["0"];

      if (!doesExist) return [...prevState, filterObject];
      const newValues = doesExist?.filterValues.concat(
        filterObject.filterValues
      );

      doesExist.filterValues = [...new Set(newValues)];
      const withoutFilter = prevState.filter(
        ps => ps.filterProperty !== filterProperty
      );

      const final = withoutFilter.concat(doesExist);

      return [...final];
    });
  };

  const clearActiveFilters = () => {
    setActiveFilters([]);
  };

  const removeActiveFilter = (filterProperty, filterValue) => {
    setActiveFilters(prevState => {
      const isSingle = prevState.filter(
        ps => ps.filterProperty === filterProperty
      )["0"];
      const values = isSingle?.filterValues;

      const newValues = isSingle?.filterValues.filter(f => f !== filterValue);
      const newObj = Object.assign(isSingle);
      newObj.filterValues = newValues;

      const withoutFilter = prevState.filter(
        ps => ps.filterProperty !== filterProperty
      );

      const final = withoutFilter.concat(newObj);

      if (isSingle.filterValues.length === 0) return [...withoutFilter];
      return [...final];
    });
  };

  const filterItems = filters => {
    const items = categoryProducts.filter(el => {
      return filters?.some(f => {
        return f?.filterValues.some(
          fv => fv.toLowerCase() === el[f.filterProperty].toLowerCase()
        );
      });
    });

    setFilteredItems(items);
  };

  const removeFilterItem = (filterProperty, filterValue) => {
    const singleItem = categoryProducts.filter(el => {
      return el[filterProperty].toLowerCase() !== filterValue.toLowerCase();
    });

    setFilteredItems(prevState => {
      const final = [...new Set(prevState.concat(singleItem))];
      console.log(prevState, singleItem);

      return [...final];
    });
  };
  return (
    <ShopContext.Provider
      value={{
        activeCategory,
        updateActiveCategory,
        updateCategoryProducts,
        updateAllCategoryProducts,
        categoryProducts,
        allCategoryProducts,
        boje,
        updateBoje,
        velicinaEkrana,
        updateVelicinaEkrana,
        tipEkrana,
        updateTipEkrana,
        hdd,
        updateHdd,
        tipHdd,
        updateTipHdd,
        procesor,
        updateProcesor,
        tipProcesora,
        updateTipProcesora,
        modelProcesora,
        updateModelProcesora,
        brzinaProcesora,
        updateBrzinaProcesora,
        os,
        updateOs,
        vrsta,
        updateVrsta,
        glavnaKamera,
        updateGlavnaKamera,
        bt,
        updateBt,
        wifi,
        updateWifi,
        smart,
        updateSmart,
        proizvodjac,
        updateProizvodjac,
        ram,
        updateRam,
        tipRam,
        updateTipRam,
        garancija,
        updateGarancija,
        rezolucija,
        updateRezolucija,
        refRate,
        updateRefRate,
        graficka,
        updateGraficka,
        brojSim,
        updateBrojSim,
        vga,
        updateVga,
        jezgra,
        updateJezgra,
        baterija,
        updateBaterija,
        interna,
        updateInterna,

        updateActiveFilters,
        clearActiveFilters,
        removeActiveFilter,
        activeFilters,
        filterItems,
        filteredItems,
        removeFilterItem,
        onPageChange,
        currentPage,
        pageSize,
        updatePageSize,
        nextPage,
        prevPage,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

export const useShopContext = () => useContext(ShopContext);

import { createContext, useContext, useEffect, useState } from "react";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFilters, setActiveFilters] = useState([]);

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [allCategoryProducts, setAllCategoryProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 12000]);
  const [sortBy, setSortBy] = useState("asc");

  const [akcija, setAkcija] = useState(["Akcija"]);
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
    console.log("PROMJENIJO CIJENU", priceRange);
    updateActiveFilters({ data: priceRange, filterProperty: "cijena" });
    setCurrentPage(1);
  }, [priceRange]);

  useEffect(() => {
    if (activeCategory === "all") {
      filterAllItems(activeFilters);
      setCurrentPage(1);

      console.log(activeCategory);
    } else {
      filterItems(activeFilters);
      setCurrentPage(1);
    }
  }, [activeFilters]);

  useEffect(() => {
    setActiveFilters([]);
  }, [activeCategory]);

  // Sidebar filter setters

  const updateSort = val => {
    setSortBy(val);
  };

  const updatePriceRange = price => {
    setPriceRange(price);
  };

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
      filterValues: [].concat(data),
    };

    setActiveFilters(prevState => {
      const doesExist = prevState.filter(
        ps => ps.filterProperty === filterProperty
      )?.["0"];

      if (!doesExist) return [...prevState, filterObject];

      if (filterProperty === "cijena" && doesExist) {
        const newPriceObj = {
          filterProperty,
          filterValues: filterObject.filterValues,
        };

        const withoutFilter = prevState.filter(
          ps => ps.filterProperty !== filterProperty
        );

        const final = withoutFilter.concat(newPriceObj);

        return [...final];
      }

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
    setCurrentPage(1);
  };

  const clearPriceFilter = () => {
    setActiveFilters(prevState => {
      const withoutPrice = prevState?.filter(
        i => i?.filterProperty !== "cijena"
      );
      return [...withoutPrice];
    });
  };
  const removeActiveFilter = (filterProperty, filterValue) => {
    setCurrentPage(1);
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

  const filterAllItems = filters => {
    const items = allCategoryProducts?.filter((el, i, arr) => {
      return filters?.some(f => {
        if (f.filterProperty === "cijena") {
          // const stringValues = f?.filterValues?.map(fv => String(fv));

          return el?.akcija
            ? Number(el?.akcija) >= f?.filterValues[0] &&
                Number(el?.akcija) <= f?.filterValues[1]
            : Number(el?.cijena) >= f?.filterValues[0] &&
                Number(el?.cijena) <= f?.filterValues[1];
        }

        return el?.[f.filterProperty];
      });
    });

    setFilteredItems(items);
  };
  const filterItems = filters => {
    // console.log("FILTERI", filters);

    const items = categoryProducts?.filter((el, i, arr) => {
      return filters?.some(f => {
        if (f.filterProperty === "akcija") {
          return el?.akcija;
        }
        if (f.filterProperty === "cijena") {
          return el?.akcija
            ? Number(el?.akcija) >= f?.filterValues[0] &&
                Number(el?.akcija) <= f?.filterValues[1]
            : Number(el?.cijena) >= f?.filterValues[0] &&
                Number(el?.cijena) <= f?.filterValues[1];
        }
        // else if (f.filterProperty === "cijena") {
        //   const stringValues = f?.filterValues?.map(fv => String(fv));
        //   const asa = arr.filter(
        //     obj =>
        //       Number(obj.cijena) >= Number(stringValues[0]) &&
        //       Number(obj.cijena) <= Number(stringValues[1])
        //   );

        //   return console.log(asa);
        // }
        return f?.filterValues.some(
          fv => fv?.toLowerCase() === el[f.filterProperty]?.toLowerCase()
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
        updatePriceRange,
        priceRange,
        akcija,
        clearPriceFilter,
        updateSort,
        sortBy,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

export const useShopContext = () => useContext(ShopContext);

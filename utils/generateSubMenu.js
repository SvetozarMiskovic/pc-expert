import Link from "next/link";
import { Divider } from "@chakra-ui/react";

export const generateSubMenu = subCategory => {
  switch (subCategory) {
    case "laptop": {
      return (
        <div className="categories-menu">
          <div className="single-subcategory">
            <h3>Proizvođač</h3>
            <Divider />
            <ul>
              <div className="value">
                <h5>Acer</h5>
              </div>
              <div className="value">
                <h5>Asus</h5>
              </div>
              <div className="value">
                <h5>Dell</h5>
              </div>
              <div className="value">
                <h5>Apple</h5>
              </div>
            </ul>
          </div>
        </div>
      );
    }

    case "monitor": {
      return (
        <div className="categories-menu">
          <div className="single-subcategory">
            <h3>Proizvođač</h3>
            <Divider />
            <ul>
              <div className="value">
                <h5>Acer</h5>
              </div>
              <div className="value">
                <h5>Asus</h5>
              </div>
              <div className="value">
                <h5>AOC</h5>
              </div>
              <div className="value">
                <h5>Dell</h5>
              </div>
            </ul>
          </div>
          <div className="single-subcategory">
            <h3>Veličina ekrana</h3>
            <Divider />
            <ul>
              <div className="value">
                <h5>21 inch</h5>
              </div>
              <div className="value">
                <h5>24 inch</h5>
              </div>
              <div className="value">
                <h5>27 inch</h5>
              </div>
              <div className="value">
                <h5>32 inch</h5>
              </div>
            </ul>
          </div>
        </div>
      );
    }
    case "computer": {
      return (
        <div className="categories-menu">
          <div className="single-subcategory">
            <h3>Kategorije</h3>
            <Divider />
            <ul>
              <div className="value">
                <h5>Gaming računari</h5>
              </div>
              <div className="value">
                <h5>Office računari</h5>
              </div>
              <div className="value">
                <h5>Školski računari</h5>
              </div>
            </ul>
          </div>
        </div>
      );
    }
    case "television": {
      return (
        <div className="categories-menu">
          <div className="single-subcategory">
            <h3>Proizvođač</h3>
            <Divider />
            <ul>
              <div className="value">
                <h5>Tesla</h5>
              </div>
              <div className="value">
                <h5>Hisense</h5>
              </div>
              <div className="value">
                <h5>Samsung</h5>
              </div>
              <div className="value">
                <h5>FOX</h5>
              </div>
            </ul>
          </div>
          <div className="single-subcategory">
            <h3>Veličina ekrana</h3>
            <Divider />
            <ul>
              <div className="value">
                <h5>32 inch</h5>
              </div>
              <div className="value">
                <h5>40 inch</h5>
              </div>
              <div className="value">
                <h5>45 inch</h5>
              </div>
              <div className="value">
                <h5>50 inch</h5>
              </div>
            </ul>
          </div>
        </div>
      );
    }
    case "phone": {
      return (
        <div className="categories-menu">
          <div className="single-subcategory">
            <h3>Proizvođač</h3>
            <Divider />
            <ul>
              <div className="value">
                <h5>Xioami</h5>
              </div>
              <div className="value">
                <h5>Samsung</h5>
              </div>
              <div className="value">
                <h5>Apple</h5>
              </div>
              <div className="value">
                <h5>Huawei</h5>
              </div>
            </ul>
          </div>
        </div>
      );
    }
    case "components": {
      return (
        <div className="categories-menu">
          <div className="single-subcategory">
            <h3>Kategorije</h3>
            <Divider />
            <ul>
              <div className="value">
                <h5>Procesori</h5>
              </div>
              <div className="value">
                <h5>Hard diskovi</h5>
              </div>
              <div className="value">
                <h5>Memorija</h5>
              </div>
              <div className="value">
                <h5>Matične ploče</h5>
              </div>
              <div className="value">
                <h5>Kućišta</h5>
              </div>
            </ul>
          </div>
        </div>
      );
    }
    case "perifery": {
      return (
        <div className="categories-menu">
          <div className="single-subcategory">
            <h3>Kategorije</h3>
            <Divider />
            <div className="value">
              <h5>Miševi</h5>
            </div>
            <div className="value">
              <h5>Tastature</h5>
            </div>
            <div className="value">
              <h5>Slušalice</h5>
            </div>
            <div className="value">
              <h5>Zvučnici</h5>
            </div>
          </div>
        </div>
      );
    }
    case "mining": {
      return (
        <div className="categories-menu">
          <div className="single-subcategory">
            <h3>Mining rigovi</h3>
            <Divider />
            <p>Vidi sve</p>
          </div>
          <div className="single-subcategory">
            <h3>Mining oprema</h3>
            <Divider />
            <p>Vidi sve</p>
          </div>
        </div>
      );
    }
  }
};

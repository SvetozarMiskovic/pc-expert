import Link from "next/link";

export const generateSubMenu = subCategory => {
  switch (subCategory) {
    case "laptop": {
      return (
        <div className="categories-menu">
          <div className="single-subcategory">
            <h3>Proizvođač</h3>
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
          <div className="single-subcategory">
            <h3>Veličina ekrana</h3>
            <ul>
              <div className="value">
                <h5>14 inch</h5>
              </div>
              <div className="value">
                <h5>15 inch</h5>
              </div>
              <div className="value">
                <h5>16 inch</h5>
              </div>
              <div className="value">
                <h5>17 inch</h5>
              </div>
              <div className="value">
                <h5>19 inch</h5>
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
            <h3>Racunarske komponente</h3>
            <ul>
              <div className="value">
                <h5>Procesori</h5>
              </div>
              <div className="value">
                <h5>Graficke kartice</h5>
              </div>
              <div className="value">
                <h5>Memorija</h5>
              </div>
              <div className="value">
                <h5>Hard diskovi/SSD</h5>
              </div>
            </ul>
          </div>
          <div className="single-subcategory">
            <h3>Racunarska perferija</h3>
            <ul>
              <div className="value">
                <h5>Miševi</h5>
              </div>
              <div className="value">
                <h5>Tastature</h5>
              </div>
              <div className="value">
                <h5>Slušalice</h5>
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
          <div className="single-subcategory">
            <h3>Veličina ekrana</h3>
            <ul>
              <div className="value">
                <h5>4 inch</h5>
              </div>
              <div className="value">
                <h5>5 inch</h5>
              </div>
              <div className="value">
                <h5>6 inch</h5>
              </div>
              <div className="value">
                <h5>7 inch</h5>
              </div>
            </ul>
          </div>
        </div>
      );
    }
    case "printer": {
      return (
        <div className="categories-menu">
          <div className="single-subcategory">
            <h3>Vrsta printera</h3>
            <ul>
              <div className="value">
                <h5>Laseri</h5>
              </div>
              <div className="value">
                <h5>Skeneri</h5>
              </div>
              <div className="value">
                <h5>Ploteri</h5>
              </div>
              <div className="value">
                <h5>Matični</h5>
              </div>
              <div className="value">
                <h5>Ink Jet</h5>
              </div>
            </ul>
          </div>
          <div className="single-subcategory">
            <h3>Proizvođač</h3>
            <div className="value">
              <h5>HP</h5>
            </div>
            <div className="value">
              <h5>Canon</h5>
            </div>
            <div className="value">
              <h5>Xerox</h5>
            </div>
            <div className="value">
              <h5>Brother</h5>
            </div>
            <div className="value">
              <h5>Epson</h5>
            </div>
          </div>
        </div>
      );
    }
    case "network": {
      return (
        <div className="categories-menu">
          <div className="single-subcategory">
            <h3>Mrezna oprema i kamere</h3>
            <p>Vidi sve</p>
          </div>
        </div>
      );
    }
    case "mining": {
      return (
        <div className="categories-menu">
          <div className="single-subcategory">
            <h3>Mining rigovi</h3>
            <p>Vidi sve</p>
          </div>
          <div className="single-subcategory">
            <h3>Mining oprema</h3>
            <p>Vidi sve</p>
          </div>
        </div>
      );
    }
  }
};

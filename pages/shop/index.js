import ShopComponent from "../../components/ShopComponents/ShopComponent";
import ShopLayout from "../../components/ShopComponents/ShopLayout";

export default function Shop() {
  return (
    <div className="shop-page">
      <ShopLayout>
        <ShopComponent />
      </ShopLayout>
    </div>
  );
}

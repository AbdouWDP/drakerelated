import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import axios from "axios";
import Footer from "./Footer";
import Aside from "./Aside";
import { show } from "../store/albumReducer";
import { useDispatch } from "react-redux";
import MobileNav from "./MobileNav";

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => setProducts(res.data.products));
    }, 1000);
  }, []);
  const dispatch = useDispatch();

  return (
    <>
      <Aside />
      <Navbar state={true} />
      <MobileNav title="Shop All" color="white" />
      <main className="shop-main m-auto" onClick={() => dispatch(show(0))}>
        <div className="shop-all text-center w-full font-bold text-2xl py-14 max-md:hidden">
          <h1>Shop All</h1>
        </div>
        <div className="products w-full flex gap-4 flex-wrap justify-center py-6">
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
        {products.length > 0 && <Footer />}
      </main>
    </>
  );
}

export default Shop;

import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Aside from "./Aside";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCart } from "../store/cartReducer";

function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);

  const [index, setIndex] = useState(0);

  function nextImage() {
    index < product.images.length - 1 ? setIndex(index + 1) : setIndex(0);
  }
  function previousImage() {
    index > 0 ? setIndex(index - 1) : setIndex(product.images.length - 1);
  }

  function fetchSelectedProduct(id) {
    axios
      .get("https://dummyjson.com/products/" + id)
      .then((res) => setProduct(res.data));
  }

  function fetchRelatedProducts(category) {
    axios
      .get("https://dummyjson.com/products/category/" + category)
      .then((res) => setProducts(res.data.products));
  }

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    fetchSelectedProduct(params.productId);
  }, [params.productId]);

  useEffect(() => {
    fetchRelatedProducts(product.category);
  }, [product]);

  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartState.data);

  useEffect(() => {
    dispatch(fetchCart(1));
  }, []);

  function addProductToCart() {
    dispatch(addToCart(product, params.productId));
  }

  return (
    <>
      <Aside />
      <Navbar state={true} />
      <main className="product-page-main m-auto mt-6 max-sm:mt-0 max-sm:w-full">
        <div className="product-page w-full">
          <div className="w-full h-screen flex gap-4 max-sm:flex-wrap max-sm:h-fit">
            <div className="product-page-image w-1/2 h-full relative max-sm:w-full max-sm:h-96">
              <div
                onClick={nextImage}
                className="product-page-image-prev-button w-1/5 h-full cursor-pointer absolute left-0 flex justify-center items-center"
              >
                <button></button>
              </div>
              <div
                onClick={previousImage}
                className="product-page-image-next-button w-1/5 h-full cursor-pointer absolute right-0 flex justify-center items-center"
              >
                <button></button>
              </div>
              <img
                className="w-full h-full object-cover"
                src={
                  Object.keys(product).length > 0 ? product.images[index] : ""
                }
                alt=""
              />
            </div>
            <div className="product-infos w-1/2 h-full flex flex-col justify-between max-sm:w-full">
              <div className="upper-info">
                <div className="product-info-title font-bold text-2xl">
                  <p> {product.title} </p>
                </div>
                <div className="product-info-price font-bold text-2xl">
                  <p> ${product.price}.00 </p>
                </div>
              </div>
              <div className="lower-info">
                <div className="product-info-description font-bold text-md py-4">
                  <p> {product.description} </p>
                </div>
                <div className="actions max-sm:w-full">
                  <div className="add-to-cart-action w-full h-20 hover:bg-black hover:text-white cursor-pointer">
                    <div className="w-11/12 h-full flex justify-between items-center m-auto font-bold text-md">
                      <div onClick={addProductToCart}>
                        <p>Add to Cart</p>
                      </div>
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="related-products-title text-center w-full font-bold py-14 my-6">
            <h1>Related Products</h1>
          </div>
          <div className="related-products flex flex-wrap justify-center gap-4 w-full">
            {products.length > 0
              ? products.map((product) => {
                  return (
                    <ProductCard
                      product={product}
                      indexZero={() => setIndex(0)}
                    />
                  );
                })
              : null}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default ProductPage;

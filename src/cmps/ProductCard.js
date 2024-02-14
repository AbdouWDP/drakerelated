import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const [index, setIndex] = useState(0);
  const { product } = props;

  function nextImage() {
    index < product.images.length - 1 ? setIndex(index + 1) : setIndex(0);
  }
  function previousImage() {
    index > 0 ? setIndex(index - 1) : setIndex(product.images.length - 1);
  }

  return (
    <>
      <div
        className="product-card"
        style={{ aspectRatio: "1/1.5" }}
        key={product.id}
      >
        <div className="product-image w-full h-4/5 cursor-pointer relative">
          <div
            className="previous-button absolute left-0 w-1/5 h-full"
            onClick={previousImage}
          ></div>
          <div
            className="next-button absolute right-0 w-1/5 h-full"
            onClick={nextImage}
          ></div>
          <Link to={`/products/${product.id}`} onClick={props.indexZero}>
            <div className="w-full h-full select-none">
              <img
                className="w-full h-full object-cover"
                id="product-img"
                src={Object.keys(product).length > 0 && product.images[index]}
                alt=""
              />
            </div>
          </Link>
        </div>

        <div className="product-actions w-full h-1/5 pt-2">
          <div className="title-cart flex justify-between cursor-pointer">
            <div
              className="product-title font-bold  line-clamp-2"
              style={{ width: "90%" }}
            >
              <p>{product.title}</p>
            </div>
            <div
              className="add-to-cart-button text-end"
              style={{ width: "10%" }}
            >
              <button>
                <FaPlus className="m-auto" />
              </button>
            </div>
          </div>
          <div className="product-price font-bold">
            <p>${product.price}</p>
          </div>
          <div className="product-sizes uppercase font-bold hidden w-full">
            <p className="line-clamp-1">XL, L, M, S</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const asideVar = {
  hide: {
    width: 0,
  },
  show: {
    width: "25%",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const listVar = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

function Aside() {
  const [products, setProducts] = useState([]);

  const state = useSelector((state) => state.album_project);

  const albumsList = document.querySelectorAll(".albums-list");

  function mouseInAlbum(e) {
    albumsList.forEach((list) => {
      list.classList.add("active");
    });
    e.target.classList.remove("active");
  }
  function mouseOutAlbum() {
    albumsList.forEach((list) => {
      list.classList.remove("active");
    });
  }

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
  }, []);

  return (
    <>
      {state > 0 && (
        <motion.aside
          className="pages-aside w-1/4 h-screen overflow-scroll fixed left-0 top-0 z-50 flex justify-center items-center"
          variants={asideVar}
          initial="hide"
          animate="show"
        >
          <div className="w-11/12 h-3/4">
            {state == 1 && (
              <nav className="albums">
                <motion.ol
                  className="font-bold capitalize text-2xl py-4"
                  variants={listVar}
                  initial="hide"
                  whileHover="show"
                >
                  {products.map((product, index) => {
                    return (
                      <Link to={`/products/${product.id}`}>
                        <li
                          onMouseMove={(e) => mouseInAlbum(e)}
                          onMouseLeave={mouseOutAlbum}
                          className="albums-list"
                          key={product.id}
                        >
                          {product.title}
                        </li>
                      </Link>
                    );
                  })}
                  <li className="opacity-30">If You’re Reading This…</li>
                  <li className="opacity-30">Nothing Was The Same</li>
                </motion.ol>
              </nav>
            )}
            <nav className="projects">
              <motion.ol
                className="font-bold capitalize text-2xl py-4"
                variants={listVar}
                initial="hide"
                whileHover="show"
              >
                <li
                  onMouseMove={(e) => mouseInAlbum(e)}
                  onMouseLeave={mouseOutAlbum}
                  className="album-list"
                >
                  Hello World
                </li>

                <li className="opacity-30">If You’re Reading This…</li>
                <li className="opacity-30">Nothing Was The Same</li>
              </motion.ol>
            </nav>
          </div>
        </motion.aside>
      )}
    </>
  );
}

export default Aside;

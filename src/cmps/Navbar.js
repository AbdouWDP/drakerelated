import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { show } from "../store/albumReducer";
import { useEffect } from "react";
import { fetchCart } from "../store/cartReducer";

function Navbar(props) {
  const listItem = document.querySelectorAll(".list-item");
  const dispatch = useDispatch();

  function mouseMoveList(e) {
    listItem.forEach((list) => {
      list.classList.add("active");
    });
    e.target.classList.remove("active");
  }
  function mouseLeaveList() {
    listItem.forEach((list) => {
      list.classList.remove("active");
    });
  }

  const cartState = useSelector((state) => state.cart);
  console.log(cartState.data);
  useEffect(() => {
    dispatch(fetchCart(1));
  }, []);

  return (
    <>
      <header
        className={`navigation-bar w-full sticky top-0 z-40 max-md:hidden ${
          props.state && "bg-white"
        }`}
        style={{
          height: "72px",
        }}
      >
        <nav
          className={`nav-menu h-full flex justify-between ${
            props.state ? "text-black" : "text-white"
          } items-center m-auto font-bold`}
          style={{
            borderBottom: props.state && "1px solid black",
          }}
        >
          <div className="menu w-2/5">
            <ol className="flex gap-12">
              <li
                onMouseMove={(e) => mouseMoveList(e)}
                onMouseLeave={mouseLeaveList}
                className="list-item"
                onClick={() => dispatch(show(1))}
              >
                Albums
              </li>
              <li
                onMouseLeave={mouseLeaveList}
                onMouseMove={(e) => mouseMoveList(e)}
                className="list-item"
                onClick={() => dispatch(show(2))}
              >
                Projects
              </li>
              <Link to="/tour">
                <li
                  onMouseLeave={mouseLeaveList}
                  onMouseMove={(e) => mouseMoveList(e)}
                  className="list-item"
                >
                  Tour
                </li>
              </Link>
              <Link to="/shop-all">
                <li
                  onMouseLeave={mouseLeaveList}
                  onMouseMove={(e) => mouseMoveList(e)}
                  className="list-item"
                >
                  Shop All
                </li>
              </Link>
            </ol>
          </div>
          <div
            className="nav-logo w-1/5 flex justify-center"
            onClick={() => dispatch(show(0))}
          >
            <Link to="/">
              <h1 className="w-fit cursor-pointer">Drake Related</h1>
            </Link>
          </div>
          <div className="cart w-2/5 text-end">
            <button>Cart( {} )</button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

import { useState } from "react";
import Navbar from "./Navbar";
import { FaRegRegistered } from "react-icons/fa";
import { motion } from "framer-motion";
import Aside from "./Aside";
import { useDispatch } from "react-redux";
import { show } from "../store/albumReducer";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const overlayVar = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: 0.3,
    ease: "easeIn",
  },
};

const linksVar = {
  hide: {
    x: "100vw",
  },
  show: {
    x: 0,
    transition: { ease: "easeIn" },
  },
};

const roomsVar = {
  hide: {
    x: "-100vw",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Home() {
  const listItem = document.querySelectorAll(".list-item");
  const dispatch = useDispatch();

  const [isOnLinks, setIsOnLinks] = useState(false);
  const [isOnRooms, setIsOnRooms] = useState(false);
  const [isOverlay, setIsOverlay] = useState(0);

  function listClick(e) {
    listItem.forEach((list) => {
      list.classList.add("active");
    });
    e.target.classList.remove("active");
  }

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

  function mouseInLinksList(e) {
    setIsOnLinks(true);
    isOnLinks && (e.target.style.opacity = 0.3);
  }

  function mouseOutLinksList(e) {
    isOnLinks && (e.target.style.opacity = 1);
  }

  function inRooms(e) {
    setIsOnRooms(true);
    isOnRooms && (e.target.style.opacity = 0.3);
  }
  function outRooms(e) {
    isOnRooms && (e.target.style.opacity = 1);
  }

  return (
    <>
      <div className="myhouse w-full h-screen relative">
        {isOverlay > 0 && (
          <motion.div
            className={`overlay z-40 w-full h-full blur absolute`}
            onClick={() => {
              mouseLeaveList();
              setIsOverlay(0);
            }}
            variants={overlayVar}
            initial="hide"
            animate="show"
          ></motion.div>
        )}
        <Navbar state={false} />
        <MobileNav title="Drake Related" />
        <Aside />
        <main className="house w-full" onClick={() => dispatch(show(0))}>
          <div className=""></div>
        </main>
        <div
          className="sec-nav w-full absolute bottom-0 z-50"
          style={{
            height: "72px",
          }}
        >
          <nav className="overlay-nav h-full m-auto text-white font-bold max-md:w-11/12">
            <ol className="w-full h-full flex justify-between items-center max-md:hidden">
              <li
                className="list-item cursor-pointer text-lg"
                onMouseMove={(e) => mouseMoveList(e)}
                onMouseLeave={isOverlay ? null : mouseLeaveList}
                onClick={(e) => {
                  listClick(e);
                  setIsOverlay(1);
                }}
              >
                Explore
              </li>
              <li
                className="cursor-pointer text-sm"
                onClick={(e) => {
                  listClick(e);
                  setIsOverlay(2);
                }}
              >
                <FaRegRegistered />
              </li>
            </ol>
            <ol className="mobile-bottom-nav hidden max-md:flex justify-between items-center w-full h-full">
              <li>
                <button
                  onClick={(e) => {
                    listClick(e);
                    setIsOverlay(1);
                  }}
                >
                  Menu
                </button>
              </li>
              <li>
                <button>Cart 0</button>
              </li>
            </ol>
          </nav>
        </div>
        {isOverlay === 2 && (
          <motion.div
            className="links font-bold text-white absolute bottom-20 right-7 text-end flex flex-col gap-8 z-50"
            variants={linksVar}
            initial="hide"
            animate="show"
          >
            <div className="social-media">
              <nav>
                <ol>
                  <li
                    className="link-list"
                    onMouseMove={(e) => mouseInLinksList(e)}
                    onMouseLeave={(e) => mouseOutLinksList(e)}
                  >
                    Instagram
                  </li>
                  <li
                    className="link-list"
                    onMouseMove={(e) => mouseInLinksList(e)}
                    onMouseLeave={(e) => mouseOutLinksList(e)}
                  >
                    Facebook
                  </li>
                  <li
                    className="link-list"
                    onMouseMove={(e) => mouseInLinksList(e)}
                    onMouseLeave={(e) => mouseOutLinksList(e)}
                  >
                    Twitter
                  </li>
                </ol>
              </nav>
            </div>
            <div className="terms">
              <nav>
                <ol>
                  <li
                    className="link-list"
                    onMouseMove={(e) => mouseInLinksList(e)}
                    onMouseLeave={(e) => mouseOutLinksList(e)}
                  >
                    Subscribe
                  </li>
                  <li
                    className="link-list"
                    onMouseMove={(e) => mouseInLinksList(e)}
                    onMouseLeave={(e) => mouseOutLinksList(e)}
                  >
                    Terms
                  </li>
                  <li
                    className="link-list"
                    onMouseMove={(e) => mouseInLinksList(e)}
                    onMouseLeave={(e) => mouseOutLinksList(e)}
                  >
                    Privacy
                  </li>
                  <li
                    className="link-list"
                    onMouseMove={(e) => mouseInLinksList(e)}
                    onMouseLeave={(e) => mouseOutLinksList(e)}
                  >
                    FAQ
                  </li>
                </ol>
              </nav>
            </div>
          </motion.div>
        )}
        {isOverlay == 1 && (
          <motion.div
            className="house-rooms font-bold text-white absolute bottom-20 left-7 text-3xl max-md:text-2xl flex flex-col gap-8 z-50"
            variants={roomsVar}
            initial="hide"
            animate="show"
          >
            <nav>
              <ol>
                <nav className="mobile-menu hidden max-md:block">
                  <ol>
                    <li
                      onMouseMove={(e) => inRooms(e)}
                      onMouseLeave={(e) => outRooms(e)}
                    >
                      Albums
                    </li>
                    <li
                      onMouseMove={(e) => inRooms(e)}
                      onMouseLeave={(e) => outRooms(e)}
                    >
                      Projects
                    </li>
                    <Link to="/tour">
                      <li
                        onMouseMove={(e) => inRooms(e)}
                        onMouseLeave={(e) => outRooms(e)}
                      >
                        Tour
                      </li>
                    </Link>
                  </ol>
                  <br />
                  <ol>
                    <Link to="/shop-all">
                      <li onMouseMove={(e) => inRooms(e)}>Shop</li>
                    </Link>
                    <li onMouseLeave={(e) => outRooms(e)} className="text-sm">
                      Explore
                    </li>
                  </ol>
                  <br />
                </nav>
                <li
                  onMouseMove={(e) => inRooms(e)}
                  onMouseLeave={(e) => outRooms(e)}
                >
                  Front
                </li>
                <li
                  onMouseMove={(e) => inRooms(e)}
                  onMouseLeave={(e) => outRooms(e)}
                >
                  Stduio
                </li>
                <li
                  onMouseMove={(e) => inRooms(e)}
                  onMouseLeave={(e) => outRooms(e)}
                >
                  Lounge
                </li>
                <li
                  onMouseMove={(e) => inRooms(e)}
                  onMouseLeave={(e) => outRooms(e)}
                >
                  Bedroom
                </li>
                <li
                  onMouseMove={(e) => inRooms(e)}
                  onMouseLeave={(e) => outRooms(e)}
                >
                  Closet
                </li>
                <li
                  onMouseMove={(e) => inRooms(e)}
                  onMouseLeave={(e) => outRooms(e)}
                >
                  El Chico Studios
                </li>
                <li
                  onMouseMove={(e) => inRooms(e)}
                  onMouseLeave={(e) => outRooms(e)}
                >
                  Air Drake
                </li>
                <li
                  onMouseMove={(e) => inRooms(e)}
                  onMouseLeave={(e) => outRooms(e)}
                >
                  Pool
                </li>
                <li
                  onMouseMove={(e) => inRooms(e)}
                  onMouseLeave={(e) => outRooms(e)}
                >
                  Kitchen
                </li>
                <li className="opacity-30">Court</li>
                <li className="opacity-30">Garage</li>
              </ol>
            </nav>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default Home;

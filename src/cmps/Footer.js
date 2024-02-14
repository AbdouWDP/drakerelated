import { useState } from "react";

function Footer() {
  const [sm, setSm] = useState(false);
  const [terms, setTerms] = useState(false);

  function mouseInSmList(e) {
    setSm(true);
    setSm && (e.target.style.opacity = 0.3);
  }
  function mouseOutSmList(e) {
    setSm && (e.target.style.opacity = 1);
  }
  function mouseInTerms(e) {
    setTerms(true);
    terms && (e.target.style.opacity = 0.3);
  }
  function mouseOutTerms(e) {
    terms && (e.target.style.opacity = 1);
  }
  return (
    <>
      <footer className="footer w-full my-4 h-36 flex justify-center items-center">
        <div
          className="w-full flex max-sm:flex-col max-sm:gap-4"
          style={{ height: "90%" }}
        >
          <div className="subscribe w-1/2 h-full max-sm:w-full">
            <div className="flex flex-col justify-between w-full h-full max-sm:gap-4">
              <div className="font-bold">
                <p>Subscribe</p>
              </div>
              <div className="text-xs font-bold w-3/5 max-sm:w-full">
                <p>
                  Receive email updates about launches, new product info,
                  exclusive access, and more.
                </p>
              </div>
              <div className="subscribe-input h-10">
                <label className="h-full flex gap-2">
                  <input
                    type="text"
                    placeholder="Email address *"
                    className="h-full w-1/2 px-1 text-xs font-bold max-sm:w-4/5"
                  />
                  <button className="subscribe-submit-button h-full w-20 bg-black text-white font-bold text-lg">
                    Submit
                  </button>
                </label>
              </div>
            </div>
          </div>
          <div className="footer-links w-1/2 flex max-sm:w-full">
            <nav className="footer-terms-nav mx-2 w-1/2 max-sm:w-full">
              <ol className="font-bold">
                <li
                  className="terms-list w-fit"
                  onMouseMove={(e) => mouseInTerms(e)}
                  onMouseLeave={(e) => mouseOutTerms(e)}
                >
                  Terms & Conditions
                </li>
                <li
                  className="terms-list w-fit"
                  onMouseMove={(e) => mouseInTerms(e)}
                  onMouseLeave={(e) => mouseOutTerms(e)}
                >
                  Privacy Policy
                </li>
                <li
                  className="terms-list w-fit"
                  onMouseMove={(e) => mouseInTerms(e)}
                  onMouseLeave={(e) => mouseOutTerms(e)}
                >
                  FAQs
                </li>
              </ol>
            </nav>
            <nav className="footer-social-media-links-nav mx-2 w-1/2 max-sm:w-full">
              <ol className="font-bold">
                <li
                  className="sm-list w-fit"
                  onMouseMove={(e) => mouseInSmList(e)}
                  onMouseLeave={(e) => mouseOutSmList(e)}
                >
                  Instagram
                </li>
                <li
                  className="sm-list w-fit"
                  onMouseMove={(e) => mouseInSmList(e)}
                  onMouseLeave={mouseOutSmList}
                >
                  Facebook
                </li>
                <li
                  className="sm-list w-fit"
                  onMouseMove={(e) => mouseInSmList(e)}
                  onMouseLeave={mouseOutSmList}
                >
                  Twitter
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

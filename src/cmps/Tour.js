import { useDispatch, useSelector } from "react-redux";
import Aside from "./Aside";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { show } from "../store/albumReducer";

function Tour() {
  const state = useSelector((state) => state.album_project);
  const dispatch = useDispatch();
  return (
    <>
      <Aside />
      <Navbar state={true} />
      <main className="tour-main m-auto" onClick={() => dispatch(show(0))}>
        <div className="tour-img w-full py-20 h-40 m-auto">
          <img
            src="https://cdn.shopify.com/s/files/1/0454/5616/2972/files/20231112_TOUR_LOGO_4.png?v=1699880162"
            alt=""
          />
        </div>
        <div className="events w-full py-4 mt-20">
          <table className="w-full">
            <tbody className="w-full h-14">
              <tr className="font-bold w-full h-full text-center">
                <td className="w-1/4">Date</td>
                <td className="w-1/4">Location</td>
                <td className="w-1/4">Company</td>
                <td className="underline w-1/4">Ticket</td>
              </tr>
              <tr className="font-bold w-full h-full text-center">
                <td className="w-1/4">Date</td>
                <td className="w-1/4">Location</td>
                <td className="w-1/4">Company</td>
                <td className="underline w-1/4">Ticket</td>
              </tr>
              <tr className="font-bold w-full h-full text-center">
                <td className="w-1/4">Date</td>
                <td className="w-1/4">Location</td>
                <td className="w-1/4">Company</td>
                <td className="underline w-1/4">Ticket</td>
              </tr>
              <tr className="font-bold w-full h-full text-center">
                <td className="w-1/4">Date</td>
                <td className="w-1/4">Location</td>
                <td className="w-1/4">Company</td>
                <td className="underline w-1/4">Ticket</td>
              </tr>
              <tr className="font-bold w-full h-full text-center">
                <td className="w-1/4">Date</td>
                <td className="w-1/4">Location</td>
                <td className="w-1/4">Company</td>
                <td className="underline w-1/4">Ticket</td>
              </tr>
              <tr className="font-bold w-full h-full text-center">
                <td className="w-1/4">Date</td>
                <td className="w-1/4">Location</td>
                <td className="w-1/4">Company</td>
                <td className="underline w-1/4">Ticket</td>
              </tr>
              <tr className="font-bold w-full h-full text-center">
                <td className="w-1/4">Date</td>
                <td className="w-1/4">Location</td>
                <td className="w-1/4">Company</td>
                <td className="underline w-1/4">Ticket</td>
              </tr>
              <tr className="font-bold w-full h-full text-center">
                <td className="w-1/4">Date</td>
                <td className="w-1/4">Location</td>
                <td className="w-1/4">Company</td>
                <td className="underline w-1/4">Ticket</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Tour;

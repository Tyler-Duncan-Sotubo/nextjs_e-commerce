import "../styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { wrapper } from "../src/Redux/store/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getTotals, cartSelector } from "../src/Redux/reducer/cartSlice";
import { getUser } from "../src/Redux/reducer/AuthSlice";

function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartSelector);

  const Hydrated = ({ children }: { children?: any }) => {
    const [hydration, setHydration] = useState(false);

    useEffect(() => {
      if (typeof window !== "undefined") {
        setHydration(true);
      }
    }, []);
    return hydration ? children : "";
  };

  useEffect(() => {
    dispatch(getTotals());
    dispatch(getUser());
  }, [cartItems, dispatch]);

  return (
    <>
      <Hydrated>
        <Component {...pageProps} />
        <ToastContainer
          autoClose={1000}
          hideProgressBar={true}
          pauseOnHover={false}
        />
      </Hydrated>
    </>
  );
}

export default wrapper.withRedux(App);

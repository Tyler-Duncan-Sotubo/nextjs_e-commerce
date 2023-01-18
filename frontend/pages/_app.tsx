import "../styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { wrapper } from "../src/Redux/store/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getTotals, cartSelector } from "../src/Redux/reducer/cartSlice";
import { getUser } from "../src/Redux/reducer/AuthSlice";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartSelector);

  useEffect(() => {
    dispatch(getTotals());
    dispatch(getUser());
  }, [cartItems, dispatch]);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 2 * 1000, retry: false },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ToastContainer
          autoClose={1000}
          hideProgressBar={true}
          pauseOnHover={false}
        />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(App);

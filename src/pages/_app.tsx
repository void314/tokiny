import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from 'next/app';
import { persistor, setupStore } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ScrollTopBtn from "@/components/scroll-top-btn/scroll-top-btn";

const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
      <Component {...pageProps} />
      <ScrollTopBtn/>
      </PersistGate>
    </Provider>
  )
}

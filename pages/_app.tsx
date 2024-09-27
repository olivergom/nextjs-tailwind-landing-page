import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavigationBar/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
  
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

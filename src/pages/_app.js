import '../styles/globals.css'
import NavBar from "../components/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
      <>
        <NavBar/>
        <Component {...pageProps} />
      </>
  );
}

export default MyApp

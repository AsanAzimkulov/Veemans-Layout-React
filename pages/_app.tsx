import "../public/fonts/ruberoud/Ruberoid.css"
import "../public/fonts/racerboy/RacerBoy.css"
import "../public/fonts/tomorrow/Tomorrow.css"
import "../styles/globals.css";


import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

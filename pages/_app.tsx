import type { AppProps } from "next/app";
import "../Components/Arena/Arena.css";
import "../Components/LoadingIndicator/LoadingIndicator.css";
import "../Components/SelectCharacter/SelectCharacter.css";
import "../styles/globals.css";

declare global {
  interface Window {
    ethereum: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

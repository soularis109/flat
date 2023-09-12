import "@/styles/globals.css";
import IntlWrapper from "@/context/intlProvider";

export default function App({ Component, pageProps }) {
  return (
    <IntlWrapper>
      <Component {...pageProps} />
    </IntlWrapper>
  );
}

import "@/styles/globals.css";
import IntlWrapper from "@/context/intlProvider";
import Head from "next/head";

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any" />
                <link rel="icon" type="image/png" href="/images/favicons/favicon-96x96.png" sizes="96x96"/>
                <link rel="icon" type="image/png" href="/images/favicons/favicon-32x32.png" sizes="32x32"/>
                <link rel="icon" type="image/png" href="/images/favicons/favicon-16x16.png" sizes="16x16"/>
            </Head>
            <IntlWrapper>
                <Component {...pageProps} />
            </IntlWrapper>
        </>
    );
}

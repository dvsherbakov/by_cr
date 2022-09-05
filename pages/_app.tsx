import '../styles/globals.css'
import {AppProps} from 'next/app'
import Head from 'next/head'
import {BasketProvider} from "../components/context/BasketContext";

const App = ({Component, pageProps}: AppProps) => (
    <>
        <Head>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1, shrink-to-fit=no'
            />
            <link rel='icon' href='/favicon.ico'/>
            <title>App</title>
        </Head>
        <BasketProvider>
            <Component {...pageProps} />
        </BasketProvider>
    </>
)

export default App

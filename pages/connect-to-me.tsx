import Head from "next/head";
import React, {useEffect, useState} from "react";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar/NavBar";
import {ContactAs} from "../components/ContactAs";

const ConnectToMe = () => {
    const [wWidth, setWidth] = useState<number>(1024)

    useEffect(function mount() {

        if (typeof window !== "undefined") {
            setWidth(window.innerWidth-18)
        }

        function onScroll() {
            if (typeof window !== "undefined") {
                setWidth(window.innerWidth-18)
            }
        }

        window.addEventListener("scroll", onScroll);

        return function unMount() {
            window.removeEventListener("scroll", onScroll);
        };
    });

    return (
        <>
            <Head>
                <title>Обратная связь</title>
                <meta name='description' content='Свяжитесь со мной'/>
            </Head>

            <NavBar current={'connect-to-me'} showLogo={true}/>

            <ContactAs />

            <iframe className={styles.iframeContainer}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2163.870210859176!2d65.48775071608816!3d57.15637529033546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43bbe22e9826d17b%3A0x3867da0390e47c0e!2z0KLQsNCy0YDQuNGH0LXRgdC60LDRjyDRg9C7LiwgMiwg0KLRjtC80LXQvdGMLCDQotGO0LzQtdC90YHQutCw0Y8g0L7QsdC7LiwgNjI1MDM3!5e0!3m2!1sru!2sru!4v1626158282617!5m2!1sru!2sru"
                    width={wWidth} height="250" loading="lazy"></iframe>
        </>
    )
}
export default ConnectToMe
import Head from "next/head";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from '../../styles/cake-to-order.module.scss'

const WeddingCatalog = () => {


    return (
        <>
            <Head>
                <title>Каталог</title>
                <meta name='description' content='Детские радости'/>
            </Head>

            <NavBar current={'cake-to-order'} showLogo={true}/>
            <main className={styles.main}>
                <h1>Детские торты</h1>
            </main>
        </>
    )
}
export default WeddingCatalog
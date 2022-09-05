import Head from "next/head";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import {CatalogPageProps} from "../../types/types";
import {list, maidenTypes, priceList} from '../api/helpers/test-list'
import {Catalog} from "../../components/Catalog/Catalog";

import styles from '../../styles/catalog.module.scss'

const CatalogPage = ({catalog, prices, types}: CatalogPageProps) => {
    return (
        <>
            <Head>
                <title>Каталог</title>
                <meta name='description' content='Каталог'/>
            </Head>

            <NavBar current={'catalog'} showLogo={true}/>
            <main className={styles.catalog}>
                <Catalog catalog={catalog} types={types} prices={prices}/>
            </main>

        </>
    )
}

CatalogPage.getInitialProps = async () => {
    return {catalog: list, prices: priceList, types: maidenTypes}
}

export default CatalogPage
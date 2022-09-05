import Head from "next/head";
import NavBar from "../../components/NavBar/NavBar";
import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import {getById, getTypeById, maidenSizes, priceList} from "../api/helpers/test-list";
import {MaidenType, TMaiden, TMaidenSize} from "../../types/types";
import Link from 'next/link'
import {Photos} from "../../components/Photos";
import {additionals, descriptions} from "../../components/Descriptions";

import styles from '../../styles/catalog.module.scss'



type CatalogItemProps = {
    maiden: TMaiden | undefined;
    types: MaidenType;
    sizes: TMaidenSize[]
    prices: number[],
}

const CatalogItemPage = (props: CatalogItemProps) => {

    const {maiden, types, sizes, prices} = props;

    const addType = maiden && maiden.additional || 0
    const descrType = maiden && maiden.maidenType || 1
    const Addon = additionals[addType];
    const Descr = descriptions[descrType];


    const [count, setCount] = useState<number>(1)
    const [price, setPrice] = useState<number>(prices[0])
    const [selectedSize, setSelectedSize] = useState<number>(1)


    useEffect(() => {
        setCount(1)
        setPrice(prices[0])
        setSelectedSize(1)

    }, [props])

    useEffect(()=>{
        setPrice(prices[selectedSize - 1])
    }, [selectedSize])

    const displayedPrice = useMemo(() => price * count, [price, count])

    return (<section>

        <Head>
            <title>Каталог</title>
            <meta name='description' content='Каталог'/>
        </Head>

        <NavBar current={'catalog'} showLogo={true}/>


        <main className={styles.catalog}>
            <aside className={styles.navArea}>
                <h3><Link href={'/'}>Главная</Link>
                    <Link href={'/catalog'}>/Каталог</Link>/{maiden && `${types} ${maiden.caption && '"'+maiden.caption+'"'}`}</h3>
                <span>
                    <Link href={`/catalog/${maiden && maiden.id - 1 || 1}`}>
                        {'< Назад'}
                    </Link> |
                    <Link href={`/catalog/${maiden && maiden.id + 1 || 1}`}>
                        {' Вперед >'}
                    </Link>
                </span>
            </aside>
            {maiden && (<div className={styles.catalogItem}>
                <section className={styles.mainColumn}>
                    <section className={styles.imgSection}>
                        <Photos pictures={maiden.pictures} caption={maiden.caption}/>
                    </section>
                    <Addon/>
                </section>
                <aside className={styles.slaveColumn}>
                    <div>{`${types} ${maiden.caption && '«'+maiden.caption+'»'}`}</div>
                    <div>{`${displayedPrice} ₽`}</div>
                    {prices.length === 5 &&
                    <div>
                        <div>Размер:</div>
                        <select size={1}
                                value={selectedSize}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                   setSelectedSize(+e.target.value)
                                }}>
                            {sizes && sizes.map((sz, idx) => <option value={sz.id}
                                                                     key={idx.toString()}>{sz.value}</option>)}
                        </select>
                    </div>
                    }
                    <div>
                        <div>Количество:</div>
                        <div className={styles.counter}>
                            <input onChange={(event) => {
                                setCount(+event.target.value)
                            }} value={count}/>
                            <div className={styles.counterContainer}>
                                <button className={styles.counterButton}
                                        onClick={() => setCount(prev => prev + 1)}>{'<'}</button>
                                <button className={styles.counterButton} onClick={() => setCount(prev => {
                                    return prev > 1 ? prev - 1 : 1
                                })}>{'>'}</button>
                            </div>
                        </div>
                    </div>
                    <button className={styles.basketButton}>
                        Добавить в корзину
                    </button>
                    <Descr />
                </aside>
            </div>)
            }
        </main>
    </section>)
}

export async function getServerSideProps(
    {
        query
    }
        : any) {
    const maiden = getById(+query.id);
    const types = getTypeById(maiden.maidenType) || 0
    const prices = maiden.priceId ? priceList[maiden.priceId] : [1000];
    return {
        props: {maiden, types, sizes: maidenSizes, prices},
    }
}

export default CatalogItemPage
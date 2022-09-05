import {CatalogPageProps} from "../../types/types";
import React, {useState} from "react";
import Link from 'next/link'

import styles from './Catalog.module.scss'
import {priceList} from "../../pages/api/helpers/test-list";
import {QuickView} from "../QuickView/";

export const Catalog = ({catalog, types}: CatalogPageProps) => {
    const [showPreview, setPreview] = useState<number>(0)

    return (<section className={styles.catalog}>
        {!!showPreview&&<QuickView maiden={catalog.filter(item => item.id === +showPreview)[0]} onClose={()=>setPreview(0)}/>}
        <ul>
            {catalog.map((maiden, idx) =>
                (
                    <li key={idx.toString()}>
                        <div>{maiden&&maiden.cover &&
                            <div className={styles.cover}>{maiden.cover}</div>}
                            <div className={styles.briefBtn} onClick={() => {
                                console.log('Нажат просмотр')
                                setPreview(maiden.id)
                            }}>Быстрый просмотр
                            </div>
                            <Link href={`/catalog/${maiden.id}`}>
                                <a>
                                    <img className={styles.imgLink} alt={maiden.caption} src={maiden.pictures[0].s}/>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.caption}>
                            {`${types[maiden.maidenType]} ${maiden.caption}`}
                        </div>
                        {maiden.priceId &&
                        <div className={styles.price}>
                            {`${priceList[maiden.priceId][0].toFixed(2)} ₽`}
                        </div>
                        }
                    </li>
                ))}
        </ul>
    </section>)
}
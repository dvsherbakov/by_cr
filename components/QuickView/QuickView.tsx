import {TMaiden} from "../../types/types";

import styles from './QuickView.module.scss'
import {Photos} from "../Photos";
import React, {ChangeEvent, useCallback, useEffect, useMemo, useState} from "react";
import {maidenSizes} from '../../pages/api/helpers/test-list';

import axios from "axios";

export type QuickViewProps = {
    maiden: TMaiden
    onClose: () => void
}

type DtxMaidenType = {
    maiden: TMaiden;
    types: string;
    prices: number[]
}

export const QuickView = ({maiden, onClose}: QuickViewProps) => {
    const [dtx, setDtx] = useState<DtxMaidenType>({
        maiden: {
            maidenType: 1,
            id: 1,
            caption: '',
            pictures: [],
            priceId: 1,
            cover: '',
            additional: 1
        }, prices: [100], types: 'Торт'
    })

    const [selectedSize, setSelectedSize] = useState<number>(1)
    const [count, setCount] = useState<number>(1)
    const [price, setPrice] = useState<number>(dtx.prices[0])

    const fetchedData = useCallback(async () => {
        const basePath = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : `https://bykristy.herokuapp.com/api`
        const {data} = await axios.get<DtxMaidenType>(`maiden/${maiden.id}`, {baseURL: basePath})
        return data
    }, [maiden.id])

    useEffect(() => {
        fetchedData().then(r => {
            setDtx(r)
        })
    }, [fetchedData])

    useEffect(() => {
        setPrice(dtx.prices[selectedSize - 1])
    }, [selectedSize, dtx])

    const displayedPrice = useMemo(() => price * count, [price, count])

    return (<aside className={styles.quickView}>
        <div className={styles.container}>
            <section>
                <Photos pictures={maiden.pictures} caption={maiden.caption}/>
            </section>

            <aside className={styles.infoArea}>
                <div className={styles.caption}>{`${dtx.types} ${maiden.caption && '«' + maiden.caption + '»'}`}</div>

                <div>{`${displayedPrice} ₽`}</div>

                {dtx.prices.length === 5 &&
                <div className={styles.sizesArea}>
                    <div>Размер:</div>
                    <select size={1}
                            value={selectedSize}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                setSelectedSize(+e.target.value)
                            }}>
                        {maidenSizes && maidenSizes.map((sz, idx) => <option value={sz.id}
                                                                             key={idx.toString()}>{sz.value}</option>)}
                    </select>
                </div>
                }

                <div className={styles.counterArea}>
                    <div>Количество:</div>
                    <input type={'number'} pattern={'[0-9]*'} min={1} max={99} placeholder={'1'}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setCount(+e.target.value)}/>
                </div>
            </aside>

            <aside onClick={onClose} className={styles.closeArea}>
                <svg viewBox="0 0 32 32" fill="currentColor" width="32" height="32">
                    <g fill="none">
                        <path
                            d="M18.7692308,4 L20,5.23076923 L13.23,12 L20,18.7692308 L18.7692308,20 L12,13.23 L5.23076923,20 L4,18.7692308 L10.769,12 L4,5.23076923 L5.23076923,4 L12,10.769 L18.7692308,4 Z"
                            transform="translate(4 4)" fill="currentColor"/>
                    </g>
                </svg>
            </aside>
        </div>
    </aside>)
}
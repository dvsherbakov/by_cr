import {TPictureLinks} from "../../types/types";
import React, {useState} from "react";

import styles from './Photos.module.scss'


export type PhotosProps = {
    pictures: TPictureLinks[];
    caption: string;
}

export const Photos = ({pictures, caption}: PhotosProps) => {
    const [pointer, setPointer] = useState<number>(0)

    const curPicture = pointer < pictures.length ? pictures[pointer].l : pictures[0].l;

    if (pictures.length > 1) {
        return (<section className={styles.photos}>
            <img alt={caption} src={curPicture} className={styles.pictureFrame}/>
            <aside className={styles.iconFrame}>
                {pictures.map((p, idx) => <img src={p.p} alt={`${caption}-${idx + 1}`} onClick={() => {
                    setPointer(idx)
                }} key={idx}/>)}
            </aside>
        </section>)
    } else {
        return <section><img alt={caption} src={curPicture}/></section>
    }
}
import {CakeItemPageProps} from "../../types/types";

import styles from './cakeitem.module.scss'

export const cakeitem = ({cake, selected, changeState}: CakeItemPageProps) => {
    return (
        <li className={styles.cakeitem}>
            <div className={styles.imgContainer}>
                <img alt={cake.caption} src={cake.url}/>
            </div>
            <span>
                <input type={'checkbox'} checked={selected} onChange={() => {
                    changeState(cake.id)
                }}/>
                {cake.caption}
            </span>

        </li>
    )
}
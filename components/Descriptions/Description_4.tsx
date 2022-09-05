import {Delivery_1} from "./Delivery_1";
import {Tastes} from "./Tastes";
import {MagicMoment} from "./index";

import styles from './Description.module.scss'


export const Description_4 = () => (
    <section className={styles.description}>
        <h3>Описание</h3>
        <Tastes />
        <MagicMoment />
        <Delivery_1 />
    </section>
)
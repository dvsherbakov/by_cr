import styles from "./Description.module.scss";
import {Tastes_2} from "./Tastes_2";
import {MagicMoment} from "./MagicMoment";
import {Delivery_1} from "./Delivery_1";

export const Description_6 = () => (<section className={styles.description}>
    <h3>Описание</h3>
    <Tastes_2 />
    <MagicMoment />
    <Delivery_1 />
</section>)
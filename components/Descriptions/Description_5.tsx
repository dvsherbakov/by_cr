import styles from "./Description.module.scss";
import {Tastes} from "./Tastes";
import {MagicMoment} from "./MagicMoment";
import {Delivery_1} from "./Delivery_1";

export const Description_5 = () => (<section className={styles.description}>
    <h3>Описание</h3>
    <p>
        Размер всей композиции немного больше 20 на 20 см. Вес примерно 1.5 кг (плюс-минус 50 гр.)⠀Сверху на тортике картинки из сахарной бумаги. Всё, конечно, съедобно. И очень вкусно
    </p>
    <Tastes/>
    <MagicMoment />
    <Delivery_1 />
</section>)
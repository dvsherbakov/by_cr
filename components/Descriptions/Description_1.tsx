import styles from './Description.module.scss'
import {Tastes} from "./Tastes";

export const Description_1 = () => (
        <section className={styles.description}>
            <h3>Описание</h3>
            <p>Пять вкусов на выбор, пять съедобных открыток.Размеры пирожных: 10*5*5 см. Вес набора 0.8 кг плюс-минус
                100 гр. (все пирожные весят по разному в одном размере).⠀Кстати, можно поменять надписи в наборах. Это
                плюс 100 рублей к цене.⠀</p>
            <Tastes />
            <aside className={styles.delivery}>
                <div>Есть доставка:</div>
                <div>По городу Тюмень БЕСПЛАТНО*</div>
                <div className={styles.addonText}>* При заказе от 1500 руб.</div>
            </aside>
        </section>
    )

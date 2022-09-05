
import styles from './Description.module.scss'

export const Additional_1 = () => {
    return (<aside className={styles.description}>
        <p>Наборы пирожных со съедобными картинками — самый лучший подарок к любому празднику.</p>
        <span>Потому что:</span>
        <ol>
            <li>
                Выглядят замечательно.
                Прозрачная крышка коробки позволяет рассмотреть все картинки
            </li>
            <li>
                Набор и правда большой (коробка 30 на 11 см), но стоит недорого: всего 1550 рублей. Прям солидный
                такой подарок получается. ( можно сделать в мини-формате в коробке 20 на 10 стоимость 1200 рублей)
            </li>
            <li>
                Можно выбрать в каждый набор по 5 вкусов из нашего ассортимента. То есть все пирожные могут быть разными!
            </li>
        </ol>
    </aside>)
}
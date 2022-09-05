import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from './basket.module.scss'

export const WidgetBasket = () => {
    return <nav className={styles.widgetBasket}><FontAwesomeIcon icon={faShoppingBasket} size={"3x"}/></nav>
}
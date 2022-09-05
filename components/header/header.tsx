import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCamera, faPhone, faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import styles from './header.module.scss'
import {useBasket} from "../context/BasketContext";
import {useState} from "react";
import {SmallBasket} from '../basket'
import {cakes} from '../../pages/api/helpers/cake-list'


export const Header = () => {
    const [basket, showBasket] = useState<boolean>(false)
    const {selectedItems, setItems} = useBasket()
    const basketCount = selectedItems.length
    const selectedCakes = cakes.filter((cake) => selectedItems.includes(cake.id))

    const switchBasket = () => showBasket((prevState => !prevState))

    return (<aside className={styles.header}>
        <span className={styles.phone}> <FontAwesomeIcon icon={faPhone}/> +7 922 821 18 01</span>
        {basketCount ? <span
                className={styles.basket}
                onClick={switchBasket}>
            <FontAwesomeIcon icon={faShoppingBasket}/>{basketCount}
        </span> :
            <span><FontAwesomeIcon icon={faCamera}/>
                <a href={'https://www.instagram.com/bykristy.cake/'}>@bykristy</a>
            </span>}
        {basket && <SmallBasket close={switchBasket} items={selectedCakes} setItems={setItems} ids={selectedItems}/>}
    </aside>)
}

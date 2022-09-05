import React from 'react'
import {faAddressCard, faClock, faGift, faHome, faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

import styles from './NavBar.module.scss'
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {useBasket} from "../context/BasketContext";

export interface NavProps {
    current: string;
    showLogo: boolean;
}

export interface NavItem {
    name: string;
    Title: string;
    icon?: IconDefinition
}

const NavBar: React.FC<NavProps> = ({current, showLogo}) => {
    const {selectedItems} = useBasket();
    const items: NavItem[] = [
        {name: '', Title: 'Главная', icon: faHome},
        {name: 'catalog', Title: 'Каталог', icon: faHome},
        {name: 'toppings', Title: 'Начинки', icon: faHome},
        {name: 'cake-to-order', Title: 'Торты на заказ', icon: faGift},
        {name: 'cake-postcards', Title: 'Торты-открытки', icon: faAddressCard,},
        {name: 'connect-to-me', Title: 'Свяжитесь со мной', icon: faClock},
    ]
    if (selectedItems.length) items.push({name: 'order', Title: 'Заказ', icon: faShoppingBasket})
    return <nav className={styles.navbar}>
        <aside className={styles.roundMenu}>
            {showLogo && <div className={styles.logoContainer}>
                <img className={styles.logo} alt={'Главное лого'} src={'/logo.png'}/>
            </div>}
            <ul>
                {items.map((item) => <li key={item.name}
                                         className={current === item.name ? styles.selected : styles.common}>
                    {<Link href={`/${item.name}`}>
                        <a>
                            <span
                            >{item.Title}
                            </span>
                        </a>
                    </Link>}
                </li>)}
            </ul>
        </aside>

    </nav>
}
export default NavBar
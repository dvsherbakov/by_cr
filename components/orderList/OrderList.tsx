
import {useBasket} from "../context/BasketContext";
import {OrderListProps} from "../../types/types";
import {OrderItem} from "./orderItem";

import styles from './OrderList.module.scss'

export const OrderList = ({items}: OrderListProps) => {
    const {selectedItems} = useBasket()
    return <section className={styles.orderList}>
        <ul>
            {items.filter(it=>selectedItems.includes(it.id)).map(item=><OrderItem item={item} key={item.id}/>)}
        </ul>
    </section>
}
import {OrderItemProps} from "../../types/types";
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {v4 as uuidv4} from 'uuid';

import styles from './OrderList.module.scss'


type TOrderItemOptions = {
    id: string;
    size: number
    filling: number;
}

export const OrderItem = ({item}: OrderItemProps) => {
    const fillings = {
        1: 'Малина', 2: 'Смородина', 3: 'Клубника', 4: 'Яблоко'
    }
    const [count, setCount] = useState<number>(1)
    const [opt, setOpt] = useState<TOrderItemOptions[]>([{id: uuidv4(), size: 1, filling: 1}])

    const upHandler = () => {
        if (count < 5) {
            setOpt(prevState => [...prevState, {id: uuidv4(), size: 1, filling: 1}])
            setCount(prevState => ++prevState)
        }
    }

    const removeOption = (itemId: string) => {
        setOpt(prevState => prevState.filter(item => item.id!== itemId))
    }


    return (<li className={styles.orderItem}>
        <section className={styles.itemHead}>
            <img alt={item.caption} src={item.url}/>
            <div>{item.caption}</div>
            <div className={styles.counter}>
                Количество: <strong>{opt.length}</strong>
                <div className={styles.buttons}>
                    <button onClick={upHandler}>
                        <FontAwesomeIcon icon={faCartPlus} size={"sm"}/>
                    </button>
                </div>
            </div>
        </section>
        <section className={styles.itemOptions}>
            {item.section !== 3 && opt.map(it => <div key={it.id}>
                <button onClick={()=>removeOption(it.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} size={"sm"}/>
                </button>
                <div>
                Начинка:
                <select size={1}>
                    {Object.values(fillings).map((vl, idx) => <option key={idx.toString()}>{vl}</option>)}
                </select>
                </div>
                Размер: {it.size}</div>)}
            {item.section===3 && <div><span>По заказным сладостям контактируйте с производителем: </span></div>}
        </section>
    </li>)
}
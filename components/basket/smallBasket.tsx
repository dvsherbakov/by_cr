import styles from './basket.module.scss'
import {faPowerOff} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {BasketProps} from "../../types/types";

export const SmallBasket = ({close, items, setItems, ids}: BasketProps) => {

    const changeState = (id: string) => {
        const state = ids.indexOf(id)
        setItems((prevState => state >= 0 ? [...prevState.slice(0, state).concat(prevState.slice(state + 1))] : [...prevState, id]))
    }

    return (<aside className={styles.smallBasket}>
        <div className={styles.symbolContainer}>
            <FontAwesomeIcon icon={faPowerOff} size={"xs"} onClick={() => {
                close()
            }}/>
        </div>
        <h4>Выбраные сладости:</h4>
        <ul>
            {items.map((item) => <li key={item.id}><span onClick={()=>changeState(item.id)}>-</span>{item.caption}</li>)}
        </ul>
    </aside>)
}


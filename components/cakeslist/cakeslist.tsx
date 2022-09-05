import {CakePageProps} from "../../types/types";
import CakeItem from '../cakeitem'
import styles from './cakeslist.module.scss'
import {useBasket} from "../context/BasketContext";

export const cakeslist = ({cakes}: CakePageProps) => {
    const {selectedItems, setItems} = useBasket()


    const changeState = (id: string) => {
        const state = selectedItems.indexOf(id)
        setItems((prevState => state >= 0 ? [...prevState.slice(0, state).concat(prevState.slice(state + 1))] : [...prevState, id]))
    }

    return (<section className={styles.cakeslist}>
        <ul>
            {cakes.map(cake => <CakeItem key={cake.id} cake={cake} selected={selectedItems.includes(cake.id)}
                                         changeState={changeState}/>)}
        </ul>
    </section>)
}
import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../../components/NavBar/NavBar'
import {cakes} from "../api/helpers/cake-list";
import {CakePageProps} from "../../types/types";
import styles from '../../styles/cake-to-order.module.scss'
import {useRouter} from "next/router";


const CakesToOrder = ({cakes}: CakePageProps) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Торты на заказ</title>
                <meta name='description' content='Торты'/>
            </Head>

            <NavBar current={'cake-to-order'} showLogo={true}/>

            <main className={styles.main}>

                <ul>
                    <li>
                        <Link href={'./cake-to-order/wedding'}>
                            <a>
                                <div className={styles.wedding}>{''}</div>
                            </a>
                        </Link>
                        <button onClick={async () => {
                            await router.push('./cake-to-order/wedding')
                        }}>Подробнее
                        </button>
                    </li>
                    <li>
                        <h1>ТОРТЫ НА ЗАКАЗ</h1>
                        <Link href={'./cake-to-order/child'}>
                            <a>
                                <div className={styles.child}>{''}</div>
                            </a>
                        </Link>
                        <button onClick={async () => {
                            await router.push('./cake-to-order/child')
                        }}>Подробнее
                        </button>
                    </li>
                    <li>
                        <Link href={'./cake-to-order/occasion'}>
                            <a>
                                <div className={styles.occasion}>{''}</div>
                            </a>
                        </Link>
                        <button onClick={async () => {
                            await router.push('./cake-to-order/occasion')
                        }}>Подробнее
                        </button>
                    </li>
                </ul>
                <aside className={styles.description}>
                    <p>Нажав на кнопку "Подробнее" вы попадаете в галерею, в которой представлены примеры оформления
                        свадебных тортов, выполненных мной</p>
                    <p>Цены на торты на заказ от 1200 рублей за кг.</p>
                    <p>Минимальный вес 2,5 кг окончательное оформление и стоимость обговариваются индивидуально</p>
                </aside>
            </main>
        </>
    )
}

CakesToOrder.getInitialProps = async () => {

    return {cakes: cakes.filter(cake => cake.section === 3)}
}

export default CakesToOrder
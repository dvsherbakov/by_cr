import Head from 'next/head'
import Header from '../components/header'
import NavBar from '../components/NavBar/NavBar'
import {cakes} from "./api/helpers/cake-list";
import {CakePageProps} from "../types/types";
import OrderList from "../components/orderList";

const CakesToOrder = ({cakes}: CakePageProps) => (
    <>
        <Head>
            <title>Торты на заказ</title>
            <meta name='description' content='Торты'/>
        </Head>

        <Header/>
        <NavBar current={'order'} showLogo={true}/>
        <div className='container'>
            <h1>Оформление заказа</h1>

            <OrderList items={cakes}/>

        </div>
    </>
)

CakesToOrder.getInitialProps = async () => {

    return {cakes}
}

export default CakesToOrder
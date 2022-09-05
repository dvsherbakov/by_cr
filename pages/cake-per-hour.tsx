import Head from 'next/head'
import Header from '../components/header'
import NavBar from '../components/NavBar/NavBar'
import {DtxCakeType} from "../types/types";
import CakeList from '../components/cakeslist'
import {cakes} from './api/helpers/cake-list'

type CakePageProps = {
    cakes: DtxCakeType[]
}

const CakePerHour = ({cakes}: CakePageProps) => (
    <>
        <Head>
            <title>Торты за час</title>
            <meta name='description' content='Generated by create next app'/>
        </Head>

        <Header/>
        <NavBar current={'cake-per-hour'} showLogo={true}/>
        <div className='container'>
            <h1>ТОРТЫ ЗА ЧАС</h1>
            <section>
                <CakeList cakes={cakes}/>
            </section>
        </div>
    </>
)

CakePerHour.getInitialProps = async () => {
    //const result = await axios.get<DtxCakeType[]>('/api/cakes')
    return {cakes: cakes.filter(cake=>cake.section==1)}
}


export default CakePerHour


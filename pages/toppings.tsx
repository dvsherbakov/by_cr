import Head from "next/head";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import {Slider} from "../components/Slider";

const Toppings = () => {


    return (
        <>
            <Head>
                <title>Начинки</title>
                <meta name='description' content='Начинки'/>
            </Head>

            <NavBar current={'toppings'} showLogo={true}/>

            <Slider />

        </>
    )
}
export default Toppings
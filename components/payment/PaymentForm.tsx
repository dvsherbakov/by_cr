import React from "react";
import {BasicInput} from './BasicInput'
import {ExpiryDate} from "./ExpiryData";
import {CheckoutButton} from "./CheckoutButton";
import styles from './payment.module.scss'


export const PaymentForm = () => {
    return (
        <div className={styles.PaymentForm}>
            <form onSubmit={() => {
                console.log('submit')
            }}>
                <div className="Title">Payment information</div>
                <BasicInput name="name" label="Name on credit card" type="text" placeholder="John Smith"/>
                <BasicInput name="card" label="Credit card number" type="number" placeholder="0000 0000 0000 0000"/>
                <ExpiryDate/>
                <CheckoutButton/>
            </form>
        </div>
    );
}
import React from "react";

import styles from './ContactAs.module.scss'

export const ContactAs = () => {
    return (<>
        <section className={styles.contactAs}>
            <h3>СВЯЖИТЕСЬ С НАМИ</h3>
            <input placeholder={'Имя'} className={styles.name}/>
            <input placeholder={'Электронная почта'}/>
            <input placeholder={'Тема'} className={styles.phone}/>
            <textarea placeholder={'Добавьте сообщение'} />
            <div className={styles.buttonContainer}>
                <button className={styles.black}>Отправить</button>
            </div>
        </section>
    </>)
}
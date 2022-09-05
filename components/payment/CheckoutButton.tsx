import styles from './payment.module.scss'

export const CheckoutButton = () => {
    return (
        <div className={styles.CheckoutButton}>
            <button>Book securely</button>
            <span> Your credit card information is encrypted</span>
        </div>
    );
}

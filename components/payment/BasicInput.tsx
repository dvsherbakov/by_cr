import styles from './payment.module.scss'

export type BasicInputProps = {
    label: string;
    name: string;
    type: string;
    placeholder: string;
}

export const BasicInput = ({name, label, type, placeholder}: BasicInputProps) => {
    return (
        <div className={styles.BasicInput}>
            <label  htmlFor={name}>{label}</label>
            <input id={name} type={type} placeholder={placeholder}/>
        </div>
    );
}

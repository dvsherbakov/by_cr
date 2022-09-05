import styles from './Slyder.module.scss'
import {useState} from "react";

export const Slider = () => {
    const [pos, setPos] = useState<number>(0)
    const classesList = [styles.slides,[styles.bias0, styles.bias1, styles.bias2, styles.bias3, styles.bias4, styles.bias5][pos]].join(' ')
    return (
        <section className={styles.container}>
            <div className={styles.slider}>
                <div className={classesList}>

                    <div className={styles.slide}><img alt={''} src={'https://static.wixstatic.com/media/201677_f08c8baaace04313aa52d0de9551b69e~mv2.jpg/v1/fill/w_698,h_433,al_c,q_80,usm_0.66_1.00_0.01/201677_f08c8baaace04313aa52d0de9551b69e~mv2.jpg'}/></div>
                    <div className={styles.slide}><img alt={''} src={'https://static.wixstatic.com/media/201677_67a2fe1460484511a86c2f391f1428f1~mv2.jpg/v1/fill/w_698,h_433,al_c,q_80,usm_0.66_1.00_0.01/201677_67a2fe1460484511a86c2f391f1428f1~mv2.jpg'}/></div>
                    <div className={styles.slide}><img alt={''} src={'https://static.wixstatic.com/media/201677_5be3bab4767545949d85792d423b7683~mv2.jpg/v1/fill/w_698,h_433,al_c,q_80,usm_0.66_1.00_0.01/201677_5be3bab4767545949d85792d423b7683~mv2.jpg'}/></div>
                    <div className={styles.slide}><img alt={''} src={'https://static.wixstatic.com/media/201677_d8850363897d4839b8dba4adbc9a84d6~mv2.jpg/v1/fill/w_698,h_433,al_c,q_80,usm_0.66_1.00_0.01/201677_d8850363897d4839b8dba4adbc9a84d6~mv2.jpg'}/></div>
                    <div className={styles.slide}><img alt={''} src={'https://static.wixstatic.com/media/201677_c124763b83f349e29a68fa0f2eab71de~mv2.jpg/v1/fill/w_698,h_433,al_c,q_80,usm_0.66_1.00_0.01/201677_c124763b83f349e29a68fa0f2eab71de~mv2.jpg'}/></div>
                    <div className={styles.slide}><img alt={''} src={'https://static.wixstatic.com/media/201677_b658b4d488454dd8ac3b61c5602de035~mv2.jpg/v1/fill/w_698,h_433,al_c,q_80,usm_0.66_1.00_0.01/201677_b658b4d488454dd8ac3b61c5602de035~mv2.jpg'}/></div>
                </div>
                <div className={styles.navigation}>
                    <div className={styles.bar} onClick={()=>{setPos(0)}}>{''}</div>
                    <div className={styles.bar} onClick={()=>{setPos(1)}}>{''}</div>
                    <div className={styles.bar} onClick={()=>{setPos(2)}}>{''}</div>
                    <div className={styles.bar} onClick={()=>{setPos(3)}}>{''}</div>
                    <div className={styles.bar} onClick={()=>{setPos(4)}}>{''}</div>
                    <div className={styles.bar} onClick={()=>{setPos(5)}}>{''}</div>
                </div>
            </div>
        </section>)
}


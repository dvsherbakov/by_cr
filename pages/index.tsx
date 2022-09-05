import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar/NavBar'
import React, { useState, useEffect} from "react";

const Home = () => {
    const [wWidth, setWidth] = useState<number>(1024)

    useEffect(function mount() {
        function onScroll() {
            if (typeof window !== "undefined") {
                setWidth(window.innerWidth-18)
            }
        }

        window.addEventListener("scroll", onScroll);

        return function unMount() {
            window.removeEventListener("scroll", onScroll);
        };
    });

    return (
        <>
            <Head>
                <title>Торты</title>
                <meta name='description' content='Торты, главная страница'/>
            </Head>

            <div className={styles.logoContainer}>
                <img
                    src={'https://static.wixstatic.com/media/201677_f9f54986c81a43feafda7a3a46dff339~mv2.png/v1/fill/w_1272,h_348,al_c,q_90/201677_f9f54986c81a43feafda7a3a46dff339~mv2.webp'}
                    alt={'Главное лого'} className={styles.mainLogo}/>
                <aside className={styles.logoAside}>
                    <ul aria-label={'Панель соцсетей'}>
                        <li><a href={'https://vk.com/bykristy72'}> <img
                            src={'https://static.wixstatic.com/media/34e3765f4f7e4544835057fcf9b8b8ea.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/34e3765f4f7e4544835057fcf9b8b8ea.webp'}
                            alt={'VK'}/> </a></li>
                        <li><a href={'https://www.facebook.com/cakeboutiquebykristy'}><img
                            src={'https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp'}
                            alt={'Facebook'}/></a></li>
                        <li><a href={'https://www.instagram.com/bykristy.cake/'}><img
                            src={'https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/8d6893330740455c96d218258a458aa4.webp'}
                            alt={'Instagram'}/></a></li>
                    </ul>
                    <a href={'tel:8-982-13-444-28'} className={styles.phone}>8-982-13-444-28</a>
                    <div className={styles.address}>г.Тюмень, ул.Таврическая, д.2</div>
                </aside>
            </div>

            <NavBar current={''} showLogo={false}/>

            <section className={styles.descriptionColumns}>
                <div className={styles.columnText}>
                    <h2>Рада видеть вас на моей страничке.</h2>
                    <h2>Теперь давайте знакомиться</h2>
                    <span>Меня зовут Кристина. Я Ваш пока еще домашний кондитер. Занимаюсь сладким искусством уже 7 лет, по профессии я бухгалтер и уже 15 лет тружусь им. Я постоянно прохожу обучение, для того чтоб быть в тренде кондитерского искусства и предлагать Вам эксклюзивные идеи.2020 год изменил многое и думаю не только у меня, и я приняла решение, перевести мое любимое хобби в постоянную работу. В данный момент я на пути к открытию своего кондитерского цеха, и как любой путь он не легкий и без Вас, моих самых ценных заказчиков мне не справиться. С нетерпением жду Ваших заказов, отзывов и комментариев (их можно оставить здесь, или в соцсетях). Обязательно учту каждое мнение.</span>
                    <span>P.S. Работаю полностью официально- что это значит? :</span>
                    <ol>
                        <li>У меня открыто ИП</li>
                        <li>я плачу налоги и предоставляю отчетные документы</li>
                        <li>Работаю с соблюдением всех норм СанПина</li>
                        <li>Оплачивать можно на расчетный счет, через интернет-эквайринг (любой картой по ссылке,
                            которую я
                            вам отправлю на Ваш телефон), наличными или переводом на карту
                        </li>
                    </ol>
                    <div className={styles.buttonContainer}>
                        <button>Свяжитесь с нами</button>
                    </div>
                </div>
                <div className={styles.columnImage}>
                    <div className={styles.action}>
                        <div className={styles.splash}>
                            <svg data-bbox="42.049 20.014 115.921 160.11" xmlns="http://www.w3.org/2000/svg" width="200"
                                 height="200" stroke="#92FFD1" fill="#92FFD1" viewBox="0 0 200 200" data-type="shape">
                                <g>
                                    <path
                                        d="M130 31.3L115.2 82h34c8 0 11.8 9.9 5.9 15.3l-88.4 80.5c-7 6.3-17.6-1.3-14-9.8l21.9-55.2H50.8c-7.6 0-11.6-8.9-6.4-14.8l70.7-75.1c6.2-6.8 17.4-.6 14.9 8.4zm-9.2-3.2L50 103.3c-.6.7-.1 1.7.8 1.7h33.7c.7 0 1.3.8 1 1.5l-25.6 64.3c-.4 1 .8 1.9 1.7 1.2L150 91.5c.7-.6.3-1.8-.7-1.8h-42.9c-.7 0-1.2-.7-1-1.3l17.3-59.2c.1-1.2-1.2-1.9-1.9-1.1z"></path>
                                </g>
                            </svg>
                        </div>
                        <span>Скидки, акции, спецпредложения</span></div>
                </div>
            </section>
            <section className={styles.catalog}>
                <div className={styles.catalogCaption}>Каталог продукции</div>
                <ul>
                    <li><img
                        src={'https://static.wixstatic.com/media/201677_95143a2643b447f1bb47034ff8de46c0~mv2.jpg/v1/fill/w_437,h_523,fp_0.69_0.69,q_80,usm_0.66_1.00_0.01/201677_95143a2643b447f1bb47034ff8de46c0~mv2.webp'}
                        alt={'Печеньки'}/></li>
                    <li><img
                        src={'https://static.wixstatic.com/media/201677_eaa961c60002439e8610eb2a2754da24~mv2.jpeg/v1/fill/w_437,h_523,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/201677_eaa961c60002439e8610eb2a2754da24~mv2.webp'}
                        alt={'Конфетки'}/></li>
                    <li><img
                        src={'https://static.wixstatic.com/media/201677_ee23fa2124964874816db7823d4f2aed~mv2.jpg/v1/fill/w_437,h_523,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/201677_ee23fa2124964874816db7823d4f2aed~mv2.webp'}
                        alt={'Тортики'}/></li>
                </ul>
                <div className={styles.catalogCaption}>
                    <h3>Вам обязательно понравится</h3>
                </div>
                <ul className={styles.likeCatalog}>
                    <li className={styles.pink}>
                        <article>
                            <div className={styles.header}>
                                <div>ТОРТЫ-ОТКРЫТКИ</div>
                                <div>НАБОРЫ ПИРОЖНЫХ</div>
                                <div>ТОРТЫ-АССОРТИ</div>
                            </div>
                            <div className={styles.normal}>Всегда есть в наличии</div>
                            <div className={styles.cursive}>Тортики и наборы пирожных со съедобной сахарной картинкой
                                сверху.
                            </div>
                            <div className={styles.buttonContainer}>
                                <button>Выбрать</button>
                            </div>
                        </article>
                    </li>
                    <li className={styles.black}>
                        <article>
                            <div className={styles.header}>ТОРТЫ ЗА ДЕНЬ</div>
                            <div className={styles.normal}>Быстрый заказ торта</div>
                            <div className={styles.cursive}>Нужен торт в день заказа или на следующий день? Что я могу
                                предложить: Стандартный круглый
                                тортик 20 см в диаметре и высотой 6-7 см, без учета высоты декора, с начинкой из
                                наличия,
                                оформленный в шоколадном стиле (конфетки, шоколадки и т.д.), в "безешном" стиле (девичье
                                оформление безе, зефирки, цветочки) или печать на сахарной бумаге
                            </div>
                            <div className={styles.buttonContainer}>
                                <button>Выбрать</button>
                            </div>
                        </article>
                    </li>
                    <li className={styles.pink}>
                        <article>
                            <div className={styles.header}>ТОРТЫ НА ЗАКАЗ</div>
                            <div className={styles.normal}>Воплотим любую вашу фантазию в реальность</div>
                            <div className={styles.cursive}>Торты с индивидуальным дизайном, с учетом всех пожеланий по
                                оформлению.
                            </div>
                            <div className={styles.buttonContainer}>
                                <button>Выбрать</button>
                            </div>
                        </article>
                    </li>
                </ul>
            </section>
            <ul className={styles.workHour}>
                <li className={styles.lHour}>
                    <div className={styles.header}>ЧАСЫ РАБОТЫ</div>
                    <div className={styles.gladeYou}>Рады Вам</div>
                    <div>
                        <div className={styles.hours}>ПН–СБ: 8:00–20:00</div>
                        <div className={styles.hours}>ВС: 8:00–16:00</div>
                    </div>
                </li>
                <li>
                    <div className={styles.workHourPicture}>1</div>
                </li>
            </ul>

            <section className={styles.connect}>
                <h3>СВЯЖИТЕСЬ С НАМИ</h3>
                <input placeholder={'Имя'} className={styles.name}/>
                <input placeholder={'Номер телефона'} className={styles.phone}/>
                <textarea placeholder={'Добавьте сообщение'} />
                <div className={styles.buttonContainer}>
                    <button className={styles.black}>Отправить</button>
                </div>
            </section>

            <iframe className={styles.iframeContainer}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2163.870210859176!2d65.48775071608816!3d57.15637529033546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43bbe22e9826d17b%3A0x3867da0390e47c0e!2z0KLQsNCy0YDQuNGH0LXRgdC60LDRjyDRg9C7LiwgMiwg0KLRjtC80LXQvdGMLCDQotGO0LzQtdC90YHQutCw0Y8g0L7QsdC7LiwgNjI1MDM3!5e0!3m2!1sru!2sru!4v1626158282617!5m2!1sru!2sru"
                    width={wWidth} height="250" loading="lazy"></iframe>
        </>
    )
}

export default Home
import {TMaiden, TMaidenSize} from "../../../types/types";

export const priceList = {
    1: [100], //Пряничный человечек
    2: [400, 600, 1150, 1450, 1600], //Торт-открытка
    3: [450, 650, 1250, 1550, 1650], //Торт-открытка
    4: [650, 850, 1450, 1750, 1850], //Кулич Пасхальный, Кулич "Краффин"
    5: [1500], //Торт календарь
    6: [1550, 1750, 2350, 2650, 2750], //Набор пирожных
    7: [2300], //Вариант № 1,2,3
    8: [2500], //торт-часы,
    9: [3000], //а кто у нас будет
    10: [3250], //свадебный, Торт на заказ
    11: [3500, 3700, 4300, 4600, 4700], //Торт-ассорти
}


export const maidenTypes: { 1: string, 2: string, 3: string, 4: string, 5: string, 6: string, 7: string, 8: string, 9: string, 10: string, 12: string, 13: string }
    = {
    1: 'Набор пирожных',
    2: 'Кулич',
    3: 'Кулич Пасхальный',
    4: 'Торт-открытка',
    5: 'Торт-ассорти',
    6: 'Торт календарь',
    7: 'Свадебный',
    8: 'Торт-часы',//video
    9: 'А кто у нас будет?',
    10: 'Торт на заказ',
    12: 'Пряничный человечек',
    13: 'Торт', //  {id: 14, caption: 'Торт "Вариант №2"'}, {id: 15, caption: 'Торт "Вариант №3"'},
}

export const maidenSizes: TMaidenSize[] = [
    {id: 1, value: 'тортик 10 на 10 см (на 2 порции)'},
    {id: 2, value: 'тортик 10 на 15 см (на 3 порции)'},
    {id: 3, value: 'торт 15 на 20 см (на 6 порций)'},
    {id: 4, value: 'торт 20 на 20 см (на 8 порций)'},
    {id: 5, value: 'КУПИ 4 ТОРТИКА ОТКРЫТКИ И ПОЛУЧИ ПЯТЫЙ В ПОДАРОК'},
]

export const list: TMaiden[] = [
    {
        id: 1,
        additional: 0,
        maidenType: 1,
        caption: 'Цыпа',
        cover: 'Пасха',
        priceId: 6,
        pictures:
            [{
                x: 'https://static.wixstatic.com/media/201677_b6fe163175804b9a8c9266960b01c1c5~mv2.jpg/v1/fill/w_1280,h_1280,al_c,q_85/201677_b6fe163175804b9a8c9266960b01c1c5~mv2.jpg',
                l: 'https://static.wixstatic.com/media/201677_b6fe163175804b9a8c9266960b01c1c5~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_b6fe163175804b9a8c9266960b01c1c5~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_b6fe163175804b9a8c9266960b01c1c5~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_b6fe163175804b9a8c9266960b01c1c5~mv2.webp',
            }]

    },
    {
        id: 2,
        additional: 0,
        caption: 'Пасха',
        cover: 'Пасха',
        maidenType: 1,
        priceId: 6,
        pictures: [
            {
                x: 'https://static.wixstatic.com/media/201677_7d3eba2d149445328695c51ee583f852~mv2.jpg/v1/fill/w_1280,h_1280,al_c,q_85/201677_7d3eba2d149445328695c51ee583f852~mv2.jpg',
                l: 'https://static.wixstatic.com/media/201677_7d3eba2d149445328695c51ee583f852~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_7d3eba2d149445328695c51ee583f852~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_7d3eba2d149445328695c51ee583f852~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_7d3eba2d149445328695c51ee583f852~mv2.webp',
            }
        ]

    },
    {
        id: 3,
        additional: 1,
        caption: 'Краффин',
        cover: 'Пасха',
        priceId: 4,
        maidenType: 2,
        pictures: [
            {
                s: 'https://static.wixstatic.com/media/201677_5b856b1d44c1451d9fabe694efb32557~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_5b856b1d44c1451d9fabe694efb32557~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_5b856b1d44c1451d9fabe694efb32557~mv2.jpg/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01/201677_5b856b1d44c1451d9fabe694efb32557~mv2.webp',
                p: 'https://static.wixstatic.com/media/201677_5b856b1d44c1451d9fabe694efb32557~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_5b856b1d44c1451d9fabe694efb32557~mv2.webp'
            },
            {
                s: 'https://static.wixstatic.com/media/201677_847f94c5e8ac4f1daefb06ecca8bbe39~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_847f94c5e8ac4f1daefb06ecca8bbe39~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_847f94c5e8ac4f1daefb06ecca8bbe39~mv2.jpg/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01/201677_847f94c5e8ac4f1daefb06ecca8bbe39~mv2.webp',
                p: 'https://static.wixstatic.com/media/201677_847f94c5e8ac4f1daefb06ecca8bbe39~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_847f94c5e8ac4f1daefb06ecca8bbe39~mv2.webp'
            }
        ],
    },
    {
        id: 4,
        additional: 2,
        caption: '',
        cover: 'Пасха',
        maidenType: 2,
        priceId: 4,
        pictures: [
            {
                s: 'https://static.wixstatic.com/media/201677_cd744ca7cb584f31bb528c73b4ae7938~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_cd744ca7cb584f31bb528c73b4ae7938~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_cd744ca7cb584f31bb528c73b4ae7938~mv2.jpg/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01/201677_cd744ca7cb584f31bb528c73b4ae7938~mv2.webp',
                p: 'https://static.wixstatic.com/media/201677_cd744ca7cb584f31bb528c73b4ae7938~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_cd744ca7cb584f31bb528c73b4ae7938~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_cd744ca7cb584f31bb528c73b4ae7938~mv2.jpg/v1/fill/w_576,h_768,al_c,q_85,usm_0.66_1.00_0.01/201677_cd744ca7cb584f31bb528c73b4ae7938~mv2.jpg'
            },
            {
                s: 'https://static.wixstatic.com/media/201677_b3642e75800040a38b3d670b4a9a87bd~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_b3642e75800040a38b3d670b4a9a87bd~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_b3642e75800040a38b3d670b4a9a87bd~mv2.jpg/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01/201677_b3642e75800040a38b3d670b4a9a87bd~mv2.webp',
                p: 'https://static.wixstatic.com/media/201677_b3642e75800040a38b3d670b4a9a87bd~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_b3642e75800040a38b3d670b4a9a87bd~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_b3642e75800040a38b3d670b4a9a87bd~mv2.jpg/v1/fill/w_576,h_768,al_c,q_85,usm_0.66_1.00_0.01/201677_b3642e75800040a38b3d670b4a9a87bd~mv2.jpg'
            }
        ]
    },
    {
        id: 5,
        additional: 3,
        caption: 'Не Яйца',
        cover: 'Пасха',
        priceId: 3,
        maidenType: 4,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_55155bbf4f5f4231a876a5997ab16c17~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_55155bbf4f5f4231a876a5997ab16c17~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_55155bbf4f5f4231a876a5997ab16c17~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_55155bbf4f5f4231a876a5997ab16c17~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_55155bbf4f5f4231a876a5997ab16c17~mv2.jpg/v1/fill/w_1525,h_1525,al_c,q_85/201677_55155bbf4f5f4231a876a5997ab16c17~mv2.jpg'
        }]
    },
    {
        id: 6,
        additional: 3,
        caption: 'Пасха',
        cover: 'Пасха',
        priceId: 3,
        maidenType: 4,
        pictures: [
            {
                s: 'https://static.wixstatic.com/media/201677_15241e48d8794beb8346d3793618f0b9~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_15241e48d8794beb8346d3793618f0b9~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_15241e48d8794beb8346d3793618f0b9~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_15241e48d8794beb8346d3793618f0b9~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_15241e48d8794beb8346d3793618f0b9~mv2.jpg/v1/fill/w_1536,h_1536,al_c,q_85,usm_0.66_1.00_0.01/201677_15241e48d8794beb8346d3793618f0b9~mv2.jpg'
            }
        ]
    },
    {
        id: 7,
        additional: 3,
        caption: 'Кулич',
        cover: 'Пасха',
        priceId: 3,
        maidenType: 4,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_1a6a551578ab4b3facf6047c346b0cec~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_1a6a551578ab4b3facf6047c346b0cec~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_1a6a551578ab4b3facf6047c346b0cec~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_1a6a551578ab4b3facf6047c346b0cec~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_1a6a551578ab4b3facf6047c346b0cec~mv2.jpg/v1/fill/w_1525,h_1525,al_c,q_85/201677_1a6a551578ab4b3facf6047c346b0cec~mv2.jpg'
        }]
    },
    {
        id: 8,
        additional: 3,
        caption: 'Светлой Пасхи',
        cover: 'Пасха',
        priceId: 3,
        maidenType: 4,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_959c6ac1800b464eb4e3c6ccf7129670~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_959c6ac1800b464eb4e3c6ccf7129670~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_959c6ac1800b464eb4e3c6ccf7129670~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_959c6ac1800b464eb4e3c6ccf7129670~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_959c6ac1800b464eb4e3c6ccf7129670~mv2.jpg/v1/fill/w_1525,h_1525,al_c,q_85/201677_959c6ac1800b464eb4e3c6ccf7129670~mv2.jpg'
        }]
    },
    {
        id: 9,
        caption: 'Светлой Пасхи',
        cover: 'Пасха',
        additional: 4,
        priceId: 11,
        maidenType: 5,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_4981d809bb384ca2a4009d41fbf45bd1~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_4981d809bb384ca2a4009d41fbf45bd1~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_4981d809bb384ca2a4009d41fbf45bd1~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_4981d809bb384ca2a4009d41fbf45bd1~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_4981d809bb384ca2a4009d41fbf45bd1~mv2.jpg/v1/fill/w_627,h_649,al_c,q_85/201677_4981d809bb384ca2a4009d41fbf45bd1~mv2.jpg'
        }]
    },
    {
        id: 10,
        caption: 'Цыплята',
        cover: 'Пасха',
        additional: 4,
        maidenType: 5,
        priceId: 11,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_e89f32a0b32e462bb28535b4690dacf2~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_e89f32a0b32e462bb28535b4690dacf2~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_e89f32a0b32e462bb28535b4690dacf2~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_e89f32a0b32e462bb28535b4690dacf2~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_e89f32a0b32e462bb28535b4690dacf2~mv2.jpg/v1/fill/w_639,h_649,al_c,q_85/201677_e89f32a0b32e462bb28535b4690dacf2~mv2.jpg'
        }]
    },
    {
        id: 11,
        caption: 'Яйца',
        cover: 'Пасха',
        additional: 3,
        maidenType: 4,
        priceId: 3,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_53bf3fe476184daea649a80a5a304137~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_53bf3fe476184daea649a80a5a304137~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_53bf3fe476184daea649a80a5a304137~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_53bf3fe476184daea649a80a5a304137~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_53bf3fe476184daea649a80a5a304137~mv2.jpg/v1/fill/w_1525,h_1525,al_c,q_85/201677_53bf3fe476184daea649a80a5a304137~mv2.jpg'
        }]
    },
    {
        id: 12,
        caption: 'Цыплята',
        cover: 'Пасха',
        additional: 3,
        maidenType: 4,
        priceId: 3,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_78d90bfb906841368987889f2077cf7c~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_78d90bfb906841368987889f2077cf7c~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_78d90bfb906841368987889f2077cf7c~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_78d90bfb906841368987889f2077cf7c~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_78d90bfb906841368987889f2077cf7c~mv2.jpg/v1/fill/w_1438,h_1436,al_c,q_85/201677_78d90bfb906841368987889f2077cf7c~mv2.jpg'
        }]
    },
    {
        id: 13,
        caption: 'Кулич акварель',
        cover: 'Пасха',
        additional: 3,
        maidenType: 4,
        priceId: 3,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_e48a22e735534582be4bc6ecec37c2e2~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_e48a22e735534582be4bc6ecec37c2e2~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_e48a22e735534582be4bc6ecec37c2e2~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_e48a22e735534582be4bc6ecec37c2e2~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_e48a22e735534582be4bc6ecec37c2e2~mv2.jpg/v1/fill/w_1536,h_1536,al_c,q_85,usm_0.66_1.00_0.01/201677_e48a22e735534582be4bc6ecec37c2e2~mv2.jpg'
        }]
    },
    {
        id: 14,
        caption: 'С пасхой',
        cover: 'Пасха',
        additional: 3,
        maidenType: 4,
        priceId: 3,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_15241e48d8794beb8346d3793618f0b9~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_15241e48d8794beb8346d3793618f0b9~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_15241e48d8794beb8346d3793618f0b9~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_15241e48d8794beb8346d3793618f0b9~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_15241e48d8794beb8346d3793618f0b9~mv2.jpg/v1/fill/w_1536,h_1536,al_c,q_85,usm_0.66_1.00_0.01/201677_15241e48d8794beb8346d3793618f0b9~mv2.jpg'
        }]
    },
    {
        id: 15,
        caption: 'Зайчики+',
        cover: 'Пасха',
        additional: 3,
        maidenType: 4,
        priceId: 3,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_919093da24644281b0fffe696b0db3a9~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_919093da24644281b0fffe696b0db3a9~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_919093da24644281b0fffe696b0db3a9~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_919093da24644281b0fffe696b0db3a9~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_919093da24644281b0fffe696b0db3a9~mv2.jpg/v1/fill/w_1536,h_1536,al_c,q_85,usm_0.66_1.00_0.01/201677_919093da24644281b0fffe696b0db3a9~mv2.jpg'
        }]
    },
    {
        id: 16,
        caption: 'Зайчики',
        cover: 'Пасха',
        additional: 3,
        maidenType: 4,
        priceId: 3,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_ac61649821f24cbfb1e65a644b287297~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_ac61649821f24cbfb1e65a644b287297~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_ac61649821f24cbfb1e65a644b287297~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_ac61649821f24cbfb1e65a644b287297~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_ac61649821f24cbfb1e65a644b287297~mv2.jpg/v1/fill/w_1536,h_1536,al_c,q_85,usm_0.66_1.00_0.01/201677_ac61649821f24cbfb1e65a644b287297~mv2.jpg'
        }]
    },
    {
        id: 17,
        caption: '',
        cover: '8 марта',
        additional: 5,
        maidenType: 6,
        priceId: 5,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_fd04120eaf4a4e628cb92c46a931c031~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_fd04120eaf4a4e628cb92c46a931c031~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_fd04120eaf4a4e628cb92c46a931c031~mv2.jpg/v1/fill/w_500,h_500,al_c,lg_1,q_85/201677_fd04120eaf4a4e628cb92c46a931c031~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_fd04120eaf4a4e628cb92c46a931c031~mv2.jpg/v1/fill/w_500,h_500,al_c,lg_1,q_85/201677_fd04120eaf4a4e628cb92c46a931c031~mv2.webp'
        }]
    },
    {
        id: 18,
        caption: 'С днем защитника рисунок',
        cover: 'Настоящий мужчина',
        maidenType: 4,
        additional: 3,
        priceId: 3,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_ee436ddf46cc40e49b25ab7ddfb8353b~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_ee436ddf46cc40e49b25ab7ddfb8353b~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_ee436ddf46cc40e49b25ab7ddfb8353b~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_ee436ddf46cc40e49b25ab7ddfb8353b~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_ee436ddf46cc40e49b25ab7ddfb8353b~mv2.jpg/v1/fill/w_1536,h_1536,al_c,q_85,usm_0.66_1.00_0.01/201677_ee436ddf46cc40e49b25ab7ddfb8353b~mv2.jpg'
        }]
    },
    {
        id: 19,
        caption: 'Самый лучший папа',
        cover: 'Настоящий мужчина',
        maidenType: 4,
        additional: 3,
        priceId: 3,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_76d8016e85444a339b2f86a23f46dcb4~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_76d8016e85444a339b2f86a23f46dcb4~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_76d8016e85444a339b2f86a23f46dcb4~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_76d8016e85444a339b2f86a23f46dcb4~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_76d8016e85444a339b2f86a23f46dcb4~mv2.jpg/v1/fill/w_1536,h_1536,al_c,q_85,usm_0.66_1.00_0.01/201677_76d8016e85444a339b2f86a23f46dcb4~mv2.jpg'
        }]
    },
    {
        id: 20,
        caption: 'Папа герой',
        cover: 'Настоящий мужчина',
        maidenType: 4,
        additional: 3,
        priceId: 3,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_a44601a6eb1c46389767f0166c31ffea~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_a44601a6eb1c46389767f0166c31ffea~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_a44601a6eb1c46389767f0166c31ffea~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_a44601a6eb1c46389767f0166c31ffea~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_a44601a6eb1c46389767f0166c31ffea~mv2.jpg/v1/fill/w_1536,h_1536,al_c,q_85,usm_0.66_1.00_0.01/201677_a44601a6eb1c46389767f0166c31ffea~mv2.jpg'
        }]
    },
    {
        id: 21,
        caption: 'Тра-ля-ля',
        cover: 'Настоящий мужчина',
        maidenType: 4,
        additional: 3,
        priceId: 3,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_9422c0a86c4e49618adf0af17f6fc5cb~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_9422c0a86c4e49618adf0af17f6fc5cb~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_9422c0a86c4e49618adf0af17f6fc5cb~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_9422c0a86c4e49618adf0af17f6fc5cb~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_9422c0a86c4e49618adf0af17f6fc5cb~mv2.jpg/v1/fill/w_1536,h_1536,al_c,q_85,usm_0.66_1.00_0.01/201677_9422c0a86c4e49618adf0af17f6fc5cb~mv2.jpg'
        }]
    },
    {
        id: 22,
        caption: 'С любовью', maidenType: 4, additional: 3,
        priceId: 3,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_fb2fcb66a3e0412890b6d94f4c6f91d3~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_fb2fcb66a3e0412890b6d94f4c6f91d3~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_fb2fcb66a3e0412890b6d94f4c6f91d3~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_fb2fcb66a3e0412890b6d94f4c6f91d3~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_fb2fcb66a3e0412890b6d94f4c6f91d3~mv2.jpg/v1/fill/w_1443,h_1443,al_c,q_85/201677_fb2fcb66a3e0412890b6d94f4c6f91d3~mv2.jpg'
        }]
    },
    {
        id: 23, caption: 'Ты сдесь', maidenType: 4, additional: 3,
        cover: 'Любовь',
        priceId: 3,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_4961549f24e44a56a1179a3dc045ed6d~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_4961549f24e44a56a1179a3dc045ed6d~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_4961549f24e44a56a1179a3dc045ed6d~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_4961549f24e44a56a1179a3dc045ed6d~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_4961549f24e44a56a1179a3dc045ed6d~mv2.jpg/v1/fill/w_1443,h_1443,al_c,q_85/201677_4961549f24e44a56a1179a3dc045ed6d~mv2.jpg'
        }]
    },
    {
        id: 24, caption: 'Обнимашки', maidenType: 4, additional: 3,
        cover: 'Любовь',
        priceId: 3,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_ca50c020ca1c41b99d09b776d4b7c9fa~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_ca50c020ca1c41b99d09b776d4b7c9fa~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_ca50c020ca1c41b99d09b776d4b7c9fa~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_ca50c020ca1c41b99d09b776d4b7c9fa~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_ca50c020ca1c41b99d09b776d4b7c9fa~mv2.jpg/v1/fill/w_1554,h_1554,al_c,q_85,usm_0.66_1.00_0.01/201677_ca50c020ca1c41b99d09b776d4b7c9fa~mv2.jpg'
        }]
    },
    {
        id: 25,
        caption: 'Ладно, ты победил',
        cover: 'Любовь',
        maidenType: 4,
        additional: 3,
        priceId: 3,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_a0ddf31270d24f69a4ac16476d42627c~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_a0ddf31270d24f69a4ac16476d42627c~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_a0ddf31270d24f69a4ac16476d42627c~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_a0ddf31270d24f69a4ac16476d42627c~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_a0ddf31270d24f69a4ac16476d42627c~mv2.jpg/v1/fill/w_1080,h_1080,al_c,q_85/201677_a0ddf31270d24f69a4ac16476d42627c~mv2.jpg'
        }]
    },
    {
        id: 26,
        caption: 'Давай будем вместе',
        cover: 'Любовь',
        maidenType: 4,
        additional: 3,
        priceId: 3,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_a1ed58c1544942fb95771ad2849faa2d~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_a1ed58c1544942fb95771ad2849faa2d~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_a1ed58c1544942fb95771ad2849faa2d~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_a1ed58c1544942fb95771ad2849faa2d~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_a1ed58c1544942fb95771ad2849faa2d~mv2.jpg/v1/fill/w_1443,h_1443,al_c,q_85/201677_a1ed58c1544942fb95771ad2849faa2d~mv2.jpg'
        }]
    },
    {
        id: 27,
        caption: '',
        cover: 'Новый год',
        maidenType: 8,
        additional: 5,
        priceId: 8,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_c7e4f2ad1cf94f9aae1829d472d00d97f002.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_c7e4f2ad1cf94f9aae1829d472d00d97f002.webp',
            l: 'https://static.wixstatic.com/media/201677_c7e4f2ad1cf94f9aae1829d472d00d97f002.jpg/v1/fill/w_500,h_500,al_c,q_50,usm_0.66_1.00_0.01/201677_c7e4f2ad1cf94f9aae1829d472d00d97f002.jpg'
        }]

    },
    {
        id: 28, caption: '',
        cover: 'Торт на заказ',
        maidenType: 9, additional: 5,
        priceId: 9,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_6fb469f79eb04c43868ec3d7562cf4b0~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_6fb469f79eb04c43868ec3d7562cf4b0~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_6fb469f79eb04c43868ec3d7562cf4b0~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_6fb469f79eb04c43868ec3d7562cf4b0~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_6fb469f79eb04c43868ec3d7562cf4b0~mv2.jpg/v1/fill/w_1199,h_1215,al_c,q_85/201677_6fb469f79eb04c43868ec3d7562cf4b0~mv2.jpg'
        }]
    },
    {
        id: 29, caption: '', maidenType: 7, additional: 5,
        cover: 'Торт на заказ',
        priceId: 10,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_ee23fa2124964874816db7823d4f2aed~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_ee23fa2124964874816db7823d4f2aed~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_ee23fa2124964874816db7823d4f2aed~mv2.jpg/v1/fill/w_500,h_375,al_c,q_85,usm_0.66_1.00_0.01/201677_ee23fa2124964874816db7823d4f2aed~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_ee23fa2124964874816db7823d4f2aed~mv2.jpg/v1/fill/w_1800,h_1554,al_c,q_85,usm_0.66_1.00_0.01/201677_ee23fa2124964874816db7823d4f2aed~mv2.jpg'
        }]
    },
    {
        id: 30, caption: '', maidenType: 10, additional: 5,
        cover: 'Торт на заказ',
        priceId: 10,
        pictures: [{
            s: 'https://static.wixstatic.com/media/201677_817d92f9d596435391b2c2ebe2338565~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_817d92f9d596435391b2c2ebe2338565~mv2.webp',
            l: 'https://static.wixstatic.com/media/201677_817d92f9d596435391b2c2ebe2338565~mv2.jpg/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01/201677_817d92f9d596435391b2c2ebe2338565~mv2.webp',
            x: 'https://static.wixstatic.com/media/201677_817d92f9d596435391b2c2ebe2338565~mv2.jpg/v1/fill/w_1166,h_1554,al_c,q_85,usm_0.66_1.00_0.01/201677_817d92f9d596435391b2c2ebe2338565~mv2.jpg'
        }]
    },
    {
        id: 31, caption: '', maidenType: 12, cover: 'Новый год', additional: 12, priceId: 1, pictures: [
            {
                p: 'https://static.wixstatic.com/media/201677_8e64d99669a84b73a6dd12164cac5530~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_8e64d99669a84b73a6dd12164cac5530~mv2.webp',
                s: "https://static.wixstatic.com/media/201677_8e64d99669a84b73a6dd12164cac5530~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/201677_8e64d99669a84b73a6dd12164cac5530~mv2.webp",
                l: 'https://static.wixstatic.com/media/201677_01e8c9f759d04d828e3e6dff5d3b3708~mv2.jpg/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01/201677_01e8c9f759d04d828e3e6dff5d3b3708~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_01e8c9f759d04d828e3e6dff5d3b3708~mv2.jpg/v1/fill/w_583,h_777,al_c,q_85,usm_0.66_1.00_0.01/201677_01e8c9f759d04d828e3e6dff5d3b3708~mv2.jpg'
            },
            {
                p: 'https://static.wixstatic.com/media/201677_8e64d99669a84b73a6dd12164cac5530~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_8e64d99669a84b73a6dd12164cac5530~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_8e64d99669a84b73a6dd12164cac5530~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_8e64d99669a84b73a6dd12164cac5530~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_8e64d99669a84b73a6dd12164cac5530~mv2.jpg/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01/201677_8e64d99669a84b73a6dd12164cac5530~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_8e64d99669a84b73a6dd12164cac5530~mv2.jpg/v1/fill/w_583,h_777,al_c,q_85,usm_0.66_1.00_0.01/201677_8e64d99669a84b73a6dd12164cac5530~mv2.jpg'
            },
            {
                p: 'https://static.wixstatic.com/media/201677_4c25aed0055c4f0394755b9b425ce6bb~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_4c25aed0055c4f0394755b9b425ce6bb~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_4c25aed0055c4f0394755b9b425ce6bb~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_4c25aed0055c4f0394755b9b425ce6bb~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_4c25aed0055c4f0394755b9b425ce6bb~mv2.jpg/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01/201677_4c25aed0055c4f0394755b9b425ce6bb~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_4c25aed0055c4f0394755b9b425ce6bb~mv2.jpg/v1/fill/w_583,h_777,al_c,q_85,usm_0.66_1.00_0.01/201677_4c25aed0055c4f0394755b9b425ce6bb~mv2.jpg',
            },
            {
                p: 'https://static.wixstatic.com/media/201677_a6c9394a7257417ba9bfc615b348ff58~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_a6c9394a7257417ba9bfc615b348ff58~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_a6c9394a7257417ba9bfc615b348ff58~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_a6c9394a7257417ba9bfc615b348ff58~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_a6c9394a7257417ba9bfc615b348ff58~mv2.jpg/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01/201677_a6c9394a7257417ba9bfc615b348ff58~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_a6c9394a7257417ba9bfc615b348ff58~mv2.jpg/v1/fill/w_583,h_777,al_c,q_85,usm_0.66_1.00_0.01/201677_a6c9394a7257417ba9bfc615b348ff58~mv2.jpg'
            }
        ]
    },
    {
        id: 32, caption: 'Вариант №3', priceId: 7, maidenType: 13, additional: 13, cover: 'Торт за день',
        pictures: [
            {
                p: 'https://static.wixstatic.com/media/201677_31f5219820c2449ca4f02f254d274c6f~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_31f5219820c2449ca4f02f254d274c6f~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_31f5219820c2449ca4f02f254d274c6f~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_31f5219820c2449ca4f02f254d274c6f~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_31f5219820c2449ca4f02f254d274c6f~mv2.jpg/v1/fill/w_500,h_750,al_c,q_85,usm_0.66_1.00_0.01/201677_31f5219820c2449ca4f02f254d274c6f~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_31f5219820c2449ca4f02f254d274c6f~mv2.jpg/v1/fill/w_453,h_777,al_c,q_85,usm_0.66_1.00_0.01/201677_31f5219820c2449ca4f02f254d274c6f~mv2.jpg'
            },
            {
                p: 'https://static.wixstatic.com/media/201677_abbbe079798b4f29a5536cd492a183c2~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_abbbe079798b4f29a5536cd492a183c2~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_abbbe079798b4f29a5536cd492a183c2~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_abbbe079798b4f29a5536cd492a183c2~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_abbbe079798b4f29a5536cd492a183c2~mv2.jpg/v1/fill/w_500,h_750,al_c,q_85,usm_0.66_1.00_0.01/201677_abbbe079798b4f29a5536cd492a183c2~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_abbbe079798b4f29a5536cd492a183c2~mv2.jpg/v1/fill/w_777,h_777,al_c,q_85,usm_0.66_1.00_0.01/201677_abbbe079798b4f29a5536cd492a183c2~mv2.jpg'
            },
            {
                p: 'https://static.wixstatic.com/media/201677_f5f5c642021f4db1aa138e3d33475529~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_f5f5c642021f4db1aa138e3d33475529~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_f5f5c642021f4db1aa138e3d33475529~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_f5f5c642021f4db1aa138e3d33475529~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_f5f5c642021f4db1aa138e3d33475529~mv2.jpg/v1/fill/w_500,h_750,al_c,q_85,usm_0.66_1.00_0.01/201677_f5f5c642021f4db1aa138e3d33475529~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_f5f5c642021f4db1aa138e3d33475529~mv2.jpg/v1/fill/w_1036,h_777,al_c,q_85,usm_0.66_1.00_0.01/201677_f5f5c642021f4db1aa138e3d33475529~mv2.jpg'
            },
            {
                p: 'https://static.wixstatic.com/media/201677_d3f31ed8f798473fa39c4261d09b0d5e~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_d3f31ed8f798473fa39c4261d09b0d5e~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_d3f31ed8f798473fa39c4261d09b0d5e~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_d3f31ed8f798473fa39c4261d09b0d5e~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_d3f31ed8f798473fa39c4261d09b0d5e~mv2.jpg/v1/fill/w_500,h_750,al_c,q_85,usm_0.66_1.00_0.01/201677_d3f31ed8f798473fa39c4261d09b0d5e~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_d3f31ed8f798473fa39c4261d09b0d5e~mv2.jpg/v1/fill/w_1036,h_777,al_c,q_85,usm_0.66_1.00_0.01/201677_d3f31ed8f798473fa39c4261d09b0d5e~mv2.jpg'
            }
        ]
    },
    {
        id: 33, caption: 'Вариант №2', priceId: 7, maidenType: 13, additional: 13, cover: 'Торт за день',
        pictures: [
            {
                p: 'https://static.wixstatic.com/media/201677_178bf40c07ab483dbfa3a88627b2d98a~mv2.jpg/v1/fill/w_45,h_45,al_c,lg_1,q_85/201677_178bf40c07ab483dbfa3a88627b2d98a~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_178bf40c07ab483dbfa3a88627b2d98a~mv2.jpg/v1/fill/w_225,h_225,al_c,lg_1,q_85/201677_178bf40c07ab483dbfa3a88627b2d98a~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_31f5219820c2449ca4f02f254d274c6f~mv2.jpg/v1/fill/w_500,h_750,al_c,q_85,usm_0.66_1.00_0.01/201677_31f5219820c2449ca4f02f254d274c6f~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_178bf40c07ab483dbfa3a88627b2d98a~mv2.jpg/v1/fill/w_454,h_671,al_c,q_85/201677_178bf40c07ab483dbfa3a88627b2d98a~mv2.jpg'
            },
            {
                p: 'https://static.wixstatic.com/media/201677_e224e74bb0f646f98d931e555de873ac~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_e224e74bb0f646f98d931e555de873ac~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_e224e74bb0f646f98d931e555de873ac~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_e224e74bb0f646f98d931e555de873ac~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_e224e74bb0f646f98d931e555de873ac~mv2.jpg/v1/fill/w_500,h_750,al_c,q_85,usm_0.66_1.00_0.01/201677_e224e74bb0f646f98d931e555de873ac~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_e224e74bb0f646f98d931e555de873ac~mv2.jpg/v1/fill/w_621,h_777,al_c,q_85,usm_0.66_1.00_0.01/201677_e224e74bb0f646f98d931e555de873ac~mv2.jpg'
            },
            {
                p: 'https://static.wixstatic.com/media/201677_d17d16c9d6de4defa5ce18941d8ba3a3~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_d17d16c9d6de4defa5ce18941d8ba3a3~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_d17d16c9d6de4defa5ce18941d8ba3a3~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_d17d16c9d6de4defa5ce18941d8ba3a3~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_d17d16c9d6de4defa5ce18941d8ba3a3~mv2.jpg/v1/fill/w_500,h_750,al_c,q_85,usm_0.66_1.00_0.01/201677_d17d16c9d6de4defa5ce18941d8ba3a3~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_d17d16c9d6de4defa5ce18941d8ba3a3~mv2.jpg/v1/fill/w_777,h_777,al_c,q_85,usm_0.66_1.00_0.01/201677_d17d16c9d6de4defa5ce18941d8ba3a3~mv2.jpg'
            },
            {
                p: 'https://static.wixstatic.com/media/201677_eea7fcee439548dbb73e8562d26063a2~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_eea7fcee439548dbb73e8562d26063a2~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_eea7fcee439548dbb73e8562d26063a2~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_eea7fcee439548dbb73e8562d26063a2~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_eea7fcee439548dbb73e8562d26063a2~mv2.jpg/v1/fill/w_500,h_750,al_c,q_85,usm_0.66_1.00_0.01/201677_eea7fcee439548dbb73e8562d26063a2~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_eea7fcee439548dbb73e8562d26063a2~mv2.jpg/v1/fill/w_659,h_777,al_c,q_85,usm_0.66_1.00_0.01/201677_eea7fcee439548dbb73e8562d26063a2~mv2.jpg'
            }
        ]
    },
    {
        id: 34, caption: 'Вариант №1', priceId: 7, maidenType: 13, additional: 13, cover: 'Торт за день',
        pictures: [
            {
                p: 'https://static.wixstatic.com/media/201677_eaa961c60002439e8610eb2a2754da24~mv2.jpeg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_eaa961c60002439e8610eb2a2754da24~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_eaa961c60002439e8610eb2a2754da24~mv2.jpeg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_eaa961c60002439e8610eb2a2754da24~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_eaa961c60002439e8610eb2a2754da24~mv2.jpeg/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01/201677_eaa961c60002439e8610eb2a2754da24~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_eaa961c60002439e8610eb2a2754da24~mv2.jpeg/v1/fill/w_583,h_777,al_c,q_85,usm_0.66_1.00_0.01/201677_eaa961c60002439e8610eb2a2754da24~mv2.jpeg'
            },
            {
                p: 'https://static.wixstatic.com/media/201677_807272c75e8c4daa81af96f21a86c299~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_807272c75e8c4daa81af96f21a86c299~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_807272c75e8c4daa81af96f21a86c299~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_807272c75e8c4daa81af96f21a86c299~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_807272c75e8c4daa81af96f21a86c299~mv2.jpg/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01/201677_807272c75e8c4daa81af96f21a86c299~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_807272c75e8c4daa81af96f21a86c299~mv2.jpg/v1/fill/w_583,h_777,al_c,q_85,usm_0.66_1.00_0.01/201677_807272c75e8c4daa81af96f21a86c299~mv2.jpg'
            }
        ]
    },
    {
        id: 35, caption: 'Печенька', priceId: 2, maidenType: 4, additional: 3, cover: 'Печенька', pictures: [
            {
                p: 'https://static.wixstatic.com/media/201677_7e0a333dd2604f2cbe43d217296a87a6~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_7e0a333dd2604f2cbe43d217296a87a6~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_7e0a333dd2604f2cbe43d217296a87a6~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_7e0a333dd2604f2cbe43d217296a87a6~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_7e0a333dd2604f2cbe43d217296a87a6~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_7e0a333dd2604f2cbe43d217296a87a6~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_7e0a333dd2604f2cbe43d217296a87a6~mv2.jpg/v1/fill/w_624,h_624,al_c,lg_1,q_85/201677_7e0a333dd2604f2cbe43d217296a87a6~mv2.jpg'
            }
        ]
    },
    {
        id: 36, caption: 'Здоровье 1', priceId: 2, maidenType: 4, additional: 3, cover: '', pictures: [
            {
                p: 'https://static.wixstatic.com/media/201677_3e8e6771e30a488bad8ce479ae486ddd~mv2.jpg/v1/fill/w_45,h_45,al_c,lg_1,q_85/201677_3e8e6771e30a488bad8ce479ae486ddd~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_3e8e6771e30a488bad8ce479ae486ddd~mv2.jpg/v1/fill/w_225,h_225,al_c,lg_1,q_85/201677_3e8e6771e30a488bad8ce479ae486ddd~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_3e8e6771e30a488bad8ce479ae486ddd~mv2.jpg/v1/fill/w_500,h_500,al_c,lg_1,q_85/201677_3e8e6771e30a488bad8ce479ae486ddd~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_3e8e6771e30a488bad8ce479ae486ddd~mv2.jpg/v1/fill/w_624,h_587,al_c,lg_1,q_85/201677_3e8e6771e30a488bad8ce479ae486ddd~mv2.jpg'
            }
        ]
    },
    {
        id: 37, caption: 'Корги', priceId: 2, maidenType: 4, additional: 3, cover: '', pictures: [
            {
                p: 'https://static.wixstatic.com/media/201677_5c0087899d9645b7a643743f48067114~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_5c0087899d9645b7a643743f48067114~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_5c0087899d9645b7a643743f48067114~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_5c0087899d9645b7a643743f48067114~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_5c0087899d9645b7a643743f48067114~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_5c0087899d9645b7a643743f48067114~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_5c0087899d9645b7a643743f48067114~mv2.jpg/v1/fill/w_624,h_624,al_c,lg_1,q_85/201677_5c0087899d9645b7a643743f48067114~mv2.jpg'
            }
        ]
    },
    {
        id: 38, caption: 'Сердце', priceId: 2, maidenType: 4, additional: 3, cover: '', pictures: [
            {
                p: 'https://static.wixstatic.com/media/201677_0479466911d4439aa705fd42465344f5~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_0479466911d4439aa705fd42465344f5~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_0479466911d4439aa705fd42465344f5~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_0479466911d4439aa705fd42465344f5~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_0479466911d4439aa705fd42465344f5~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_0479466911d4439aa705fd42465344f5~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_0479466911d4439aa705fd42465344f5~mv2.jpg/v1/fill/w_624,h_624,al_c,lg_1,q_85/201677_0479466911d4439aa705fd42465344f5~mv2.jpg'
            }
        ]
    },
    {
        id: 39, caption: 'Большой ложкой', priceId: 2, maidenType: 4, additional: 3, cover: '', pictures: [
            {
                p: 'https://static.wixstatic.com/media/201677_ef57fea452874253abf31249f58f0701~mv2.jpg/v1/fill/w_45,h_45,al_c,lg_1,q_85/201677_ef57fea452874253abf31249f58f0701~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_ef57fea452874253abf31249f58f0701~mv2.jpg/v1/fill/w_225,h_225,al_c,lg_1,q_85/201677_ef57fea452874253abf31249f58f0701~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_ef57fea452874253abf31249f58f0701~mv2.jpg/v1/fill/w_500,h_500,al_c,lg_1,q_85/201677_ef57fea452874253abf31249f58f0701~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_ef57fea452874253abf31249f58f0701~mv2.jpg/v1/fill/w_624,h_587,al_c,lg_1,q_85/201677_ef57fea452874253abf31249f58f0701~mv2.jpg'
            }
        ]
    },
    {
        id: 40, caption: 'Вишенка', priceId: 2, maidenType: 4, additional: 3, cover: 'Гламурр', pictures: [
            {
                p: 'https://static.wixstatic.com/media/201677_bae3f833bf7d41aa9a39ab3e0c46f144~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_bae3f833bf7d41aa9a39ab3e0c46f144~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_bae3f833bf7d41aa9a39ab3e0c46f144~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_bae3f833bf7d41aa9a39ab3e0c46f144~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_bae3f833bf7d41aa9a39ab3e0c46f144~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_bae3f833bf7d41aa9a39ab3e0c46f144~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_bae3f833bf7d41aa9a39ab3e0c46f144~mv2.jpg/v1/fill/w_624,h_624,al_c,lg_1,q_85/201677_bae3f833bf7d41aa9a39ab3e0c46f144~mv2.jpg'
            }
        ]
    },
    {
        id: 41, caption: 'Не грустии', priceId: 2, maidenType: 4, additional: 3, cover: 'Гламурр', pictures: [
            {
                p: 'https://static.wixstatic.com/media/201677_2922cb8c09fa4d1fad05a181ee1d1064~mv2.jpg/v1/fill/w_45,h_45,al_c,lg_1,q_85/201677_2922cb8c09fa4d1fad05a181ee1d1064~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_2922cb8c09fa4d1fad05a181ee1d1064~mv2.jpg/v1/fill/w_225,h_225,al_c,lg_1,q_85/201677_2922cb8c09fa4d1fad05a181ee1d1064~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_2922cb8c09fa4d1fad05a181ee1d1064~mv2.jpg/v1/fill/w_500,h_500,al_c,lg_1,q_85/201677_2922cb8c09fa4d1fad05a181ee1d1064~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_2922cb8c09fa4d1fad05a181ee1d1064~mv2.jpg/v1/fill/w_624,h_587,al_c,lg_1,q_85/201677_2922cb8c09fa4d1fad05a181ee1d1064~mv2.jpg'
            }
        ]
    },
    {
        id: 42, caption: 'Ты просто класс', priceId: 2, maidenType: 4, additional: 3, cover: 'Гламурр', pictures: [
            {
                p: 'https://static.wixstatic.com/media/201677_dec850f03fd641dba3d99350e52dc68f~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_dec850f03fd641dba3d99350e52dc68f~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_dec850f03fd641dba3d99350e52dc68f~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_dec850f03fd641dba3d99350e52dc68f~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_dec850f03fd641dba3d99350e52dc68f~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_dec850f03fd641dba3d99350e52dc68f~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_dec850f03fd641dba3d99350e52dc68f~mv2.jpg/v1/fill/w_624,h_624,al_c,lg_1,q_85/201677_dec850f03fd641dba3d99350e52dc68f~mv2.jpg'
            }
        ]
    },
    {
        id: 43, caption: 'Кошечка с ДР', priceId: 2, maidenType: 4, additional: 3, cover: 'Гламурр', pictures: [
            {
                p: 'https://static.wixstatic.com/media/201677_e1113030ee1d44f389a07edded6f6a14~mv2.jpg/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/201677_e1113030ee1d44f389a07edded6f6a14~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_e1113030ee1d44f389a07edded6f6a14~mv2.jpg/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/201677_e1113030ee1d44f389a07edded6f6a14~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_e1113030ee1d44f389a07edded6f6a14~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/201677_e1113030ee1d44f389a07edded6f6a14~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_e1113030ee1d44f389a07edded6f6a14~mv2.jpg/v1/fill/w_624,h_624,al_c,lg_1,q_85/201677_e1113030ee1d44f389a07edded6f6a14~mv2.jpg'
            }
        ]
    },
    {
        id: 44, caption: 'Здоровье', priceId: 2, maidenType: 4, additional: 3, cover: 'Гламурр', pictures: [
            {
                p: 'https://static.wixstatic.com/media/201677_d8a63946ee844428b32b9851aea11c80~mv2.jpg/v1/fill/w_45,h_45,al_c,lg_1,q_85/201677_d8a63946ee844428b32b9851aea11c80~mv2.webp',
                s: 'https://static.wixstatic.com/media/201677_d8a63946ee844428b32b9851aea11c80~mv2.jpg/v1/fill/w_225,h_225,al_c,lg_1,q_85/201677_d8a63946ee844428b32b9851aea11c80~mv2.webp',
                l: 'https://static.wixstatic.com/media/201677_d8a63946ee844428b32b9851aea11c80~mv2.jpg/v1/fill/w_500,h_500,al_c,lg_1,q_85/201677_d8a63946ee844428b32b9851aea11c80~mv2.webp',
                x: 'https://static.wixstatic.com/media/201677_d8a63946ee844428b32b9851aea11c80~mv2.jpg/v1/fill/w_624,h_587,al_c,lg_1,q_85/201677_d8a63946ee844428b32b9851aea11c80~mv2.jpg'
            }
        ]
    }
];


export const getById = (id: number): TMaiden => {
    return list.filter(item => item.id === +id)[0]
}

export const getTypeById = (id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 13): string => maidenTypes[id]

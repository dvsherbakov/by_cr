import {Dispatch, SetStateAction} from "react";


export type basketContextType = {
    selectedItems: string[]
    setItems: Dispatch<SetStateAction<string[]>>
}

export type DtxCakeType = {
    id: string;
    caption: string;
    url: string;
    section: number;
}

export type TPrice = {
    id: number;
    price: number[]
}

export type MaidenType = {
    id: number;
    caption: string;
}

export type TPictureLinks = {
    x?: string;
    l?: string;
    s?: string;
    p?: string;
}

export type TMaiden = {
    id: number;
    maidenType: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 13;
    additional: 0 | 1 | 2 | 3 | 4 | 5 | 12| 13;
    caption: string;
    priceId?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    cover?: string;
    pictures: TPictureLinks[]
}

export type TMaidenSize = {
    id: number;
    value: string;
}

export type sizes = {
    id: string;
    sectionId: number;
    sizeName: string;
}

export type CakePageProps = {
    cakes: DtxCakeType[]
}

export type CatalogPageProps = {
    catalog: TMaiden[],
    prices: TPrice[],
    types: MaidenType[]

}

export type CakeItemPageProps = {
    cake: DtxCakeType
    selected?: boolean
    changeState: (id: string) => void
}

export type BasketProps = {
    close: Dispatch<SetStateAction<void>>
    setItems: Dispatch<SetStateAction<string[]>>
    items: DtxCakeType[]
    ids: string[]
}

export type OrderListProps = {
    items: DtxCakeType[]
}

export type OrderItemProps = {
    item: DtxCakeType;
}
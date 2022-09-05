import {basketContextType} from "../../types/types";
import {createContext, ReactNode, useContext, useState} from "react";

const authContextDefaultValues: basketContextType = {
    selectedItems: [],
    setItems: () => {
    }
};

const BasketContext = createContext<basketContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(BasketContext);
}

type Props = {
    children: ReactNode;
};

export function BasketProvider({children}: Props) {
    const [items, setItems] = useState<string[]>([])
    const value = {
        selectedItems: items,
        setItems
    }
    return (
        <>
            <BasketContext.Provider value={value}>
                {children}
            </BasketContext.Provider>
        </>
    );
}

export function useBasket() {
    return useContext(BasketContext);
}
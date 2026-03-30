import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useSet } from "react-use";
import qs from "qs";

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

interface QueryFilters extends PriceProps{
    ingredinets: string;
    pizzaTypes: string;
    sizes: string;
}

export interface Filters {
    prices: PriceProps;
    selectedIngredinets: Set<string>;
    pizzaTypes: Set<string>;
    sizes: Set<string>;
}

interface ReturnProps extends Filters {
    setPrices: (name: keyof PriceProps, value: number) => void;
    setSizes: (id: string) => void;
    setPizzaTypes: (id: string) => void;
    setSelectedIngredinets: (id: string) => void;
}

export const useFilters = (): ReturnProps => {

    const router = useRouter();
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

    // Фильтр ингредиентов
    const [selectedIngredinets, { toggle: toggleIngredients }] = useSet(new Set<string>(searchParams.get('ingredinets')?.split(',')));

    // Фильтр размеров
    const [sizes, {toggle: toggleSizes}] = useSet(new Set<string>(
        searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') : [])
    )
    const [pizzaTypes, {toggle: togglePizzaTypes}] = useSet(new Set<string>(
        searchParams.get('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : [])
    )

    // Фильтр цены
    const [prices, setPrices] = React.useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined
    })

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrices((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return {
        sizes,
        pizzaTypes,
        selectedIngredinets,
        prices,
        setPrices: updatePrice,
        setPizzaTypes: togglePizzaTypes,
        setSizes: toggleSizes,
        setSelectedIngredinets: toggleIngredients
    }
}
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { IProduct } from '@/models/IProduct';
import { addItem, decCount, incCount, removeItem } from '@/redux/reducers/cartSlice';
import React from 'react'

export default function ShoppingCart() {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector(state => state.cartReducer);

    const test: IProduct = {
        "id": 7,
        "title": "test1",
        "price": 500,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "hhhhh",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    }

    const test1: IProduct = {
        "id": 8,
        "title": "test2",
        "price": 10000,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "hhhhh",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    }

    return (
        <div>
            {items.map(item => (
                <div>
                    {item.item.title}
                    {item.count}
                    <button onClick={() => dispatch(removeItem(item.item))}> Remove </button>
                    <button onClick={() => dispatch(incCount(item.item))}> + </button>
                    <button onClick={() => dispatch(decCount(item.item))}> - </button>

                </div>
            ))}
            <button onClick={() => dispatch(addItem(test))}> Add Item </button>
            <button onClick={() => dispatch(addItem(test1))}> Add Item </button>

        </div>
    );
};
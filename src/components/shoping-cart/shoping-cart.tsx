import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { decCount, incCount, removeItem } from '@/redux/reducers/cartSlice';
import React from 'react'

export default function ShoppingCart() {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector(state => state.cartReducer);

    return (
        <div>
            {items.map(item => (
                <div key={item.item.id}>
                    {item.item.id}
                    {item.item.title}
                    {item.count}
                    <button onClick={() => dispatch(removeItem(item.item))}> Remove </button>
                    <button onClick={() => dispatch(incCount(item.item))}> + </button>
                    <button onClick={() => dispatch(decCount(item.item))}> - </button>
                </div>
            ))}
        </div>
    );
};
import { ICart } from "@/models/ICart";
import { ICartItem } from "@/models/ICartItem";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface cartState {
    items: ICartItem[];
    isLoading: boolean;
    error: string;
}

const initialState: cartState = {
    items: [],
    isLoading: false,
    error: '',
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        setItemInCart: (state, action: PayloadAction<ICartItem>) => {
            state.items.push(action.payload)
        },
        deleteItemFromCart: (state, action: PayloadAction<ICartItem>) => {
            state.items = state.items.filter(CartItem => CartItem.item.id !== action.payload.item.id)
        },
    }
})

export default cartSlice.reducer;
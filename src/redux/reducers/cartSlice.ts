import { ICartItem } from '@/models/ICartItem';
import { IProduct } from '@/models/IProduct';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
    items: ICartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<IProduct>) => {
            const newItem: ICartItem = { item: action.payload, count: 1 };
            const itemIndex = state.items.findIndex(item => item.item.id === action.payload.id);
            if (itemIndex < 0)
                state.items.push(newItem);            
        },
        removeItem: (state, action: PayloadAction<IProduct>) => {
            state.items = state.items.filter(item => item.item.id !== action.payload.id);
        },
        incCount: (state, action: PayloadAction<IProduct>) => {
            const itemIndex = state.items.findIndex(item => item.item.id === action.payload.id);
            const count = state.items[itemIndex].count;
            if (count < 100) {
                state.items[itemIndex].count = count + 1;
            }
        },
        decCount: (state, action: PayloadAction<IProduct>) => {
            const itemIndex = state.items.findIndex(item => item.item.id === action.payload.id);
            const count = state.items[itemIndex].count;
            if (count > 1) {
                state.items[itemIndex].count = count - 1;
            }
        }
    },
});

export const { addItem, removeItem, incCount, decCount } = cartSlice.actions;
export default cartSlice.reducer;

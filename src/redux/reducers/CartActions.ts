import { ICartItem } from "@/models/ICartItem";
import { AppDispatch } from "../store";
import { cartSlice } from "./CartSlice";

export const addToCart = (item: ICartItem) => async (dispatch: AppDispatch) => {
    try {
        dispatch(cartSlice.actions.setItemInCart(item))
    } catch (e: any) {
        console.log(e)
    }
}
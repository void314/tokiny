import ky from "ky";
import { AppDispatch } from "../store";
import { IUser } from "@/models/IUser";
import { userSlice } from "./UserSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const users : IUser[] = await ky
        .get('https://jsonplaceholder.typicode.com/users')
        .json();

        dispatch(userSlice.actions.usersFetchingSuccess(users))

    } catch (e : any) {
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}
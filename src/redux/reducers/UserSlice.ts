import { IUser } from "@/models/IUser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: userState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true;

        },
        usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload
            
        },
        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
            
        },
    },
})

export default userSlice.reducer;
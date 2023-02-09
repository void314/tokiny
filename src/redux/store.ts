import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userAPI } from "@/services/UserService";
import { productAPI } from "@/services/ProductService";

const rootReducer = combineReducers({
    [userAPI.reducerPath]: userAPI.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(userAPI.middleware, productAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export const store = setupStore();
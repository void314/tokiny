import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAPI } from "@/services/UserService";
import { productAPI } from "@/services/ProductService";
import cartReducer from "./reducers/cartSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    [userAPI.reducerPath]: userAPI.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
    cartReducer
})

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: [userAPI.reducerPath, productAPI.reducerPath],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(userAPI.middleware, productAPI.middleware),
})

export const setupStore = () => {
    return store
}

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
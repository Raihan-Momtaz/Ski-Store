import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import counterReducer, { counterSlice } from "../../features/contact/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../features/catalog/catalogApi";
import { uiSlice } from "../layout/uiSlice";
import { errorAPi } from "../../features/about/errorApi";
import { basketApi } from "../../features/basket/basketApi";
import { catalogSlice } from "../../features/catalog/catalogSlice";
import { accountApi } from "../../features/account/accountApi";


export function configureTheStore(){
    return legacy_createStore(counterReducer)
}

export const store = configureStore({
    reducer:{
        [catalogApi.reducerPath]: catalogApi.reducer,
        [errorAPi.reducerPath]:errorAPi.reducer,
        [basketApi.reducerPath]:basketApi.reducer,
        [accountApi.reducerPath]:accountApi.reducer,
        counter: counterSlice.reducer,
        ui: uiSlice.reducer,
        catalog:catalogSlice.reducer

    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            basketApi.middleware,
            catalogApi.middleware, 
            errorAPi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
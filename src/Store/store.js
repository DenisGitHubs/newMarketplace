import { configureStore } from "@reduxjs/toolkit";
import { ads } from './RTKQuery/getAds'
import { me } from './RTKQuery/getMe'
import { userToken } from "./RTKQuery/getToken";
import userReducer from "./Slices/userSlice";
import  productsReducer  from "./Slices/dataProductsSlice";
export const store = configureStore({
    reducer: {
        products: productsReducer,
        user: userReducer,
        [ads.reducerPath]: ads.reducer,
        [me.reducerPath]: me.reducer,
        [userToken.reducerPath]: userToken.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(ads.middleware).concat(me.middleware).concat(userToken.middleware)
})

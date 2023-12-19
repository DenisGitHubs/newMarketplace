import { configureStore } from "@reduxjs/toolkit";
import { ads } from './RTKQuery/getAds'
import { me } from './RTKQuery/getMe'
import { userToken } from "./RTKQuery/getToken";
import userReducer from "./Slices/userSlice";
import  productsReducer  from "./Slices/dataProductsSlice";
import photoReducer from "./Slices/photoSlice";
import { advId } from "./RTKQuery/getAdvId";
import { myAds } from "./RTKQuery/getMyAds";
export const store = configureStore({
    reducer: {
        products: productsReducer,
        user: userReducer,
        [ads.reducerPath]: ads.reducer,
        [me.reducerPath]: me.reducer,
        [userToken.reducerPath]: userToken.reducer,
        photo: photoReducer,
        [advId.reducerPath]: advId.reducer,
        [myAds.reducerPath]: myAds.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
    .concat(ads.middleware).concat(me.middleware).concat(userToken.middleware).concat(advId.middleware)
    .concat(myAds.middleware)
})

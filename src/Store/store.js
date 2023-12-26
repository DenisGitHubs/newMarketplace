import { configureStore } from '@reduxjs/toolkit';
import { ads } from './RTKQuery/getAds';
import { me } from './RTKQuery/getMe';
import { userToken } from './RTKQuery/getToken';
import { advId } from './RTKQuery/getAdvId';
import { myAds } from './RTKQuery/getMyAds';
import { comments } from './RTKQuery/getComments';
import { users } from './RTKQuery/getUsers';

export const store = configureStore({
  reducer: {
    [ads.reducerPath]: ads.reducer,
    [me.reducerPath]: me.reducer,
    [userToken.reducerPath]: userToken.reducer,
    [advId.reducerPath]: advId.reducer,
    [myAds.reducerPath]: myAds.reducer,
    [comments.reducerPath]: comments.reducer,
    [users.reducerPath]: users.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(ads.middleware)
      .concat(me.middleware)
      .concat(userToken.middleware)
      .concat(advId.middleware)
      .concat(myAds.middleware)
      .concat(comments.middleware)
      .concat(users.middleware),
});

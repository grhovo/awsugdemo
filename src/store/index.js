import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlices';
import routesSlice from './slices/routesSlice';
import marketSlice from './slices/marketSlice';
import videoSlice from './slices/videoSlice';

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    market: marketSlice.reducer,
    video: videoSlice.reducer,
    routes: routesSlice.reducer,
  },
});

export default store;

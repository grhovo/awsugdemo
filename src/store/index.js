import { configureStore } from '@reduxjs/toolkit';
import routesSlice from './slices/routesSlice';
import marketSlice from './slices/marketSlice';
import videoSlice from './slices/videoSlice';
import textSlice from './slices/textSlice';

const store = configureStore({
  reducer: {
    market: marketSlice.reducer,
    video: videoSlice.reducer,
    routes: routesSlice.reducer,
    text: textSlice.reducer,
  },
});

export default store;

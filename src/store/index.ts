import {configureStore} from '@reduxjs/toolkit';

import animeList from '../Features/AnimeList/animeListSlice';

const store = configureStore({
  reducer: {
    animeList,
  },
  /* middleware: (gDM) => gDM(), */
  devTools: true
});

export default store;

// Для создания useAppHooks.
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


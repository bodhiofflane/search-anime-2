import {createSlice} from '@reduxjs/toolkit';
import { AnimeListWithPaginationLocal } from '../../utils/transformData';

import { fetchAnimeList } from './asyncAnimeListActions';

type AmimeListSlice = {
  status: 'idle' | 'loading' | 'error';
  animeList: AnimeListWithPaginationLocal['animeList']; // Просо удобно разбиваю тип. Может позже придумаю способ лучше.
  pagination: AnimeListWithPaginationLocal['pagination'];
  //errorMessage: unknown;
};

const initialState: AmimeListSlice = {
  status: 'idle',
  animeList: [],
  pagination: {
    lastVisiblePage: 0,
    hasNextPage: false,
    currentPage: 0,
    totalItem: 0,
    perPage: 0,
  },
  //errorMessage: '',
};

const asyncAnimeListSilce = createSlice({
  name: 'animeList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchAnimeList.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchAnimeList.fulfilled, (state, action) => {
      if(action.payload) {
        state.animeList = action.payload.animeList;
        state.pagination = action.payload.pagination;
      }
    })
    .addCase(fetchAnimeList.rejected, (state) => {
      state.status = 'error';
    })
  }

});

export default asyncAnimeListSilce.reducer;
import {createAsyncThunk} from '@reduxjs/toolkit';
import { transformAnimeListWithPagination } from '../../utils/transformData';
import { httpRequest } from '../../httpRequest/httpRequest';


export const fetchAnimeList = createAsyncThunk(
  'animeList/fetchAnimeList',
  async () => {
    try {
    const animeList = await httpRequest();
    console.log(animeList)
    return transformAnimeListWithPagination(animeList);
    } catch(e) {
      console.error(e)
    }

  }
);
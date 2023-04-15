import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useAppHooks';
import {fetchAnimeList} from './animeListActions';

const AsyncAnimeList = () => {
  const dispatch = useAppDispatch();
  const animeList = useAppSelector((state) => state.animeList.animeList);

  useEffect(() => {
    dispatch(fetchAnimeList());
  }, []);

  console.log('asd')
  return (
    <ul className="">
      {animeList.map((item, index) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
};

export default AsyncAnimeList;

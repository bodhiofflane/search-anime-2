import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useAppHooks';
import {fetchAnimeList} from './animeListActions';
import { AnimeListPorops } from './AnimeList.props';

import './AnimeList.scss';

const AnimeList = ({title}: AnimeListPorops) => {
  const dispatch = useAppDispatch();
  const animeList = useAppSelector((state) => state.animeList.animeList);

  useEffect(() => {
    dispatch(fetchAnimeList());
  }, []);

  console.log('asd')
  return (
    <section className='anime-list'>
      <h2 className='anime-list__title'>{title}</h2>
      <ul className="anime-list__list">
        {animeList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </section>
  );
};

export default AnimeList;

import {useEffect, useState, useRef, useMemo} from 'react';

import {NavLink} from 'react-router-dom';

import Dropdown from '../Dropdown/Dropdown';

import './Navigator.scss';
import { NavigatorPorps } from './Navigator.props';

const links = [
  {title: 'All Anime', path: 'search'},
  {title: 'Random Anime', path: 'random-anime'},
  {title: 'Categories', path: '*'},
  {title: 'About', path: 'about'},
];

const Navigator = ({direction}: NavigatorPorps) => {
  // States
  const [activeEl, setActiveEl] = useState<string | null>(null);

  // Refs
  const navRef = useRef<HTMLUListElement>(null);
  const navItemsRef = useRef<HTMLLIElement[]>([]);

  // Handlers
  const handlerActivationItem = function (e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.classList.contains('nav__link')) {
      const itemEl = target.closest('.nav__item');
      if (itemEl) {
        setActiveEl(itemEl.getAttribute('data-index'));
      }
    }
  };

  const handlerDeactivationItem = function (e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.classList.contains('nav__link')) {
      setActiveEl(null);
    }
  };

  useEffect(() => {
    navRef.current?.addEventListener('mouseover', handlerActivationItem);
    navRef.current?.addEventListener('mouseout', handlerDeactivationItem);

    return () => {
      navRef.current?.removeEventListener('mouseover', handlerActivationItem);
      navRef.current?.removeEventListener('mouseout', handlerDeactivationItem);
    };
  }, []);

  console.log('Навигация обновилась', activeEl);

  // Render
  return (
    <ul
      ref={navRef}
      className={`nav${direction === 'col' ? ' nav--direction-col' : ''}`}
    >
      {links.map((item, index) => {
        return (
          <li
            ref={(el) => {
              if (el) navItemsRef.current[index] = el;
            }}
            data-index={`${index}`}
            className={`nav__item${
              activeEl && index.toString() !== activeEl
                ? ' nav__item--blur'
                : ''
            }`}
            key={item.title}
          >
            {item.title === 'Categories' ? (
              <Dropdown text={item.title} />
            ) : (
              <NavLink
                to={item.path}
                className={({isActive}) =>
                  'nav__link' + (isActive ? ' nav__link--active' : '')
                }
              >
                {item.title}
              </NavLink>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigator;

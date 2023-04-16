import {useEffect, useState, useRef, useMemo} from 'react';

import Dropdown from '../Dropdown/Dropdown';

import './Navigator.scss';

const links = ['Home', 'Random Anime', 'Categories', 'About'];

const Navigator = () => {
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

  // UseEffect
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
      className="nav"
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
            key={item}
          >
            {item === 'Categories' ? (
              <Dropdown text={item} />
            ) : (
              <a
                href="#"
                className="nav__link"
              >
                {item}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigator;

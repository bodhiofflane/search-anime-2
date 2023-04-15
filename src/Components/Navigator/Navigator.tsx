import {useEffect, useState, useRef, useMemo} from 'react';

import Dropdown from '../Dropdown/Dropdown';

import './Navigator.scss';

const links = ['Home', 'Random Anime', 'Categories', 'About'];

const Navigator = () => {
  const [activeItem, setActiveItem] = useState<null | number>(null);

  const navRef = useRef<HTMLUListElement>(null);
  const navLinksRef = useRef<HTMLAnchorElement[]>([]);


  useEffect(() => {
    navRef.current?.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement;
      const current = e.currentTarget as HTMLElement;
      if (target.classList.contains('nav__link')) {
        navLinksRef.current.forEach((link, index) => {
          if (target !== link) {
            link.classList.add('nav__item--blur');
          }
        })
      }
    });

    navRef.current?.addEventListener('mouseout', (e) =>{
      const target = e.target as HTMLElement;
      const current = e.currentTarget as HTMLElement;
      if (target.classList.contains('nav__link')) {
        navLinksRef.current.forEach(link => {
          link.classList.remove('nav__item--blur');
        })
      }
    })
  }, []);

  console.log('rerender');
  

  return (
    <ul
      ref={navRef}
      className="nav"
    >
      {links.map((item, index) => {
        if (item === 'Categories') {
          return (
            <li
              className="nav__item"
              key={item}
            >
              <Dropdown
                text={item}
              />
            </li>
          );
        } else {
          return (
            <li
              className="nav__item"
              key={item}
            >
              <a
                ref={(el) => {
                  if (el) navLinksRef.current[index] = el;
                }}
                href="#"
                className="nav__link"
              >
                {item}
              </a>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Navigator;

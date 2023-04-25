import {useState} from 'react';

import {useEffect} from 'react';

import {RxHamburgerMenu} from 'react-icons/rx';
import {AiOutlineClose} from 'react-icons/ai';

import { BurgerMenuProps } from './BurgerMenu.props';

import './BurgerMenu.scss';

const BurgerMenu = ({children}: BurgerMenuProps) => {

  const [isOpen, setOpen] = useState(false);

  const overflowForBody = () => {
    const body = document.body;
    if(isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }

  useEffect(() => {
    overflowForBody();
  }, [isOpen])

  return (
    <div className="burger-menu">
      <button
        onClick={() => setOpen(true)}
        className="burger-menu__btn"
      >
        <RxHamburgerMenu />
      </button>
      <div
        className={`burger-menu__content${
          isOpen ? ' burger-menu__content--open' : ''
        }`}
      >
        <button className="burger-menu__close" onClick={() => setOpen(false)}>
          <AiOutlineClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default BurgerMenu;

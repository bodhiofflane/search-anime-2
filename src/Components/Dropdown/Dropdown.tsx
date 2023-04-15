import {useEffect, useRef, useState} from 'react';

import {AiOutlineDown} from 'react-icons/ai';

import './Dropdown.scss';

const Dropdown = ({text}: {text: string}) => {
  const [isActive, setActive] = useState(false);

  const dropdownBtnRef = useRef<HTMLButtonElement>(null);
  const dropdownContentRef = useRef<HTMLDivElement>(null);

  const handleOpenDropdown = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target !== dropdownBtnRef.current) {
        setActive(false);
      }
    })
  }, []);

  console.log('Reload')

  return (
    <>
      <button
        className='nav__link'
        //className="dropdown__button"
        ref={dropdownBtnRef}
        onClick={handleOpenDropdown}
      >
        {text}
      </button>
      <span>
        <AiOutlineDown
          className={`dropdown__button-arrow${
            isActive ? ' dropdown__button-arrow--open' : ''
          }`}
        />
      </span>

      <div
        ref={dropdownContentRef}
        className={`dropdown${isActive ? ' dropdown--open' : ''}`}
      >
        <ul className="dropdown__list">
          <li className="dropdown__item">
            <a
              href="#"
              className="dropdown__link"
            >
              Sounen
            </a>
          </li>

          <li className="dropdown__item">
            <a
              href="#"
              className="dropdown__link"
            >
              Sounen
            </a>
          </li>

          <li className="dropdown__item">
            <a
              href="#"
              className="dropdown__link"
            >
              Sounen
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;

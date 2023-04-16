import {useState} from 'react';

import AppLogo from '../../Components/AppLogo/AppLogo';
import Login from '../../Components/Login/Login';
import Navigator from '../../Components/Navigator/Navigator';

import {RxHamburgerMenu} from 'react-icons/rx';

import './AppHeader.scss';

const AppHeader = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <header className="app-header">
      <div className="app-header__desctop">
        <AppLogo />
        <Navigator />
        <Login />
      </div>
      <div className="app-header__mobile">
        <div className="burger-menu">
          <button onClick={() => setOpen(true)} className="burger-menu__btn">
            <RxHamburgerMenu />
          </button>
          <div className={`burger-menu__content${isOpen ? ' burger-menu__content--open': ''}`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi impedit porro quia. Vitae, corrupti? Consectetur atque quis, impedit beatae vero dolorum repellat id earum dolores aspernatur! Quae quibusdam deleniti perferendis eaque rerum labore minus ipsa voluptate velit adipisci assumenda blanditiis neque, facere cum laudantium vitae sapiente quis. Explicabo autem aliquid error commodi sunt! Voluptatem optio recusandae beatae eos deleniti? Beatae impedit, facere et nostrum est porro iusto suscipit totam sit officiis quasi sunt eaque fugiat repudiandae dignissimos, cumque voluptas. Laboriosam sapiente, tempora id, cum vitae alias obcaecati, veritatis nostrum officiis minima nisi mollitia placeat soluta deleniti facilis delectus eaque harum!
          </div>
        </div>
        <AppLogo />
      </div>
    </header>
  );
}
 
export default AppHeader;
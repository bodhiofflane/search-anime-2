import {useState} from 'react';

import AppLogo from '../../Components/AppLogo/AppLogo';
import Login from '../../Components/Login/Login';
import Navigator from '../../Components/Navigator/Navigator';

import {RxHamburgerMenu} from 'react-icons/rx';

import './AppHeader.scss';
import BurgerMenu from '../../Components/BurgerMenu/BurgerMenu';

const AppHeader = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <header className="app-header">
      <div className="app-header__desctop">
        <AppLogo />
        <Navigator direction="row" />
        <Login />
      </div>
      <div className="app-header__mobile">
        <BurgerMenu>
          <Navigator direction="col" />
          <Login />
        </BurgerMenu>
        <AppLogo />
      </div>
    </header>
  );
}
 
export default AppHeader;
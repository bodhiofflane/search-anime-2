import { NavItemProps } from './NavItem.pops';

import './NavItem.scss';

const NavItem = ({children}: NavItemProps) => {
  return (
    <li className="nav-item">
      {children}
    </li>
  );
}
 
export default NavItem;
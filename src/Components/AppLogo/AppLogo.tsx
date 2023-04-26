import {Link} from 'react-router-dom';

import './AppLogo.scss';

const AppLogo = () => {
  return (
    <div className="app-logo">
      <Link to="/">
        <h1 style={{fontSize: '20px'}}>Anime Finder</h1>
      </Link>
    </div>
  );
}
 
export default AppLogo;
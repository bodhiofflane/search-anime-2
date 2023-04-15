import AppLogo from '../../Components/AppLogo/AppLogo';
import Login from '../../Components/Login/Login';
import Navigator from '../../Components/Navigator/Navigator';
import './AppHeader.scss';

const AppHeader = () => {
  return (
    <header className="app-header">
      <AppLogo/>
      <Navigator/>
      <Login/>
    </header>
  );
}
 
export default AppHeader;
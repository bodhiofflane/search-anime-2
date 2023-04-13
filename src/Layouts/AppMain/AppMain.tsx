import { AppMainProps } from './AppMain.props';

import './AppMain.scss';

const AppMain = ({children}: AppMainProps) => {
  return (
    <div className="app-main">
      {children}
    </div>
  );
}
 
export default AppMain;
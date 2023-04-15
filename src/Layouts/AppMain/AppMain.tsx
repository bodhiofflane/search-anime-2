import { AppMainProps } from './AppMain.props';

import './AppMain.scss';

const AppMain = ({children}: AppMainProps) => {
  return (
    <main className="app-main">
      {children}
    </main>
  );
}
 
export default AppMain;
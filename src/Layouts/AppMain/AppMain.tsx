import Container from '../../Components/Container/Container';
import { AppMainProps } from './AppMain.props';

import './AppMain.scss';

const AppMain = ({children}: AppMainProps) => {
  return (
    <main className="app-main">
      <Container>
        {children}
      </Container>
    </main>
  );
}
 
export default AppMain;
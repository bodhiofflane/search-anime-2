

import AsyncAnimeList from '../../Features/AsyncAnimeList/AsyncAnimeList';
import AppFooter from '../../Layouts/AppFooter/AppFooter';
import AppHeader from '../../Layouts/AppHeader/AppHeader';
import AppMain from '../../Layouts/AppMain/AppMain';
import './App.scss'

function App() {


  return (
    <div className="app">
      <AppHeader/>
      <AppMain>
        <AsyncAnimeList/>
      </AppMain>
      <AppFooter/>
    </div>
  );
}

export default App

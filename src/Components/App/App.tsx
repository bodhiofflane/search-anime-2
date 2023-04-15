
import AnimeList from '../../Features/AnimeList/AnimeList';
import AppFooter from '../../Layouts/AppFooter/AppFooter';
import AppHeader from '../../Layouts/AppHeader/AppHeader';
import AppMain from '../../Layouts/AppMain/AppMain';
import './App.scss'

function App() {


  return (
    <div className="app">
      <AppHeader/>
      <AppMain>
        <AnimeList/>
      </AppMain>
      <AppFooter/>
    </div>
  );
}

export default App

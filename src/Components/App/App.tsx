import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AnimeList from '../../Features/AnimeList/AnimeList';
import AppFooter from '../../Layouts/AppFooter/AppFooter';
import AppHeader from '../../Layouts/AppHeader/AppHeader';
import AppMain from '../../Layouts/AppMain/AppMain';

import SearchPage from '../../Pages/SearchPage/SearchPage';
import MainPage from '../../Pages/MainPage/MainPage';

import './App.scss';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppHeader />
        <AppMain>
          <Routes>
            <Route
              path="search"
              element={<SearchPage />}
            />
            <Route
              path="/"
              element={<MainPage />}
            />
            <Route path="*" element={<NotFoundPage/>}/>
            {/* <AnimeList title={'Top Anime'} /> */}
          </Routes>
        </AppMain>
        <AppFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;

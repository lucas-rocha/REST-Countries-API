import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import CountriesProvider from './Utils/Context/CountriesContext';
import usePersistedState from './Utils/Hooks/usePersistedState';

import light from './Assets/Styles/Themes/light';
import dark from './Assets/Styles/Themes/dark';

import GlobalStyles from './Assets/Styles/GlobalStyles';

import Header from './Layouts/Header';
import Home from './Pages/Home';
import CountryDetail from './Pages/CountryDetailsPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <CountriesProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Header toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="country/:countryName" element={<CountryDetail />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CountriesProvider>
    </ThemeProvider>
  );
}

export default App;

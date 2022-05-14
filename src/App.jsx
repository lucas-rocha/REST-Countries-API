import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './Assets/Styles/GlobalStyles';

import Header from './Layouts/Header';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

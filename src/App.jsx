import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './components/Home/Main';
import { Token } from './components/Token/Token';
import ItemsContainer from './components/Details/ItemsContainer';
import { MainPage } from './components/MainPage/MainPage';
import Footer1 from './components/MainPage/Footer1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Main />} />
        <Route path="/token" element={<Token />} />
        <Route path="/details" element={<ItemsContainer />} />
      </Routes>
      <Footer1 />
    </Router>
  );
}

export default App;

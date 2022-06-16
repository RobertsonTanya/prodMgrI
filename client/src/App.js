import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './views/Main';
import Details from './components/Details';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route element={<Main />} path="/" default />
              <Route element={<Details />} path="/product/:id"  />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

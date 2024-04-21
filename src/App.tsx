import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AllUsers from './pages/AllUsers';
import AddUsers from './pages/AddUsers';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/users"
          element={<AllUsers />}
        />
        <Route
          path="/add"
          element={<AddUsers />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

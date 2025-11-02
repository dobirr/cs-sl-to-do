import './App.css';
import Login from './components/Login.tsx';
import Welcome from './components/Welcome.tsx';
import { useState } from 'react';
import Menu from './components/Menu.tsx';
import Footer from './components/Footer.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todos from './components/Todos.tsx';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Menu user={user} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome/:username" element={<Welcome />} />
          <Route path="/todos/:username" element={<Todos />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

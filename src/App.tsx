import './App.css';
import Login from './components/Login/Login.tsx';
import Welcome from './components/Welcome/Welcome.tsx';
import { useState } from 'react';
import Menu from './components/Menu/Menu.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (user: User) => {
    setUser(user);
    setIsLoggedIn(true);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Menu user={user} isLoggedIn={isLoggedIn} />
      <main className="flex-grow-1">
        {isLoggedIn && user ? (
          <Welcome user={user} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;

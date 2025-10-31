import './App.css';
import Login from './components/Login/Login.tsx';
import Welcome from './components/Welcome/Welcome.tsx';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (user: User) => {
    setUser(user);
  };

  return (
    <div className="App">
      {user ? <Welcome user={user} /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;

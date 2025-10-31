import './App.css';
import Login from './components/Login/Login.tsx';
import Welcome from './components/Welcome/Welcome.tsx';

function App() {
  return (
    <div className="App">
      <Welcome user={{ email: 'test@test.de' }} />
      <Login />
    </div>
  );
}

export default App;

import { useContext } from 'react';
import { AuthContextProvider, AuthContext } from './features/auth/AuthContext';
import Login from './features/auth/Login';
import Dashboard from './features/auth/Dashboard';

// Composant Main pour accéder à AuthContext
const Main = () => {
  const { state } = useContext(AuthContext);
  return state.user ? <Dashboard /> : <Login />;
};

function App() {
  return (
    <AuthContextProvider>
      <Main />
    </AuthContextProvider>
  );
}

export default App;
import { useContext } from 'react';
import { AuthContext } from './features/auth/AuthContext';

const Home = () => {
  const { state } = useContext(AuthContext);

  return (
    <div>
      {state.user ? (
        <h1>Bienvenue, {state.user.name} !</h1>
      ) : (
        <h1>Veuillez vous connecter</h1>
      )}
    </div>
  );
};

export default Home;
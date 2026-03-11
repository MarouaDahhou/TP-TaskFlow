import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import styles from './Dashboard.module.css';

interface Project {
  id: string;
  name: string;
  color: string;
}

const Dashboard = () => {
  const { state, dispatch } = useContext(AuthContext)!;
  const [projects, setProjects] = useState<Project[]>([]);

  // Récupération des projets depuis le serveur JSON
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('http://localhost:4000/projects');
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error('Erreur lors de la récupération des projets', err);
      }
    };

    fetchProjects();
  }, []);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    alert('Vous êtes déconnecté !');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenue {state.user?.name}</h1>

      <button className={styles.logoutButton} onClick={handleLogout}>
        Déconnexion
      </button>

      <h2 className={styles.projectsTitle}>Mes Projets</h2>

      <ul className={styles.projectList}>
        {projects.map(p => (
          <li key={p.id} className={styles.projectItem}>
            <span
              className={styles.dot}
              style={{ backgroundColor: p.color }}
            ></span>
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
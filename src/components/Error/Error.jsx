import { Link } from 'react-router-dom';
import './notFound.scss';
const ErrorPage = () => {
  return (
    <div className='errorContainer'>
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default ErrorPage;

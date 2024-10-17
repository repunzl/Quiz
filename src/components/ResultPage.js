import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const { score, total } = location.state;
  return (
    <div>
      <h1>Résultat du Quiz</h1>
      <p>Vous avez obtenu {score} sur {total}.</p>
      <Link to="/">Revenir à la sélection des quiz</Link>
    </div>
  );
};

export default ResultPage;

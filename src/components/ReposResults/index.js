import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import Repo from './Repo.js';

import './style.scss';

function ReposResults({results}) {
      // on peut préparer d'abord la liste puis la passer au JSX
  // ou le faire directement dans le JSX
  // const reposList = results.map((result) => <Repo key={result.id} {...result} />);
  return (
   
      <Card.Group
      className="repos-results"
      //je veux qu'il affiche 3 cards par ligne
      itemsPerRow={3}
      stackable
      >
{results.map((result) => <Repo key={result.id} {...result} />)}
    </Card.Group>

  );
}

ReposResults.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired,
}

export default ReposResults;
import React from 'react';
import { Card } from 'semantic-ui-react';
import Repo from './Repo.js';

import './style.scss';

function ReposResults() {
  return (
   
      <Card.Group
      className="repos-results"
      //je veux qu'il affiche 3 cards par ligne
      itemsPerRow={3}
      stackable
      >
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
    </Card.Group>

  );
}

export default ReposResults;
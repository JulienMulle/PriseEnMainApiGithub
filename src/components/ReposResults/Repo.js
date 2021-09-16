import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

function Repo({
    description,
    title,
    login,
    imageUrl,
}) {
  return (
    <Card className="repo">
      <Image
        src={imageUrl}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{login}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
}

Repo.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

Repo.defaultProps ={
    description: '',
}

export default Repo;
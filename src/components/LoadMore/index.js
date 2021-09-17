import React from 'react';
import PropTypes from 'prop-types';
import { Button, Segment } from 'semantic-ui-react';
import './style.scss';

function LoadMore({ onClickButton }) {
  const handleOnClick = () => {
    onClickButton();
  };

  return (
    <Segment className="load-more">
      <Button fluid onClick={handleOnClick}>Load More</Button>
    </Segment>
  );
}

LoadMore.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};

export default LoadMore;
import React from 'react';
import { Segment, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';


import './style.scss';

function SearchBar({ onFormSubmit, inputValue }) {
    const handleOnSubmit = ()=> {
            // ici pas besoin de faire event.preventDefault
    // c'est déjà prévu dans le composant Form de SUI
    console.log('handleOnSubmit');
    onFormSubmit('test');
    }

  return (
    <div className="search-bar">
      <Segment>
      <Form onSubmit={handleOnSubmit}>
          <Form.Input
            icon="search"
            iconPosition="left"
            placeholder="Votre recherche"
            fluid
            value = {inputValue}
          />
        </Form>
      </Segment>
    </div>
  );
}

SearchBar.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
  };

export default SearchBar;
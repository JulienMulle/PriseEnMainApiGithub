import React from 'react';
import { Segment, Input } from 'semantic-ui-react';
import './style.scss';

function SearchBar() {
  return (
    <div className="search-bar">
      <Segment>
        <Input
          icon="search"
          iconPosition="left"
          placeholder="Votre recherche"
          fluid
        />
      </Segment>
    </div>
  );
}

export default SearchBar;
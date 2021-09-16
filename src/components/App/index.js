// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';

// == Import
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <SearchBar />
    <Message />
    <ReposResults />
  </div>
);

// == Export
export default App;
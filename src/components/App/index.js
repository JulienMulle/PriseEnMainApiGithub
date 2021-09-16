// == Import npm
import React, { useState } from 'react';


//components
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';

import reposData from 'src/data/repos';

// == Import
import './style.scss';

// == Composant
function App() {
  const trimmedData = reposData.items.map((item) => (
  {
    id: item.id,
    description: item.description,
    title: item.full_name,
    imageUrl: item.owner.avatar_url,
    login: item.owner.login,
  }));

  const [results, setResults] = useState(trimmedData);

  return(
  <div className="app">
    <Header />
    <SearchBar />
    <Message content={`La recherche a donné ${reposData.total_count} résultats`}/>
    <ReposResults results={results} />
  </div>
  );
}

// == Export
export default App;
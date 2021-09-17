// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';


//components
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import LoadMore from 'src/components/LoadMore';


// == Import
import './style.scss';

// == Composant
function App() {
  const trimGithubData = (items) => items.map((item) => ({
    id: item.id,
    description: item.description,
    title: item.full_name,
    imageUrl: item.owner.avatar_url,
    login: item.owner.login,
  }));

  const [results, setResults] = useState([]);
  // state pour gérer ce qu'il y a dans l'input text
  const [search, setSearch] = useState('');
  // state qui va prendre le nom qu'on placera dans la requête
  const [query, setQuery] = useState('');
  // state qui prend en charge le total des résultats
  const [totalCount, setTotalCount] = useState(0);
    // state qui prend en charge l'apparition du message
  const [isVisible, setIsVisible] = useState(false);
    // state qui prend en charge le n° de page
  const [page, setPage] = useState(1);

  const loadData = () => {
    if (query !== '') {
      axios.get(`https://api.github.com/search/repositories?q=${query}`)
        .then((response) => {
          // une fois que j'ai reçu je vais utiliser la fonction qui va réduire
          // le nombre de propriétés attendues pour chaque objet dans le tableau
          const trimmedData = trimGithubData(response.data.items);

          // on vient déverser les résultats qui sont déjà dans le state
          // puis mettre les nouveaux à la suite
          setResults([...results, ...trimmedData]);
          setTotalCount(response.data.total_count);
          setIsVisible(true);
        })
        .catch((error) => console.log(`error`, error));
    }
  };
    // au 1e rendu du composant je teste la requête dans un 1e temps
  // une fois qu'on a le résultat on le traite pour récupérer
  // uniquement les propriétés qui nous intéresse,
  // on vient stocker le tableau d'obejt simplifié dans le state
  useEffect(loadData, [query, page]);

  const getMessage = () => {
    let text = 'Taper votre recherche';

    if (totalCount === 1) {
      text = 'La recherche a donné un seul résultat';
    }
    else if (totalCount > 1) {
      text = `La recherche a donné ${totalCount} résultats`;
    }
    return text;
  };
  const setSearchQuery = () => {
    if (search !== query) {
      setResults([]);
      setPage(1);
      setTotalCount(0);
      setQuery(search);
    }
  };

  return(
  <div className="app">
    <Header />
    <SearchBar 
    onFormSubmit={setSearchQuery}
    inputValue= {search}
    onChangeInputValue={setSearch}
     />
    {isVisible && <Message content={getMessage()} showMessage={setIsVisible} />}
    <ReposResults results={results} />
    {results.length > 0 && (
        <LoadMore onClickButton={() => setPage(page + 1)} />
      )}
  </div>
  );
}

// == Export
export default App;
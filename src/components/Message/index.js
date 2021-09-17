import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Message as MessageSUI } from 'semantic-ui-react';

import './style.scss';

function Message({content, showMessage}) {
  // on va faire disparaitre le message au bout de 3 secondes
  // on place le timeout dans un useEffect pour l'avoir uniquement
  // au 1e rendu
  useEffect(() => {
    const timeout = setTimeout(() => {
      showMessage(false);
    }, 5000);

    // pour nettoyer les timers ou listeners qu'on aura posé dans
    // le callback d'un useEffect, on retourne une fonction
    // qui sera exécutée lorsque le composant sera démonté ou
    // comme ici, quand la valeur de content sera changée
    return () => clearTimeout(timeout);
  }, [content]);
  
  return (
    <div className="message">
      <MessageSUI>{content}</MessageSUI>
    </div>
  );
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Message;
import React from 'react';
import { Message as MessageSUI } from 'semantic-ui-react';

import './style.scss';

function Message() {
  return (
    <div className="message">
      <MessageSUI>La recherche a donné 1321321 résultats</MessageSUI>
    </div>
  );
}

export default Message;
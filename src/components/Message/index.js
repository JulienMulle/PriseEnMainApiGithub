import React from 'react';
import PropTypes from 'prop-types';
import { Message as MessageSUI } from 'semantic-ui-react';

import './style.scss';

function Message({content}) {
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
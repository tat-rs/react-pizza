import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.scss';

function Message({ text }) {
  console.log(typeof text);
  return (
    <div className={styles.message}>
      <p className={styles.message__text}>
        {text}
      </p>
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;

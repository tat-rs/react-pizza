import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

function Heading({ text }) {
  return (
    <h1 className={styles.title}>
      {text}
    </h1>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;

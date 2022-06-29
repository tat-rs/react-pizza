import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

function Heading({ text, className }) {
  return (
    <h1 className={classNames(styles.title, className)}>
      {text}
    </h1>
  );
}

Heading.defaultProps = {
  className: '',
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Heading;

import React from 'react';
import classNames from 'classnames';
import styles from './Heading.module.scss';

type HeadingItem = {
  text: string;
  className: string | '';
}

function Heading({ text, className }: HeadingItem) {
  return (
    <h1 className={classNames(styles.title, className)}>
      {text}
    </h1>
  );
}

export default Heading;

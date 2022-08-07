import React from 'react';
import styles from './Message.module.scss';

type MessageItem = {
  text: string;
}

function Message({ text }: MessageItem) {
  return (
    <div className={styles.message}>
      <p className={styles.message__text}>
        {text}
      </p>
    </div>
  );
}

export default Message;

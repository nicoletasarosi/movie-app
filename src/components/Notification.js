import React from 'react';
import {Snackbar} from 'react-native-paper';

const Notification = ({visible, message, onDismiss}) => {
  return (
    <Snackbar visible={visible} onDismiss={onDismiss}>
      {message}
    </Snackbar>
  );
};

export default Notification;

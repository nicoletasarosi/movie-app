import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import Notification from './Notification';

const NetworkWrapper = ({children}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleConnectivityChange = state => {
      if (!state.isConnected) {
        setVisible(true);
      }
    };
    return NetInfo.addEventListener(handleConnectivityChange);
  }, []);
  return (
    <>
      <Notification
        visible={visible}
        message={'Internet Problem! Please check your internet connection!'}
        onDismiss={() => setVisible(false)}
      />
      {children}
    </>
  );
};

export default NetworkWrapper;

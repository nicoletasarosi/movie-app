import React, {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {Snackbar} from 'react-native-paper';

const NetworkWrapper = ({children}) => {
  const [visible, setVisible] = React.useState(false);

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
      <Snackbar visible={visible}>
        Internet Problem! Please check your internet connection!
      </Snackbar>
      {children}
    </>
  );
};

export default NetworkWrapper;

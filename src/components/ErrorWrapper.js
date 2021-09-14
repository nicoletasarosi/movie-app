import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {selectError} from '../redux/selectors';
import {setErrorAction} from '../redux/actions';
import Notification from './Notification';

const ErrorWrapper = ({children}) => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  return (
    <>
      <Notification
        visible={!!error}
        onDismiss={() => dispatch(setErrorAction(''))}
        message={error}
      />
      {children}
    </>
  );
};

export default ErrorWrapper;

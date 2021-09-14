/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configure from './src/services/configureStore';

import App from './App';
import {name as appName} from './app.json';

const {store, persistor} = configure();

const AppComponent = () => (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
            <App/>
    </PersistGate>
    </Provider>
);

AppRegistry.registerComponent(appName, () => AppComponent);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FavoritesScreen from './src/screens/FavoritesScreen';
import SearchMoviesScreen from './src/screens/SearchMoviesScreen';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import NetworkWrapper from './src/components/NetworkWrapper';
import ErrorWrapper from './src/components/ErrorWrapper';

const Stack = createNativeStackNavigator();

const App: () => Node = () => (
  <ErrorWrapper>
    <NetworkWrapper>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Favorites'} component={FavoritesScreen} />
          <Stack.Screen name={'Search Movies'} component={SearchMoviesScreen} />
          <Stack.Screen name={'Movie Details'} component={MovieDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NetworkWrapper>
  </ErrorWrapper>
);

export default App;

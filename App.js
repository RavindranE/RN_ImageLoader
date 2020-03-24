/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AlbumStackContainer from './src/scenes/AlbumStackContainer';

//Aet App Container Stack
export default function App() {
  return (
    <NavigationContainer>
      <AlbumStackContainer />
    </NavigationContainer>
  );
}


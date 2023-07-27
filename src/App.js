import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Route from './router';

function App() {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
}

export default App;
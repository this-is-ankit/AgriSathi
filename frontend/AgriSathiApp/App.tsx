import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { AppProvider } from './src/providers/AppProvider';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AppProvider>
      <StatusBar 
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
        backgroundColor="transparent"
        translucent
      />
      <AppNavigator />
    </AppProvider>
  );
}

export default App;

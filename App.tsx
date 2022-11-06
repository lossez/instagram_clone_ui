import React from 'react'

import { NativeBaseProvider } from 'native-base';
import AppNavigation from './app/navigation/AppNavigation';


const App = () => {
  return (
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
  )
}

export default App
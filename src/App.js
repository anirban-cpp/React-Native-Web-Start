import React from 'react';
import { Platform } from 'react-native';
import RevenueSelector from './components/Revenue.Selector';

const isNative = Platform.OS !== 'web';

const App = () => {
  return (
    <>
      <RevenueSelector />
    </>
  );
};

export default App;

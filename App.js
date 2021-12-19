import React from 'react';
import AuthProvider from './src/AuthContext';

import AppNavigation from './src/AppNavigation';

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);

export default function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}

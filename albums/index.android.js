// Index.android.js - place code in here for android!!!


// Import a library to help create a componenet

import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => (
    <Header headerText={'Albums'}/>
);

// Render  it to device
AppRegistry.registerComponent('albums', () => App);
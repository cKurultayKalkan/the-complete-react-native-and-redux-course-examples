// Index.android.js - place code in here for android!!!


// Import a library to help create a componenet

import React from 'react';
import {Text, AppRegistry} from 'react-native';

// Create a Component
const App = () => (
    <Text>Text Area</Text>
);

// Render  it to device
AppRegistry.registerComponent('albums', () => App);
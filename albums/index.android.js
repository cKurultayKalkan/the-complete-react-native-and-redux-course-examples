// Index.android.js - place code in here for android!!!


// Import a library to help create a componenet

import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// Create a Component
const App = () => (
    <View>
      <Header headerText={'Albums'}/>
      <AlbumList />
    </View>
);

// Render  it to device
AppRegistry.registerComponent('albums', () => App);
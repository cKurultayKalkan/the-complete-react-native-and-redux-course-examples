import React from 'react';
import { View, Text, Image } from 'react-native'
import Card from './Card.js'
import CardSection from './CardSection'

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image} = album;
  const {headerContentStyle, thumbnailStyle} = styles;

  return (
      <Card>
        <CardSection>
          <View>
            <Image style={thumbnailStyle} source={{uri: thumbnail_image}}/>
          </View>
          <View style={headerContentStyle}>
            <Text>{artist}</Text>
            <Text>{title}</Text>
          </View>
        </CardSection>
      </Card>)
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  }
};

export default AlbumDetail;
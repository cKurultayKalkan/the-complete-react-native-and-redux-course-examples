import React from 'react';
import { View, Text, Image } from 'react-native'
import Card from './Card.js'
import CardSection from './CardSection'
import Button from './Button';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image} = album;
  const {headerContentStyle, headerTextStyle, thumbnailStyle, imageStyle, thumbnailContainerStyle} = styles;

  return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image style={thumbnailStyle} source={{uri: thumbnail_image}}/>
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{artist}</Text>
            <Text>{title}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={imageStyle} source={{uri: image}}/>
        </CardSection>
        <CardSection>
          <Button onPress={() => console.log(title)}/>
        </CardSection>
      </Card>)
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
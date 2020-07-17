import React from 'react'
import {Text,StyleSheet,View} from 'react-native'
import ImageDetails from '../components/imageDetails'

const ImageScreen = () => {
  return(
      <View>
          <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore="imageScore-9"/>
          <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')}  imageScore="imageScore-3"/>
          <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')}  imageScore="imageScore-5"/>
         
      </View>
  )
}
const styles = StyleSheet.create({})

export default ImageScreen
import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View style={{alignItems:"center"}}>
      <Text>
        Let's explore images! 
      </Text>
      <Image source={require('../assets/images/nala.jpeg')} style = {{width:300, height:300}} />
      <Image source={{uri:"https://digitalcontent.api.tesco.com/v2/media/ghs/380cecc0-cffa-4315-857c-83334dd3dad9/7b77b96b-863d-4d76-89fe-40b4bd69b34e_1491495329.jpeg?h=960&w=960"}} style = {{width:300, height:300}} />

    </View>
  )
}

export default ImageComponent
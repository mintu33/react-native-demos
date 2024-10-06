import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import st from './ExternalStyle'

const ProfileCardComponent = () => {
  return (
    <View style={{alignItems:"center"}}>
      <Image source={require('../assets/images/nala.jpeg')} style = {st.cardImageStyle}/>
      <Text>Khushi Patel</Text>
      <Text>My name is Khushi Patel</Text>
      <Button title='Press Me!' onPress={() => alert("You have clicked me.")}/>
    </View>
  )
}

export default ProfileCardComponent
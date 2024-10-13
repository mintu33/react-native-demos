import { View, Text, Image, Button, StyleSheet } from 'react-native'
import React from 'react'
import st from './ExternalStyle'

const ProfileCardComponent = () => {
  return (
    <View style = {st.cardStyle}>
      <Image source={require('../assets/images/nala.jpeg')} style = {st.cardImageStyle}/>
      <Text style = {st.heading}>Khushi Patel</Text>
      <Text style = {[st.text, style.text]}> My name is Khushi Patel and I live in the UK. I am in year 11 and I like watching TV. </Text>
      <Button title='Press Me!' onPress={() => alert("You have clicked me.")}/>
    </View>
  )
}

export default ProfileCardComponent

const style = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
})
import { View, Text, Button } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View>
      <Text>Hello Khushi</Text>
      <Button title='Click me!' onPress={() => alert("You have clicked me")}/>
    </View>
  )
}

export default Index
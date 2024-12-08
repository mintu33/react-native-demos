import { View, Text } from 'react-native'
import React from 'react'

const ChildComponent = ({name}) => {
  return (
    <View>
      <Text>ChildComponent</Text>
      <Text>Name: {name}</Text>
    </View>
  )
}

export default ChildComponent
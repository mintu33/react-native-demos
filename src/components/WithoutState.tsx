import { View, Text, Button } from 'react-native'
import React from 'react'

const WithoutState = () => {
    let count = 0
  return (
    <View>
      <Text>The count is {count}</Text>
      <Button title='Increment' onPress={() => count++}/>
    </View>
  )
}

export default WithoutState
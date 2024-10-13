import { View, Text } from 'react-native'
import React from 'react'

const DynamicContentComponent = () => {
    const username = "Khushi"
    const multiply = (a: number,b: number)=> a * b
    let me = {name: "Khushi", age: 16}
  return (
    <View>
      <Text>My name is {username}.
      </Text>
      <Text> 5 * 8 is {multiply(5,8)}</Text>
      <Text>My name is {me.name} and I am {me.age} years old.</Text>
    </View>
  )
}

export default DynamicContentComponent
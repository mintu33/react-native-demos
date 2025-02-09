import { View, Text, Button } from 'react-native'
import React from 'react'

interface ComponentTypeProps{
    count: number,
    onClickHandler: () => void
}

const ComponentTwo = ({count, onClickHandler}: ComponentTypeProps) => {
  return (
    <View>
      <Text>Component Two</Text>
      <Text>Count: {count}</Text>
      <Button title='Add' onPress={onClickHandler}/>
    </View>
  )
}

export default ComponentTwo